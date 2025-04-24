let tokens = [];
let amountTokens = 5;
function setup() {
  createCanvas(1200, 300);
  background(43, 45, 57);

  for (let i = 0; i < amountTokens; i++) {
    let token = new Token(random(width), random(height));
    let tokenSize = token.outerRingSize + token.outerRingStrokeWeight;
    let centerX = 0;
    let x = centerX + (tokenSize * i + tokenSize / 2);
    let y = 100;
    tokens.push(new Token(x, y));
  }

  for (let i = 0; i < tokens.length; i++) {
    tokens[i].draw();
  }

  let addButton = createButton("add token");
  addButton.mousePressed(addToken);
  let removeButton = createButton("remove token");
  removeButton.mousePressed(removeToken);
}

function mouseClicked() {
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    let distance = dist(mouseX, mouseY, token.x, token.y);
    if (distance < token.size / 2 + token.borderSize / 2) {
      //console.log("Clicked inside inner circle");
      token.flipInnerRing();
    } else if (distance < token.outerRingSize / 2 + token.outerRingStrokeWeight / 2) {
      // console.log("Clicked inside outer ring");
      token.flipOuterRing();
    }
  }
}

function addToken() {
  background(43, 45, 57);
  let token = new Token(random(width), random(height));
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
    console.log(tokens.length);
    for (let i = 0; i < tokens.length; i++) {
      tokens[i].draw();
    }
  }
}
