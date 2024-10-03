import { Employee } from "./employee"

export default class FulltimeEmployee extends Employee {
  calculateSalary(): number {
    return 5000
  }

}