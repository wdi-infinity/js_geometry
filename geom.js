class Rectangle {
constructor(length, width) {
this.length = length;
this.width = width;
}

isSquare() {
if (this.length===this.width) {
return true;
}
}

calcArea() {
return this.length*this.width;
}

clacPerimeter() {
return (2*this.length)+(2*this.width);
}

}


class Triangle {

constructor(sideA, sideB, sideC){
this.sideA = sideA;
this.sideB = sideB;
this.sideC = sideC;
}

isEquilateral() {
if (sideA===sideB===sideC) {
return true;
}
}

isIsosceles() {
if (sideA===sideC) {
return true;
}
}

calcArea() {
s = (this.sideA+this.sideB+this.sideC)/2;
math.sqrt(s(s-this.sideA)(s-this.sideB)(s-this.sideC))
}

isObtuse() {
if ((this.sideC>this.sideA)&&(this.sideC>this.sideB)) {
return true;
}
}

}


class LineSegment {

constructor(x1, y1, x2, y2){
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
}

calcDist() {
return math.sqrt((this.x2-this.x1)*(this.x2-this.x1)+(this.y2-this.y1)*(this.y2-this.y1));
}

}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
Rectangle: Rectangle,
Triangle: Triangle,
LineSegment: LineSegment
}

