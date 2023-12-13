#ifndef AWESOMECALCULATOR_H
#define AWESOMECALCULATOR_H

extern "C" const char *execute_rust(const char *cmd);

namespace awesomecalculator {
const char *execute(const char *cmd);
} // namespace awesomecalculator

#endif /* AWESOMECALCULATOR_H */