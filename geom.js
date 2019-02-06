class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
    this.area = a * b;
    this.perimeter = 2 * (a + b);
  }
}


class Triangle {
  constructor(a, b, c){
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    this.area = 0.5*a * b*c
    this.perimeter = a + b +cancelAnimationFrame;
  }
}


class LineSegment {
  constructor(a, b, c, d){
    this.x1 = a;
    this.y1 = b;
    this.x2 = c;
    this.y2 = d;
    this.area = Math.sqrt(2**(a-b)+2**(c-d));
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
