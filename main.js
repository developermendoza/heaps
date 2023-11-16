// MaxHeap class
class MaxHeap {
  constructor() {
    this.heap = []; // Array to store heap elements
  }

  // Method to insert a new element into the max heap
  insert(value) {
    this.heap.push(value); // Add the new element to the end of the array
    this.heapifyUp(); // Restore the max heap property
  }

  // Method to remove and return the maximum element from the max heap
  extractMax() {
    if (this.heap.length === 0) {
      return null; // Heap is empty
    }

    if (this.heap.length === 1) {
      return this.heap.pop(); // Only one element in the heap
    }

    const max = this.heap[0]; // Maximum element is at the root
    this.heap[0] = this.heap.pop(); // Replace the root with the last element
    this.heapifyDown(); // Restore the max heap property
    return max;
  }

  // Helper method to restore the max heap property upward
  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] < this.heap[currentIndex]) {
        // Swap if the parent is smaller than the current element
        [this.heap[parentIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[parentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break; // The max heap property is satisfied
      }
    }
  }

  // Helper method to restore the max heap property downward
  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let maxIndex = currentIndex;

      // Find the index of the maximum element among the current, left child, and right child
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }

      if (currentIndex !== maxIndex) {
        // Swap if the current element is smaller than the maximum of its children
        [this.heap[currentIndex], this.heap[maxIndex]] = [
          this.heap[maxIndex],
          this.heap[currentIndex],
        ];
        currentIndex = maxIndex;
      } else {
        break; // The max heap property is satisfied
      }
    }
  }

  // Method to get the maximum element without removing it from the max heap
  getMax() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Method to get the size of the max heap
  size() {
    return this.heap.length;
  }

  // Method to check if the max heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// Usage
const myMaxHeap = new MaxHeap();
myMaxHeap.insert(10);
myMaxHeap.insert(5);
myMaxHeap.insert(17);
myMaxHeap.insert(8);
myMaxHeap.insert(25);

console.log("Max Heap:");
console.log("Size:", myMaxHeap.size()); // Outputs: 5
console.log("Max element:", myMaxHeap.getMax()); // Outputs: 25

console.log("Extracting max element:", myMaxHeap.extractMax()); // Outputs: 25

console.log("Max Heap after extraction:");
console.log("Size:", myMaxHeap.size()); // Outputs: 4
console.log("Max element:", myMaxHeap.getMax()); // Outputs: 17
