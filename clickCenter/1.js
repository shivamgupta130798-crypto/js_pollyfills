let counter = 0;
const container = document.getElementById("elem");

const firstCircle = createCircle();
const secondCircle = createCircle();

document.addEventListener("click", (e) => {
    counter = (counter % 2) + 1;

    const x = e.clientX;
    const y = e.clientY;
    const diameter = Math.floor(Math.random() * 100);

    const target = counter === 1 ? firstCircle : secondCircle;

    updateCircle(target, x, y, diameter);

    if (!container.contains(target)) {
        container.appendChild(target);
    }

    if (counter === 1 && container.contains(secondCircle)) {
        container.removeChild(secondCircle);
    }
});

function createCircle() {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.border = "2px solid black";
    div.style.borderRadius = "50%";
    return div;
}

function updateCircle(circle, x, y, diameter) {
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.top = `${y - diameter / 2}px`;
    circle.style.left = `${x - diameter / 2}px`;
}
