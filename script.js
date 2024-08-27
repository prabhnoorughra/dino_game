let dino = document.getElementById("dino");
let obstacle = document.getElementById("obstacle");

function jump() {
    dino.classList.add("jumping");

    setTimeout(function() {
        dino.classList.remove("jumping");
    }, 500);
}

const gameOver = setInterval(function(){
    let dinoFeet = 
    parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let obstacleEdge = 
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (obstacleEdge < 20 && obstacleEdge > 0 && dinoFeet <= 20) {
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("Game Over, Reload to Try Again.");
    }
}, 10);