class DoublyNo {
    value: number;
    prevNode: DoublyNo | null;
    nextNode: DoublyNo | null;

    constructor(value: number) {
        this.value = value;
        this.prevNode = null;
        this.nextNode = null;

    };

    setValue = (newValue: number) => {
        this.value = newValue;
    }
    getValue = (): number => {
        return this.value;
    };
    setPrevNode = (newNode: DoublyNo | null) => {
        return this.prevNode = newNode;
    };
    setNextNode = (newNode: DoublyNo | null) => {
        return this.nextNode = newNode;
    };
    getPreviousNode = (): DoublyNo | null => {
        return this.prevNode;
    }
    getNextNode = (): DoublyNo | null => {
        return this.nextNode;
    }
    toString = (): string => {
        return `Value: ${this.value}`;
    }

}

export default DoublyNo;
