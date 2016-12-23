var nonPositiveValidationRule = require('./rules/nonPositive'),
	nonDivisibleValidationRule = require('./rules/nonDivisible'),
	validationRules = [
	nonPositiveValidationRule,
	makeNonDivisibleValidationRule(3, 'error.three'),
	nonDivisibleBy5ValidationRule = makeNonDivisibleValidationRule(5, 'error.five')
];

module.exports = function(n) {
	return validationRules.reduce(function(result, rule) {
		rule(n, result);
		return result;
	}, []);
};