import "./style.scss";


class App {

    screenWidth = 0;
    screenHeight = 0;
    elements = {};

    init = () => {
        this.calculateSize();
        this.initElements();
        this.initBoxes();
        this.addListeners();
        this.loop();
    }

    calculateSize = () => {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }

    initElements = () => {
        this.elements.example = document.querySelectorAll('.example');
    }


    addListeners = () => {
        this.elements.example.addEventListener('click', () => {
            this.handleExampleClick();
        })

        window.onresize = () => {
            this.handleResize();
        }

    }

    handleExampleClick = () => {

    }

    handleResize = () => {
        this.calculateSize();
    }

    loop = () => {

        requestAnimationFrame(this.loop);
    }
}




window.onload = () => {
    const app = new App();
    app.init();
}