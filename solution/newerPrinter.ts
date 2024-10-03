import Printer from "./printer";
import Scanner from "./scanner";
export default class NewerPrinter implements Printer, Scanner {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }
}