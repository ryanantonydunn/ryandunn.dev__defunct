/*
   Copyright 500BC-2019 Ryan Dunn
   Several rights reserved
   Unauthorized copying of this file is probably a top idea
*/

// prettier-ignore
const letterShapes = {
  space: {width:1,shape:[]},
  a: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,6,0,-1],[3,6,2,6,1,0],[2,6,2,3,0,1],[2,3,1,3,1,0],[1,3,1,3,1,0],[1,2,2,2,-1,0],[2,2,2,1,0,1],[2,1,1,1,1,0],[1,1,1,2,0,-1],[1,3,1,6,0,1],[1,6,0,6,-1,0],[0,6,0,1,0,1]]},
  b: {width:3,shape:[[0,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,1,-1,-1],[1,1,1,2,0,-1],[1,2,2,2,-1,0],[2,2,2,1,0,1],[2,1,1,1,1,0],[3,1,3,2,0,-1],[3,2,2,3,1,-1],[2,3,3,4,1,1],[3,4,3,4,1,-1],[1,4,1,5,0,-1],[1,5,2,5,-1,0],[2,5,2,4,0,1],[2,4,1,4,1,0],[3,4,3,5,0,1],[3,5,2,6,1,-1],[2,6,0,6,1,0],[0,6,0,0,0,1]]},
  c: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,2,0,-1],[3,2,2,2,1,0],[2,2,2,1,0,-1],[2,1,1,1,-1,0],[1,1,1,5,0,1],[1,5,2,5,1,0],[2,5,2,4,0,1],[2,4,3,4,1,0],[3,4,3,5,0,0],[3,5,2,6,1,-1],[2,6,1,6,1,0],[1,6,0,5,1,1],[0,5,0,1,0,-1]]},
  d: {width:3,shape:[[0,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,1,-1,-1],[1,1,1,5,0,-1],[1,5,2,5,-1,0],[2,5,2,1,0,1],[2,1,1,1,1,0],[3,1,3,5,0,1],[3,5,2,6,1,-1],[2,6,0,6,1,0],[0,6,0,0,0,-1]]},
  e: {width:3,shape:[[0,0,3,0,-1,0],[3,0,3,1,0,-1],[3,1,1,1,1,0],[1,1,1,2,0,1],[1,2,2,2,-1,0],[2,2,2,3,0,-1],[2,3,1,3,1,0],[1,3,1,5,0,1],[1,5,3,5,-1,0],[3,5,3,6,0,-1],[3,6,0,6,1,0],[0,6,0,0,0,1]]},
  f: {width:3,shape:[[0,0,3,0,-1,0],[3,0,3,1,0,-1],[3,1,1,1,1,0],[1,1,1,2,0,-1],[1,2,2,2,-1,0],[2,2,2,3,0,-1],[2,3,1,3,1,0],[1,3,1,6,0,1],[1,6,0,6,-1,0],[0,6,0,0,0,1]]},
  g: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,2,0,-1],[3,2,2,2,1,0],[2,2,2,1,0,-1],[2,1,1,1,-1,0],[1,1,1,5,0,1],[1,5,2,5,1,0],[2,5,2,4,0,1],[2,4,1,3,-1,-1],[1,3,2,3,1,0],[2,3,3,4,1,1],[3,4,3,5,0,1],[3,5,2,6,1,-1],[2,6,1,6,1,0],[1,6,0,5,1,1],[0,5,0,1,0,-1]]},
  h: {width:3,shape:[[0,0,1,0,-1,0],[1,0,1,2,0,-1],[1,2,2,2,1,0],[2,2,2,0,0,-1],[2,0,3,0,-1,0],[3,0,3,6,0,1],[3,6,2,6,1,0],[2,6,2,3,0,1],[2,3,1,3,-1,0],[1,3,1,6,0,1],[1,6,0,6,1,0],[0,6,0,0,0,-1]]},
  i: {width:1,shape:[[0,0,1,0,-1,0],[1,0,1,6,0,-1],[1,6,0,6,1,0],[0,6,0,0,0,1]]},
  j: {width:3,shape:[[2,0,3,0,-1,0],[3,0,3,5,0,-1],[3,5,2,6,1,-1],[2,6,1,6,-1,0],[1,6,0,5,1,1],[0,5,0,4,0,1],[0,4,1,4,-1,0],[1,4,1,5,0,1],[1,5,2,5,1,0],[2,5,2,0,1,1]]},
  k: {width:3,shape:[[0,0,1,0,-1,0],[1,0,1,3,0,-1],[1,3,2,2,1,-1],[2,2,2,0,0,-1],[2,0,3,0,1,0],[3,0,3,2,0,-1],[3,2,2,3,1,-1],[2,3,3,4,1,1],[3,4,3,6,0,1],[3,6,2,6,1,0],[2,6,2,4,0,1],[2,4,1,3,-1,-1],[1,3,1,6,0,1],[1,6,0,6,-1,0],[0,6,0,0,0,-1]]},
  l: {width:2,shape:[[0,0,1,0,-1,0],[1,0,1,5,0,-1],[1,5,2,5,1,0],[2,5,2,6,0,1],[2,6,0,6,-1,0],[0,6,0,0,0,1]]},
  m: {width:4,shape:[[0,1,1,0,-1,1],[1,0,2,1,-1,-1],[2,1,3,0,1,-1],[3,0,4,1,1,1],[4,1,4,6,0,-1],[4,6,3,6,1,0],[3,6,3,2,0,1],[3,2,2,3,1,-1],[2,3,1,2,-1,1],[1,2,1,6,0,-1],[1,6,0,6,-1,0],[0,6,0,1,0,1]]},
  n: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,1,1],[3,1,3,6,0,1],[3,6,2,6,1,0],[2,6,2,1,0,-1],[2,1,1,1,-1,0],[1,1,1,6,0,1],[1,6,0,6,-1,0],[0,6,0,1,0,-1]]},
  o: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,1,1],[3,1,3,1,-1,-1],[1,1,1,5,0,-1],[1,5,2,5,-1,0],[2,5,2,1,0,1],[2,1,1,1,1,0],[3,1,3,5,0,1],[3,5,2,6,1,-1],[2,6,1,6,1,0],[1,6,0,5,-1,-1],[0,5,0,1,0,-1]]},
  p: {width:3,shape:[[0,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,2,0,-1],[3,2,2,3,1,-1],[2,3,1,3,1,0],[1,3,1,3,1,0],[1,2,2,2,-1,0],[2,2,2,1,0,1],[2,1,1,1,1,0],[1,1,1,2,0,-1],[1,3,1,6,0,1],[1,6,0,6,-1,0],[0,6,0,0,0,-1]]},
  q: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,1,1],[3,1,3,1,-1,-1],[1,1,1,4,0,-1],[1,4,2,4,-1,0],[2,4,2,1,0,1],[2,1,1,1,1,0],[3,1,3,6,0,1],[3,6,2,6,1,0],[2,6,2,5,0,1],[2,5,1,5,-1,0],[1,5,0,4,-1,-1],[0,4,0,1,0,1]]},
  r: {width:3,shape:[[0,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,1,-1,-1],[1,1,1,2,0,-1],[1,2,2,2,-1,0],[2,2,2,1,0,1],[2,1,1,1,1,0],[3,1,3,2,0,-1],[3,2,2.2,2.8,1,-1],[2.2,2.8,3,3.6,1,1],[3,3.6,3,6,0,1],[3,6,2,6,1,0],[2,6,2,4,0,1],[2,4,1,3,-1,-1],[1,3,1,6,0,1],[1,6,0,6,-1,0],[0,6,0,0,0,-1]]},
  s: {width:3,shape:[[0,1,1,0,-1,1],[1,0,2,0,-1,0],[2,0,3,1,-1,-1],[3,1,3,2,0,-1],[3,2,2,2,1,0],[2,2,2,1,0,1],[2,1,1,1,1,0],[1,1,1,2,0,-1],[1,2,3,4,-1,-1],[3,4,3,5,0,1],[3,5,2,6,1,-1],[2,6,1,6,1,0],[1,6,0,5,1,1],[0,5,0,4,0,1],[0,4,1,4,-1,0],[1,4,1,5,0,-1],[1,5,2,5,1,0],[2,5,2,4,0,1],[2,4,0,2,1,1],[0,2,0,1,0,1]]},
  t: {width:3,shape:[[0,0,3,0,-1,0],[3,0,3,1,0,-1],[3,1,2,1,1,0],[2,1,2,6,0,1],[2,6,1,6,-1,0],[1,6,1,1,0,-1],[1,1,0,1,1,0],[0,1,0,0,0,1]]},
  u: {width:3,shape:[[0,0,1,0,-1,0],[1,0,1,5,0,-1],[1,5,2,5,1,0],[2,5,2,0,0,1],[2,0,3,0,1,0],[3,0,3,5,0,-1],[3,5,2,6,1,-1],[2,6,1,6,-1,0],[1,6,0,5,-1,-1],[0,5,0,0,0,1]]},
  v: {width:3,shape:[[0,0,1,0,-1,0],[1,0,1,4.5,0,-1],[1,4.5,2,3.5,1,-1],[2,3.5,2,0,0,1],[2,0,3,0,1,0],[3,0,3,4,0,-1],[3,4,1,6,1,-1],[1,6,0,5,-1,-1],[0,5,0,0,0,1]]},
  w: {width:4,shape:[[0,0,1,0,-1,0],[1,0,1,4,0,-1],[1,4,2,3,-1,1],[2,3,3,4,1,1],[3,4,3,0,0,1],[3,0,4,0,1,0],[4,0,4,5,0,-1],[4,5,3,6,1,-1],[3,6,2,5,1,1],[2,5,1,6,-1,1],[1,6,0,5,-1,-1],[0,5,0,0,0,1]]},
  x: {width:3,shape:[[0,0,1,0,-1,0],[1,0,1,2,0,-1],[1,2,2,2,-1,0],[2,2,2,0,0,1],[2,0,3,0,1,0],[3,0,3,2,0,-1],[3,2,2,3,1,-1],[2,3,2,4,0,1],[2,4,3,5,1,1],[3,5,3,6,0,1],[3,6,2,6,1,0],[2,6,2,5,0,-1],[2,5,1,5,-1,0],[1,5,1,6,0,1],[1,6,0,6,1,0],[0,6,0,5,0,-1],[0,5,1,4,-1,1],[1,4,1,3,0,-1],[1,3,0,2,-1,-1],[0,2,0,0,0,-1]]},
  y: {width:3,shape:[[0,0,1,0,-1,0],[1,0,1,2,0,-1],[1,2,2,2,-1,0],[2,2,2,0,0,1],[2,0,3,0,1,0],[3,0,3,2,0,-1],[3,2,2,3,1,-1],[2,3,2,6,0,1],[2,6,1,6,-1,0],[1,6,1,3,0,-1],[1,3,0,2,-1,-1],[0,2,0,0,0,-1]]},
  z: {width:3,shape:[[0,0,3,0,1,0],[3,0,3,2,0,-1],[3,2,1,4,1,-1],[1,4,1,5,0,1],[1,5,3,5,1,0],[3,5,3,6,0,1],[3,6,0,6,-1,0],[0,6,0,4,0,1],[0,4,2,2,-1,1],[2,2,2,1,0,-1],[2,1,0,1,-1,0],[0,1,0,0,0,-1]]},
  ".": {width:1,shape:[[0,5,1,5,-1,0],[1,5,1,6,0,-1],[1,6,0,6,1,0],[0,6,0,5,0,1]]}
};

