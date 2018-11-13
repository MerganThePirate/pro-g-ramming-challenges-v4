export default class Bucket {
  constructor(max) {
    this.max = max;
    this.count = 0;
  }

  catch() {
    this.count++;
  }

  empty() {
    this.count = 0;
  }

  isFull() {
    return this.count === this.max;
  }
}
Bucket.List = [
  new Bucket(3)
];
Bucket.reset = function() {
  Bucket.List.forEach((bucket)=>{
    bucket.count = 0;
  });
}
