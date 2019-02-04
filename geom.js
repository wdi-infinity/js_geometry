class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  get isSquare(){
    if (this.height === this.width){
    return true;
    }
    }
    get calcArea(){
    return this.height * this.width;
    }
    
    get perimeter(){
        return 2 * (this.height + this.width);
    }
    
}

const resultSquare = new Rectangle (4, 4);
console.log(resultSquare.isSquare)

const result = new Rectangle(3, 4);
console.log(result.calcArea)

const resultPer = new Rectangle(3, 4);
console.log(resultPer.perimeter)


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
