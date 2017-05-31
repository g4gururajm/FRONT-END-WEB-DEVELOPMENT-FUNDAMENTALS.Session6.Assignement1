
/* Function called circle which passing arguments of radius*/
function circle(radius)
{	
	/* handling radius of circle with handler */
    this.radius = radius;
   // area method function 
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius; /* return area of circle by multipling with radius and pi value*/
    };

}
/* calling circle function with prompt to handle the radius parameters from user*/
var c = new circle(prompt("Please set the Radius: "));
/* print the area of circle in console*/
console.log('Area of the circle =', c.area().toFixed(3));

