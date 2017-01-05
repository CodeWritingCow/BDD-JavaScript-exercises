var chai = require('chai'),
	expect = chai.expect,
	validatorWith = require('../lib/validator'),
	nonPositiveValidationRule = require('../lib/rules/nonPositive'),
	nonDivisibleValidationRule = require('../lib/rules/nonDivisible');


describe('A Validator', function() {
	it('will return no errors for valid numbers', function() {
		var validator = validatorWith([
			nonPositiveValidationRule,
			nonDivisibleValidationRule(3, 'error.three'),
			nonDivisibleValidationRule(5, 'error.five'),
			]);
		expect(validator(7)).to.be.empty;
	});

	describe('will include error.nonpositive for not strictly positive numbers: ', function() {
		it('like 0', function() {
			var validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
				]);
		expect(validator(0)).to.include('error.nonpositive');
		});

		it('like -2', function() {
			var validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
				]);
		expect(validator(-2)).to.include('error.nonpositive');
		});
	});

	describe('will include error.three for divisible by 3 numbers: ', function() {
		it('like 3', function() {
			var validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
				]);
			expect(validator(3)).to.include('error.three');
		});

		it('like 15', function() {
			var validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
			]);
			expect(validator(15)).to.include('error.three');
		});
	});

	describe('will include error.five for divisible by 5 numbers: ', function() {
		it('like 5', function() {
			var validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
				]);
			expect(validator(5)).to.include('error.five');
		});

		it('like 15', function() {
			var validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
				]);
			expect(validator(15)).to.include('error.five');
		});
	});
});