class No {
    value: number;
    nextNode: No | null;

    constructor(value: number) {
        this.value = value;
        this.nextNode = null;
    };

    setValue = (newValue: number) => {
        this.value = newValue;
    }
    getValue = (): number => {
        return this.value;
    };
    setNextNode = (newNode: No | null) => {
        return this.nextNode = newNode;
    };
    getNextNode = (): No | null => {
        return this.nextNode;
    }
    toString = (): string => {
        return "Data: " + this.value;
    }

}

export default No;
