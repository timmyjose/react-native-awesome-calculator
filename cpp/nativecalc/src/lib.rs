use serde::{Deserialize, Serialize};
use std::ffi::{c_char, CStr, CString};

#[derive(Deserialize)]
pub enum Command {
    Add { x: f64, y: f64 },
    Sub { x: f64, y: f64 },
    Mul { x: f64, y: f64 },
    Div { x: f64, y: f64 },
    Answer,
}

#[derive(Serialize)]
pub struct CalcResult {
    pub res: String,
    pub operation: String,
}

#[no_mangle]
pub extern "C" fn execute_rust(raw_cmd: *const c_char) -> *const c_char {
    let cmd = unsafe {
        let cmd_str = CStr::from_ptr(raw_cmd).to_str().unwrap();
        let local_cmd: Command = serde_json::from_str(cmd_str)
            .expect("failed to extract Command from raw command string");
        local_cmd
    };

    match execute_cmd(cmd) {
        Ok(res) => {
            let res_str =
                serde_json::to_string(&res).expect("failed to serialise command execution result");
            CString::new(res_str.as_bytes()).unwrap().into_raw()
        }
        Err(e) => panic!("Command execution failed: {e:?}"),
    }
}

fn execute_cmd(cmd: Command) -> Result<CalcResult, Box<dyn std::error::Error>> {
    Ok(match cmd {
        Command::Add { x, y } => CalcResult {
            res: (x + y).to_string(),
            operation: "addition".into(),
        },

        Command::Sub { x, y } => CalcResult {
            res: (x - y).to_string(),
            operation: "subtraction".into(),
        },
        Command::Mul { x, y } => CalcResult {
            res: (x * y).to_string(),
            operation: "multiplication".into(),
        },
        Command::Div { x, y } => CalcResult {
            res: if y == 0.0 {
                0.0.to_string()
            } else {
                (x / y).to_string()
            },
            operation: "division".into(),
        },
        Command::Answer => CalcResult {
            res: 42.0.to_string(),
            operation: "answer".into(),
        },
    })
}
