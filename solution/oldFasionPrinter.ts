import Printer from "./printer";

export default class OldFashionedPrinter implements Printer {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }
}
