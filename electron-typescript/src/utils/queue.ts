export default class Queue<T>{
    private _queue: T[];
 
    constructor(queue?: T[]) {
      this._queue = queue || [];
   }
 
   enqueue(item: T) {
     this._queue.push(item);
   }
 
   dequeue(): T | undefined {
     return this._queue.shift();
   }
 
   clear() {
     this._queue = [];
   }
 
   get count(): number {
     return this._queue.length;
   }

   get front(): T | undefined {
       return this._queue[0];
   }
}