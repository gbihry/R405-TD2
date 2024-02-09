import "@/style/main.css";

const particules = [
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    },
    {
        x: getRandom(10, 1600),	// Position en X.
        y: getRandom(10, 800),	// Position en Y.
        vx: getRandom(10, 800),	// Vitesse sur l’axe X.
        vy: getRandom(10, 800)	// Vitesse sur l’axe Y.
    }
]

const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = myCanvas?.getContext("2d");
const W = window.innerWidth;
const H = window.innerHeight;
let x = 0;
let y = 0;

function initialise(context: CanvasRenderingContext2D) {
    context.canvas.width = W;
    context.canvas.height = H;
}

function afficherRectangle(context: CanvasRenderingContext2D) {
    context.fillStyle = "red"
    context.fillRect(50, 50, W / 2, H / 2);
}

function afficherLigne(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, W, H);

    x += 3;
    y += 2;
    particules.forEach(el => {

        context.lineWidth = 15 // changer l'épaisseur du trait

        context.beginPath();
        context.moveTo(el.x + x, el.y + y);
        context.lineTo(el.x + el.vx, el.y + el.vy);
        context.strokeStyle = "red";
        context.stroke();

        console.log(el);


    });
    window.requestAnimationFrame(() => afficherLigne(context));
}

if (ctx) {
    initialise(ctx)
    //afficherRectangle(ctx)
    afficherLigne(ctx)
}

function getRandom(min: any, max: any) {
    return Math.random() * (max - min) + min;
}
