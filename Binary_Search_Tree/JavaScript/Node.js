class Node {
    constructor(value) {
        this.mValue = value;
        this.mRight = null;
        this.mLeft = null;
    }

    get value() { return this.mValue; }
    set value(newValue) { this.mValue = newValue; }

    get left() { return this.mLeft; }
    set left(n) { this.mLeft = n; }

    get right() { return this.mRight; }
    set right(n) { this.mRight = n; }
}

export default Node;