#ifndef AWESOMECALCULATOR_H
#define AWESOMECALCULATOR_H

extern "C" double rust_add(double x, double y);
extern "C" double rust_sub(double x, double y);
extern "C" double rust_mul(double x, double y);
extern "C" double rust_div(double x, double y);

namespace awesomecalculator {
double add(double x, double y);
double sub(double x, double y);
double mul(double x, double y);
double div(double x, double y);
} // namespace awesomecalculator

#endif /* AWESOMECALCULATOR_H */