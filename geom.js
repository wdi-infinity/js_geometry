/*
Define a Rectangle class. Its constructor should take a length and width as arguments.
Augment the class with the following methods...
isSquare - returns true if the rectangle is a square.
area - calculates the area of the rectangle.
perimeter - calculates the perimeter of the rectangle.
Create a few rectangles with different lengths and widths.
*/

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  let rect = length * width;
  }
 isSquare(squer)
 {
  if (rect===rectangle)
  {
    return true;
  }
  else {
    return false;
  }
  
 }
 areaRectangle(){
   return rect (this.length * this.width);
   console.log(rect);
 }
 perimeter(){
   let p = 2*(length+width);
   console.log(p);
 }

}

/*Triangle
Define a Triangle class. Its constructor should take three sides -- sideA sideB and sideC -- as arguments.
Augment the class with the following methods...
*/

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    let Trig = (sideA + sideB + sideC);

    Equilateral (){
      if (sideA === side2B === sideC ){
        return true;
      }
        else {
          return false;
        }
    }

    isIsosceles(){ 
      var HeightTring = 0;
      let calculte = saidA.Math.squer = ( HeightTring.Math.squer)*(sideC+sideB/2)
      console.log(calculte) ;
    }

  areaTringale(){
    var area= Math.sqrt(Trig*((Trig-sideA)*(Trig-sideB)*(Trig-sideC)));
     console.log(area);
  }
  
}

//caculage lineSegment 

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length(){
  let lineSeg = (this.x1 + this.y1 ) + (this.x2+this.y2)
     console.log(lineSeg);
  
  }
}

const rectangle = new Rectangle (3,4);
const triangle = new Triangle (3,3,3);
const linesegment = new LineSegment (3,4,5,6);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
