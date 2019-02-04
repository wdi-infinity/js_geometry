
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(number){
    if(Math.sqrt(number)%1===0)//check if the number is a square or not. and i'm not sure if that describes the required function.
    {
   return true;
    }
    else {
      return false;
    }

  }
  area(){
    calArea=this.length*this.width ;
    console.log(calArea);
  }
  perimeter()
  {
    calPer=2*(this.length*this.width);
    console.log(calArea);
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA===60&&this.sideB===60&&this.sideC===60){
      return true;
    }
    else 
    {
      return false;
    }
  }
  isIsosceles(){
    if(this.sideA===this.sideB){
      return true;
    }
    else 
    {
      return false;
    }
  }
  area(){
    let semi=(this.sideA+this.sideB+this.sideC)/(2);
  let numbers= semi*(semi-this.sideA)*(semi-this.sideB)*(semi-this.sideC);
  Area= Math.sqrt(numbers);
   console.log(Area);

  }
  isObtuse(){
    if (this.sideA>90||this.sideB>90||this.sideC>90){
      return true;
    }
    else 
    {
      return false;
    }
  }
}

class LineSegment { // the last question, i dont know which equation to use 
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
