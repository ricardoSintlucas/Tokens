let tokens = [];
let reservePoints = [];
let amountTokens = 5;
function setup() {
    createCanvas(1200, 300);
    background(43, 45, 57);
  
    resetTokens();
    resetReservePoints();

    let addButton = createButton("add token");
    addButton.mousePressed(addToken);
    let removeButton = createButton("remove token");
    removeButton.mousePressed(removeToken);
    let resetButton = createButton("reset tokens");
    resetButton.mousePressed(resetTokens);

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

    for(let i = 0; i < reservePoints.length; i++){
        let reservePoint = reservePoints[i];
        
        let distance = dist(mouseX, mouseY, reservePoint.x, reservePoint.y);
        if(distance < reservePoint.size){
           reservePoint.flipColor();
            
        }
    }

}

function resetReservePoints() { 
    reservePoints = [];
    for(let i = 0; i < 3; i++) {
        reservePoints.push(new reservePoint(60*reservePoints.length+65, 200));
    }
    
    for (let i = 0; i < reservePoints.length; i++) {
        reservePoints[i].draw();
    }

}


function addToken() {
    background(43, 45, 57);
    let token = new Token(0, 0);
    let tokenSize = token.outerRingSize + token.outerRingStrokeWeight;
    let centerX = 0;
    let x = centerX + (tokenSize * tokens.length + tokenSize / 2);
    let y = 100;
    tokens.push(new Token(x, y));
    for (let i = 0; i < tokens.length; i++) {
        tokens[i].draw();
    }
}


function removeToken() {
    background(43, 45, 57);
    console.log(tokens.length);
    if (tokens.length > 0) {
      tokens.pop();
      for (let i = 0; i < tokens.length; i++) {
        tokens[i].draw();
      }
    }
}

function resetTokens() {
   tokens = [];
    background(43, 45, 57);
    for (let i = 0; i < amountTokens; i++) {
        addToken();
    }
    resetReservePoints();
}