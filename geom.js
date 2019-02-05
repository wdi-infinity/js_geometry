class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
this.length = this.length;
this.width = this.width;
if(this.length === this.width){
  return true;
}else{
  return false;
}
  }
area(){
 
this.length = this.length;
this.width = this.width;
    return this.length * this.width;
}
perimeter(){
this.length = this.length;
this.width = this.width;
  return (2 * this.length ) + (2 * this.width );
}
}

////// console

/*const test = new Rectangle (4, 5);

test.area()
20
test.perimeter()
18
test.isSquare()
false
*/


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
