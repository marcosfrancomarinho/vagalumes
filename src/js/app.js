class Firefly {
    constructor() {
        this.vel = Math.random() * 2 + 10
        this.posY = Math.random() * 300;
        this.x = 0
        this.y = 0
        this.element = document.createElement("img")
        this.element.src = "./src/images/vagalume.gif";
        document.querySelector(".game-board").appendChild(this.element)
    }
    moveFireFly() {
        this.x += this.vel
        this.y = this.posY + Math.cos(this.x / 30) * 10
        if (this.x >= window.innerWidth - 10) {
            this.x = 0;
            this.posY = Math.random() * 300;
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
const group = [new Firefly, new Firefly, new Firefly]
document.querySelector("button").onclick = () => {
    group.push(new Firefly())

}
setInterval(() => {
    group.forEach(firefly => {
        firefly.moveFireFly()
    })
}, 33)

