import Regtangle from "./rectangle";
export default class Square extends Regtangle {
    constructor(side: number) {
        super(side, side);
    }
}
