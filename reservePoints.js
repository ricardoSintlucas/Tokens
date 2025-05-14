class reservePoint{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 30;
        this.color = color(255, 255, 0); // Default yellow
    }

    draw() {
        push();
        translate(this.x, this.y);
        fill(this.color);
        noStroke();
        rotate(QUARTER_PI);
        square(0, 0, this.size);
        pop();
    }

    flipColor() {
        if (this.color.levels[0] === 255 && this.color.levels[1] === 255 && this.color.levels[2] === 0) {
            this.color = color(0, 0, 0); // Change to black
        } else {
            this.color = color(255, 255, 0); // Change to red
        }
        this.draw();
    }

    
}