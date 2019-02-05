class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.width === this.length) {
      return true
    } else { return false }
  }
  area() {
    return this.width * this.length
  }
  perimeter() {
    return this.width + this.length
  }
}


class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true
    } else { return false }
  }
  isIsosceles() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true
    } else { return false }
  }
  area() {
    var s = 0.5 * (sideA + sideB + sideC)
    var a = (s * (s - this.sideA)(s - this.sideB)(s - this.sideC))
    return Math.pow(a, 0.5)
  }
  isObtuse() {
    var a = Math.pow(this.sideA, 2)
    var b = Math.pow(this.sideB, 2)
    var c = Math.pow(this.sideC, 2)
    if (a > b && a > c) {
      if (a > (b + c)) {
        return true
      } else { return false }
    }
    if (b > a && b > c) {
      if (b > (a + c)) {
        return true
      } else { return false }
    }
    if (c > a && c > b) {
      if (c > (a + b)) {
        return true
      } else { return false }
    }

  }
}


class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return Math.sqrt(Math.pow(this.x2 - this.x1, 2) +
      Math.pow(this.y2 - this.y1, 2) * 1.0);
  }
}


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
