let tokens = [];
let amountTokens = 5;
function setup() 
{
	createCanvas(windowWidth, windowHeight);
    background(255);
    
    for(let i = 0; i < amountTokens; i++){
        let token = new Token(random(width), random(height));
        let tokenSize = token.outerRingSize+token.outerRingStrokeWeight;
        let centerX = (tokenSize*amountTokens+2)/2;
        let x = centerX+((tokenSize*i)+tokenSize/2);
        let y = 100;
        tokens.push(new Token(x, y));
    }
    for(let i = 0; i < tokens.length; i++){
        tokens[i].draw();
    }
       
}


function mouseClicked(){
    for(let i = 0; i < tokens.length; i++){
        let token = tokens[i];
        let distance = dist(mouseX, mouseY, token.x, token.y);
        if(distance < token.size/2+token.borderSize/2){
            //console.log("Clicked inside inner circle");
            token.flipInnerRing();
        }else if(distance < token.outerRingSize/2+token.outerRingStrokeWeight/2){
            // console.log("Clicked inside outer ring");
            token.flipOuterRing();
        }
    }
    
    
}
