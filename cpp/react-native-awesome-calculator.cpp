#include "react-native-awesome-calculator.h"

namespace awesomecalculator {
double add(double a, double b) { return rust_add(a, b); }
double sub(double a, double b) { return rust_sub(a, b); }
double mul(double a, double b) { return rust_mul(a, b); }
double div(double a, double b) { return rust_div(a, b); }
} // namespace awesomecalculator
