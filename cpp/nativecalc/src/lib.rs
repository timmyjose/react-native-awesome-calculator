#[no_mangle]
pub extern "C" fn rust_add(x: f64, y: f64) -> f64 {
    x + y
}

#[no_mangle]
pub extern "C" fn rust_sub(x: f64, y: f64) -> f64 {
    x - y
}

#[no_mangle]
pub extern "C" fn rust_mul(x: f64, y: f64) -> f64 {
    x * y
}

#[no_mangle]
pub extern "C" fn rust_div(x: f64, y: f64) -> f64 {
    if y == 0.0 {
        0.0
    } else {
        x / y
    }
}

#[no_mangle]
pub extern "C" fn rust_answer() -> f64 {
    42.0
}
