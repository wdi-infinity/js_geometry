class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if(this.length===this.width){
      return true;
    }else{
return "is a rectangle"
}

  }
  area(){
    return this.length*this.width;

  }
  perimeter(){
  return 2*(this.length+this.width);
  }
}
const s=new Rectangle(3,6);



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
     if (this.sideA===this.sideB && this.sideB===this.sideC){
      return true;
    }
  }
  isIsosceles(){
    if (((this.sideA == this.sideB) && (this.sideA != this.sideC)) ||
          ((this.sideA == this.sideC) && (this.sideA != this.sideB)) ||
          ((this.sideB == this.sideC) && (this.sideB != this.sideA))){
         return true;}
  }
  area(){
    let p=(this.sideA+this.sideB+this.sideC)/2; 
    return Math.sqrt((p*(p-this.sideA))*(p-this.sideB)*(p-this.sideC));

    

  }
  isObtuse(){
    // have angle more than 90.
    if (((this.sideA * this.sideA) + (this.sideB * this.sideB) < (this.sideC * this.sideC))
                || ((this.sideA * this.sideA) + (this.sideC * this.sideC) < (this.sideB * this.sideB))
                || ((this.sideC * this.sideC) + (this.sideB * this.sideB) < (this.sideA * this.sideA)))  {
            return true ;
        } 
  }
}
const c=new Triangle(3,2,3);



class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    let x =Math.sqrt(this.x2-this.x1);
    let y=Math.sqrt(this.y2-this.y1);
   return Math.pow(x,2)+Math.pow(y,2);
  }
}
const z=new Triangle(3,2,3,2);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
