class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) return true;
    else return false;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideA === this.sideC) return true;
    else return false;
  }
  isIsosceles() {
    if (
      (this.sideA === this.sideB && this.sideA !== this.sideC) ||
      (this.sideB === this.sideC && this.sideB !== this.sideA) ||
      (this.sideC === this.sideA && this.sideC !== this.sideB)
    )
      return true;
    else return false;
  }

  area() {
    let area =
      0.25 *
      Math.sqrt(
        (this.sideA + this.sideB + this.sideC) *
          (-this.sideA + this.sideB + this.sideC) *
          (this.sideA - this.sideB + this.sideC) *
          (this.sideA + this.sideB - this.sideC)
      );
    let height =
      (0.5 *
        Math.sqrt(
          (this.sideA + this.sideB + this.sideC) *
            (-this.sideA + this.sideB + this.sideC) *
            (this.sideA - this.sideB + this.sideC) *
            (this.sideA + this.sideB - this.sideC)
        )) /
      this.sideB;
    console.log("height: ", height);

    return area;
  }
  //one obtuse angele ( more than 90 degree)
  isObtuse() {
    let angeleA =
      (Math.pow(this.sideB, 2) +
        Math.pow(this.sideC, 2) -
        Math.pow(this.sideA, 2)) /
      (2 * this.sideB * this.sideC);
    angeleA = Math.acos(angeleA, -1);
    angeleA = (angeleA * 180) / Math.PI;
    console.log("Angel A in degree: ", angeleA);

    let angeleB =
      (Math.pow(this.sideC, 2) +
        Math.pow(this.sideA, 2) -
        Math.pow(this.sideB, 2)) /
      (2 * this.sideC * this.sideA);
    angeleB = Math.acos(angeleB, -1);
    angeleB = (angeleB * 180) / Math.PI;
    console.log("Angel B in degree: ", angeleB);

    let angeleC =
      (Math.pow(this.sideA, 2) +
        Math.pow(this.sideB, 2) -
        Math.pow(this.sideC, 2)) /
      (2 * this.sideA * this.sideB);
    angeleC = Math.acos(angeleC, -1);
    // console.log("in radians: ", angeleC);
    angeleC = (angeleC * 180) / Math.PI;
    console.log("Angel C in degree: ", angeleC);

    if (angeleA > 90 || angeleB > 90 || angeleC > 90) {
      return true;
    } else return false;
  }
}

class LineSegment {
  constructor(x1, y1, x2, y2) {
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
};

let tri = new Triangle(8, 6, 7);
let tri2 = new Triangle(11, 19, 10);

console.log("Area: ", tri.area());
console.log("Is Equilateral: ", tri.isEquilateral());
console.log("isIsosceles: ", tri.isIsosceles());
console.log("isObtuse: ", tri.isObtuse());

console.log(".............");

console.log("Area: ", tri2.area());
console.log("Is Equilateral: ", tri2.isEquilateral());
console.log("isIsosceles: ", tri2.isIsosceles());
console.log("isObtuse: ", tri2.isObtuse());
