import { Employee } from "../../solution/problem2/employee";
import FulltimeEmployee from "../../solution/problem2/fullTimeEmployee";
import InternEmployee from "../../solution/problem2/internEmployee";
import PartTimeEmployee from "../../solution/problem2/partTimeEmployee";

// Employee.test.js
describe('Employee Classes', () => {
  describe('FulltimeEmployee', () => {
    test('calculates salary correctly', () => {
      const fulltime = new FulltimeEmployee('Jane Smith');
      expect(fulltime.calculateSalary()).toBe(5000);
    });

    test('stores name correctly', () => {
      const fulltime = new FulltimeEmployee('Jane Smith');
      expect(fulltime.name).toBe('Jane Smith');
    });
  });

  describe('PartTimeEmployee', () => {
    test('calculates salary correctly', () => {
      const parttime = new PartTimeEmployee('Bob Johnson');
      expect(parttime.calculateSalary()).toBe(3000);
    });

    test('stores name correctly', () => {
      const parttime = new PartTimeEmployee('Bob Johnson');
      expect(parttime.name).toBe('Bob Johnson');
    });
  });

  describe('InternEmployee', () => {
    test('calculates salary (stipend) correctly', () => {
      const intern = new InternEmployee('Alice Brown');
      expect(intern.calculateSalary()).toBe(1000);
    });

    test('stores name correctly', () => {
      const intern = new InternEmployee('Alice Brown');
      expect(intern.name).toBe('Alice Brown');
    });
  });

  describe('Mixed Employees', () => {
    test('calculates total salary for different employee types', () => {
      const employees = [
        new FulltimeEmployee('Jane Smith'),
        new PartTimeEmployee('Bob Johnson'),
        new InternEmployee('Alice Brown')
      ];

      const totalSalary = employees.reduce((sum, emp) => sum + emp.calculateSalary(), 0);
      expect(totalSalary).toBe(9000);
    });
  });
});