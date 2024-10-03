import { Employee } from "./employee"

export default class PartTimeEmployee extends Employee {
  calculateSalary(): number {
    return 3000;
  }

}