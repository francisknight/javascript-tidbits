function Fruit (name, color, shape) {
	this.name = name;
	this.color = color;
	this.shape = shape; 

	this.describe = function(){
    	return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}
    var apple = new Fruit('apple', 'red', 'round');
    // var melon = new Fruit('melon', 'green', 'round'); 
    // Simpler than doing the whole Object Constructor for each new fruit
    console.log(apple.describe());
