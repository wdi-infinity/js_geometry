/* Rectangle */
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() {
    if (this.length === this.width) return true;
  }

  area() {
    let area = this.length * this.width;
    return area;
  }

  perimeter() {
    let perimeter = 2 * (this.length + this.width);
    return perimeter;
  }
}

/* Triangle */
class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (
      this.sideA === this.sideB &&
      this.sideA === this.sideC &&
      this.sideB === this.sideC
    ) {
      return true;
    }
  }

  isIsosceles() {
    if (
      this.sideA === this.sideB ||
      this.sideA === this.sideC ||
      this.sideB === this.sideC
    ) {
      return true;
    }
  }
  area(base, height) {
    let area = (b * h) / 2;
  }
  isObtuse(angle) {
    if (angle > 90) {
      return true;
    }
  }
}

/* LineSegment */
class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  lengthCalculator() {
    let length1 = this.y1 - this.x1;
    let length2 = this.y2 - this.x2;
    console.log(
      "The diffiranc between x1,y1" +
        length1 +
        "The diffiranc between x2,y2" +
        length2
    );
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
};
