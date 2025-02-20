function drawLadder() {
    let container = document.getElementById('ladder-container');
    container.style.display = 'flex';
    container.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        let rung = document.createElement('div');
        rung.classList.add('rung');
        
        let horizontalLine = document.createElement('div');
        horizontalLine.classList.add('horizontal-line');
        
        rung.appendChild(horizontalLine);
        container.appendChild(rung);
    }
    
    let stickFigure = document.createElement('img');
    stickFigure.src = 'images/right.png';
    stickFigure.id = 'stick-figure';
    stickFigure.style.bottom = '-60px'; // Start at the first rung
    container.appendChild(stickFigure);
    
    document.getElementById('climb-btn').style.display = 'block';
}

function climbLadder() {
    let figure = document.getElementById('stick-figure');
    let step = 0;
    let images = ['images/left.png', 'images/right.png'];
    let interval = setInterval(() => {
        if (step >= 10) {
            clearInterval(interval);
            return;
        }
        figure.style.bottom = `${step * 40 + 10}px`;
        figure.src = images[step % 2];
        step++;
    }, 500);
}