class Token {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 80;
        this.borderSize = 10;
        this.outerRingSize = this.size + this.borderSize * 3.8;
        this.outerRingStrokeWeight = this.borderSize * 2;
        this.outerRing;
        this.outerRingBlack;
        this.outerRingColor = color(255, 0, 0); // Default red
        this.innerRing;
        this.innerRingColor = color(0, 255, 0); // Default green
    }

    draw() {
       
        push();
        fill(this.innerRingColor);
        strokeWeight(this.borderSize);
        this.innerRing = ellipse(this.x, this.y, this.size, this.size);
        noFill();

        // Draw the black outer ring
        stroke(0);
        strokeWeight(this.borderSize * 2);
        this.outerRingBlack = ellipse(this.x, this.y, this.outerRingSize, this.outerRingSize);

        
        
        stroke(this.outerRingColor);
        strokeWeight(this.borderSize * 0.5);
        this.outerRing = ellipse(this.x, this.y, this.outerRingSize, this.outerRingSize);
        pop();
    }

    flipOuterRing() {
        if (this.outerRingColor.levels[0] === 255 && this.outerRingColor.levels[1] === 0 && this.outerRingColor.levels[2] === 0) {
            console.log("Outer ring color: Red -> Black");
            this.outerRingColor = color(0, 0, 0); // Change to black
        } else {
            console.log("Outer ring color: Not Red -> Red");
            this.outerRingColor = color(255, 0, 0); // Change to red
        }
        this.draw();
    }

    flipInnerRing(){
        if (this.innerRingColor.levels[0] === 0 && this.innerRingColor.levels[1] === 255 && this.innerRingColor.levels[2] === 0) {
            console.log("Inner ring color: Green -> Black");
            this.innerRingColor = color(0, 0, 0); // Change to black
            this.draw();
            fill(255,0,0);
            this.drawHexagon(this.x, this.y, this.size / 5); // Draw hexagon
        } else {
            console.log("Inner ring color: Not Green -> Green");
            this.innerRingColor = color(0, 255, 0); // Change to green
            this.draw();
        }
        
    }

    drawHexagon(x, y, radius) {
        beginShape();
        for (let i = 0; i < 6; i++) {
            let angle = TWO_PI / 6 * i; // Divide the circle into 6 parts
            let vx = x + cos(angle) * radius; // Calculate x-coordinate of the vertex
            let vy = y + sin(angle) * radius; // Calculate y-coordinate of the vertex
            vertex(vx, vy); // Add the vertex
        }
        endShape(CLOSE); // Close the shape to form a hexagon
    }
}