// animate a line
const lineAnimation = (obj) => {
  if (obj.delay > 0) {
    obj.delay = Math.max(0, obj.delay - 1);
  } else {
    if (obj.moveOut) {
      if (obj.distance < 140) {
        obj.distance += 3;
      } else {
        obj.moveOut = false;
      }
    } else {
      if (obj.distance > 0) {
        obj.distance = Math.max(obj.distance - 3, 0);
      }
    }
  }
  return obj;
};

// draw an individual line
const drawLine = (cont, x1, y1, x2, y2, col) => {
  cont.beginPath();
  cont.moveTo(x1, y1);
  cont.lineTo(x2, y2);
  cont.closePath();
  cont.stroke();
};

// draw all letters
const drawLetters = (canvas, cont, letters, color) => {
  // fade out the previous canvas background
  cont.clearRect(-1, -1, canvas.width + 2, canvas.height + 2);

  // draw the letters
  let animating = false;
  letters.forEach((l) => {
    if (!l.lines) return;
    l.lines.forEach((line) => {
      // increment shooting outward animation values
      line.animation = lineAnimation(line.animation);

      const { x1, y1, x2, y2, xSlide, ySlide, animation } = line;
      const { distance } = animation;
      // set line width if straight or diagonal
      cont.lineWidth = x1 !== x2 && y1 !== y2 ? 0.5 : 1;
      cont.strokeStyle = "rgba(0, 0, 0, 0.08)";
      drawLine(cont, x1, y1, x2, y2);

      const xx1 = x1 + xSlide * distance;
      const yy1 = y1 + ySlide * distance;
      const xx2 = x2 + xSlide * distance;
      const yy2 = y2 + ySlide * distance;

      cont.lineWidth = x1 !== x2 && y1 !== y2 ? 0.5 : 1;
      cont.strokeStyle = `rgba(${color}, ${1 - distance / 100})`;
      drawLine(cont, xx1, yy1, xx2, yy2);

      // check for still running animations
      if (line.animation.distance !== 0) {
        animating = true;
      }
    });
  });
  return animating;
};

