import { Employee } from "./employee";

export default class InternEmployee extends Employee {
  calculateSalary(): number {
    return 1000
  }

}