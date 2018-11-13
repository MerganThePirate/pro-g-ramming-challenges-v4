export default class Bucket {
  constructor(max) {
    this.max = max;
    this._count = 0;
  }

  catch() {
    this._count++;
  }

  count() {
    return this._count;
  }

  empty() {
    this._count = 0;
  }



  isFull() {
    return this._count === this.max;
  }
}
Bucket.List = [
  new Bucket(3)
];
Bucket.reset = function() {
  Bucket.List.forEach((bucket)=>{
    bucket._count = 0;
  });
}
