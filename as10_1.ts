class BonusCalculator {
    calculateBonus(salary: number): number {
        if (salary < 20000) {
            return salary * 0.05;
        } else if (salary <= 39999) {
            return salary * 0.08;
        } else {
            return salary * 0.10;
        }
    }
}

class TaxCalculator {
    calculateTax(income: number): number {
        if (income <= 20000) {
            return income * 0.0;
        } else if (income <= 40000) {
            return income * 0.05;
        } else {
            return income * 0.10;
        }
    }
}
class Employee {
    public name: string;
    public basicSalary: number;
    private bonusCalculator: BonusCalculator;
    private taxCalculator: TaxCalculator;

    constructor(name: string, basicSalary: number) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.bonusCalculator = new BonusCalculator();
    this.taxCalculator = new TaxCalculator();
    }

calculateGrossSalary(): number {
    const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
    return this.basicSalary + bonus;
    }

calculateNetSalary(): number {
    const grossSalary = this.calculateGrossSalary();
    const tax = this.taxCalculator.calculateTax(grossSalary);
    return grossSalary - tax;
}
displaySalaryDetails(): void {
    const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
    const grossSalary = this.calculateGrossSalary();
    const tax = this.taxCalculator.calculateTax(grossSalary);
    const netSalary = this.calculateNetSalary();

    console.log(`Basic Salary of ${this.name}: $ ${this.basicSalary}`);
    console.log(`Bonus: $ ${bonus}`);
    console.log(`Gross Salary: $ ${grossSalary}`);
    console.log(`Tax: $ ${tax}`);
    console.log(`Net Salary: $ ${netSalary}`);
    console.log('-----------------------------------');
    }
}
const emp1 = new Employee("Apinya", 30000);
emp1.displaySalaryDetails();

const emp2 = new Employee("Somsak", 45000);
emp2.displaySalaryDetails();