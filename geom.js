class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
   isSquare(){//returns true if the rectangle is a square
     if(this.length === this.width){
       return true;
     }else {
       return false;
     }
  }
   area(){//calculates the area of the rectangle
      return this.length * this.width;
  }
   perimeter(){//calculates the perimeter of the rectangle
      return 2*( this.length + this.width);
  }
}
const rec = new Rectangle(5,6);
rec.isSquare(); //false
rec.area(); //30
rec.perimeter(); //22

//###############################################################################

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.s= (sideA + sideB + sideC)/2;
  }
   isEquilateral(){//returns true if the triangle is equilateral.
     if(this.sideA === 60 && this.sideB === 60 && this.sideC === 60){
       return true;
     }else {
       return false;
     }
  }
   isIsosceles(){//return true if the triangle is isosceles.
    if(this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC){
      return true;
    }else {
      return false;
    }
  }
   area(){//calculates the area of the Triangle.
    return Math.sqrt(this.s*((this.s-this.sideA)*(this.s-this.sideB)*(this.s-this.sideC)));
  }
   isObtuse(){//returns true if the triangle is obtuse.
    if ((this.sideA + this.sideB < this.sideC) || (this.sideA + this.sideC < this.sideB) || (this.sideB + this.sideC < this.sideA)) {
       return true;
  }else {
    return false;
  }
}
}

const tri = new Triangle(4,5,6);
tri.isEquilateral(); //false
tri.isIsosceles(); //false
tri.area(); //9.921567416492215
tri.isObtuse(); //false

//###############################################################################

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;//units to move in X direction
    this.y1 = y1;//units to move in Y direction
    this.x2 = x2;//units to move in X direction
    this.y2 = y2;//units to move in Y direction
  }
   length(){
     return Math.sqrt(Math.pow((this.x2-this.x1), 2)+Math.pow((this.y2-this.y1), 2));
  }
}

const ls = new LineSegment(2,-4,5,3);
ls.length(); //7.615773105863909

const ls2 = new LineSegment(3,5,2,-5);
ls2.length(); //10.04987562112089

//###############################################################################

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
