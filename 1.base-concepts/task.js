"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		const x = -b / (2 * a);
		arr = [x];
	} else {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr = [x1, x2];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	const percentMonth = percent / 100 / 12;

	const loanPrincipal = amount - contribution;

	const payMonth = loanPrincipal * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));

	const amountTotal = payMonth * countMonths;

	return Number(amountTotal.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));