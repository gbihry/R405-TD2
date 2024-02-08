import "@/style/main.css";


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

    x += 2;
    y += 3;

    context.lineWidth = 15 // changer l'épaisseur du trait

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 10, y + 10);
    context.strokeStyle = "red";
    context.stroke();


    window.requestAnimationFrame(() => afficherLigne(context));
}

if (ctx) {
    initialise(ctx)
    //afficherRectangle(ctx)
    afficherLigne(ctx)
}
