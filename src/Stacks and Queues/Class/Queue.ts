class Queue {
    queue: number[] = [];

    enqueue(value: number) {
        this.queue.push(value);
    }

    dequeue() {
        this.queue.shift();
    }

    peek(): number {
        if (this.queue.length === 0) {
            return -1;
        }
        return this.queue[0];
    }
}