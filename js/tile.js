export class Tile {
    constructor(gridElement) {
        this.tileElement = document.createElement("div");
        this.tileElement.classList.add("tile");
        this.setValue(Math.random() > 0.5 ? 2 : 4)
        gridElement.append(this.tileElement);
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;

        this.tileElement.style.setProperty("--x", x);
        this.tileElement.style.setProperty("--y", y);
    }

    setValue(value) {
        this.value = value;
        this.tileElement.textContent = value;

        const bgLigtness = 100 - Math.log2(value) * 9;
        this.tileElement.style.setProperty("--bgLigtness", `${bgLigtness}%`);
        this.tileElement.style.setProperty("--textLightness", `${bgLigtness < 50 ? 90 : 10}%`);
    }
}