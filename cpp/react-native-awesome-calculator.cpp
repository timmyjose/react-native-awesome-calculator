#include "react-native-awesome-calculator.h"

namespace awesomecalculator {
const char *execute(const char *cmd) { return execute_rust(cmd); }
} // namespace awesomecalculator