// do the shooty canvas letters
const shootyCanvasLetters = ({
  container,
  w,
  h,
  text,
  xPos,
  yPos,
  size,
  gap,
  color,
}) => {
  gap = gap || size / 2;
  container.innerHTML = "";
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  container.appendChild(canvas);
  const cont = canvas.getContext("2d");
  cont.translate(0.5, 0.5); // crisper lines

  // // get offset of canvas
  // const rect = canvas.getBoundingClientRect();
  // const canvasOffset = { x: rect.left, y: rect.top };

  // remove unauthorised letters
  const filteredText = [];
  [...text].forEach((letter) => {
    const l = letter === " " ? "space" : letter.toLowerCase();
    if (l in letterShapes) filteredText.push(l);
  });

  // set start position of text
  let x = xPos;
  if (xPos === undefined) {
    let blocks = 0;
    filteredText.forEach((letter) => {
      blocks += letterShapes[letter].width;
    });
    const width = blocks * size + (filteredText.length - 1) * gap;
    x = Math.round(canvas.width / 2 - width / 2);
  }
  let y = yPos;
  if (y === undefined) {
    y = Math.round((canvas.height - 6 * size) / 2);
  }

  // create each letter
  const letters = [];
  let delay = 0;
  filteredText.forEach((letter) => {
    const { width, shape } = letterShapes[letter];
    letters.push({
      x,
      y,
      w: width * size,
      h: 6 * size,
      lines: shape.map((line) => ({
        animation: {
          moveOut: false,
          distance: 200,
          delay: ++delay,
        },
        x1: x + line[0] * size,
        y1: y + line[1] * size,
        x2: x + line[2] * size,
        y2: y + line[3] * size,
        xSlide: line[4],
        ySlide: line[5],
      })),
    });
    x += width * size + gap;
  });

  // run every frame
  let runFrame = true;
  const step = () => {
    if (runFrame) {
      runFrame = drawLetters(canvas, cont, letters, color);
    }
    window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);

  // shoot a letter when touched
  const checkShootOut = (x, y) => {
    letters.forEach((l) => {
      const lx = l.x;
      const ly = l.y;
      if (x >= lx && x <= lx + l.w && y >= ly && y <= ly + l.h) {
        let delay = 0;
        l.lines.forEach((line) => {
          if (!line.animation.moveOut) {
            line.animation.moveOut = true;
            line.animation.delay = delay;
            delay++;
          }
        });
        runFrame = true;
      }
    });
  };

  const mouseMove = (e) => {
    checkShootOut(e.offsetX, e.offsetY);
  };

  const touchMove = (e) => {
    checkShootOut(e.touches[0].offsetX, e.touches[0].offsetY);
  };

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("touchstart", touchMove);
};

export default shootyCanvasLetters;
