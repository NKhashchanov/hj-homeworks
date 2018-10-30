'use strict';

const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
let brushSize = 100,
curves = [],
drawing = false,
shade = false,
brushSizeIsDecreasing = true,
hue = 0,
needsRepaint = false;

function changeBrushSize() {
    if (brushSizeIsDecreasing) {
        if (brushSize <= 5) {
            brushSizeIsDecreasing = false;
            brushSize++;
        } else {
            brushSize--;
        }
    } else {
        if (brushSize >= 100) {
            brushSizeIsDecreasing = true;
            brushSize--;
        } else {
            brushSize++;
        }
    }
}

function changeHue() {
    if (shade) {
        if (hue <= 0) {
            return hue;
        }
        hue--;
    } else {
        if (hue >= 359) {
            return hue;
        }
        hue++;
    }
    return hue;
}

function circle(point) {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${point.hue}, 100%, 50%)`;
    ctx.arc(...point, point.brushSize / 2, 0, 2 * Math.PI);
    ctx.fill();
}

function smoothCurveBetween(p1, p2) {
    ctx.strokeStyle = `hsl(${p1.hue}, 100%, 50%)`;
    ctx.lineWidth = p1.brushSize;
    ctx.beginPath();
    const cp = p1.map((coord, idx) => (coord + p2[idx]) / 2);
    ctx.quadraticCurveTo(...p1, ...cp);
    ctx.stroke();
}

function smoothCurve(points) {
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.moveTo(...points[0]);
    for (let i = 1; i < points.length - 1; i++) {
        smoothCurveBetween(points[i], points[i + 1]);
    }
}

canvas.addEventListener('mousedown', (evt) => {
    drawing = true;
    shade = evt.shiftKey;
    const curve = [],
    point = [evt.offsetX, evt.offsetY];
    point.hue = hue;
    point.brushSize = brushSize;
    curve.push(point);
    curves.push(curve);
    needsRepaint = true;
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('mouseleave', () => {
    drawing = false;
});

canvas.addEventListener('mousemove', (evt) => {
    if (drawing) {
        shade = evt.shiftKey;
        const point = [evt.offsetX, evt.offsetY];
        point.hue = hue;
        point.brushSize = brushSize;
        curves[curves.length - 1].push(point);
        needsRepaint = true;
    }
});

canvas.addEventListener('dblclick', () => {
    curves = [];
    needsRepaint = true;
});

window.addEventListener('resize', () => {
    updateCanvasSize();
    curves = [];
    needsRepaint = true;
});

function updateCanvasSize() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

function repaint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    curves
        .forEach((curve) => {
        circle(curve[0]);
            smoothCurve(curve);
        });
}

function tick() {
    changeBrushSize();
    changeHue();

    if (needsRepaint) {
        repaint();
        needsRepaint = false;
    }

    window.requestAnimationFrame(tick);
}

updateCanvasSize();
tick();