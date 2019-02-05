//class Rectangle {
//constructor(length, width) {
//this.length = length;
//this.width = width;
//}
//}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  isSquare() {
    if (this.height === this.width) {
      return true;
    }
  }
  area() {
    console.log("The area is " + (this.height * this.width));
  }

  perimeter() {
    console.log("The Perimeter is " + ((2 * this.height) + (2 * this.width)));
  }
}


//class Triangle {
//constructor(sideA, sideB, sideC){
//this.sideA = sideA;
//this.sideB = sideB;
//this.sideC = sideC;
//}
//}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (this.sideA === this.sideB && this.sideA === this.sideC && this.sideB === this.sideC) {
      return true;
    }
  }
  isIsosceles() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === sideC) {
      return true;
    }
  }
  area() {
    let p = (this.sideA + this.sideB + this.sideC) / 2
    let area = (Math.sqrt(p * ((p - this.sideA) * (p - this.sideB) * (p - this.sideC))))
    console.log("The Area is " + area);
  }
  isObtuse() {
    if ((this.sideA * this.sideA) + (this.sideB * this.sideB) > (this.sideC * this.sideC) || (this.sideA * this.sideA) + (this.sideC * this.sideC) > (this.sideB * this.sideB) || (this.sideC * this.sideC) + (this.sideB * this.sideB) > (this.sideA * this.sideA)) {
      return true;
    }
  }

}


//class LineSegment {
//constructor(x1, y1, x2, y2) {
// this.x1 = x1;
//this.y1 = y1;
//this.x2 = x2;
//this.y2 = y2;
//}
//}

class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }


  cal() {
    let point1 = ((this.x1 + this.x2) / 2);
    let point2 = ((this.y1 + this.y2) / 2);
    let res = (point1 - point2)

    console.log('The length is ' + res);

  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
