const square = document.getElementById('div1');
let x = 125; 
let y = 125;

function Up() {
    if (y > 0) {
        y -= 10;
        updatePosition();
    }
}

function Down() {
    if (y < 250) {
        y += 10;
        updatePosition();
    }
}

function Left() {
    if (x > 0) {
        x -= 10;
        updatePosition();
    }
}

function Right() {
    if (x < 250) {
        x += 10;
        updatePosition();
    }
}

function updatePosition() {
    square.style.transform = `translate(${x}px, ${y}px)`;
}
