class Polygon { 
    constructor(height, width) { 
       this.height = height; 
       this.width = width; 
    }
    area(){
        console.log(this.height * this.width / 2)
    }
 }

var obj = new Polygon(20,30);
obj.area()
