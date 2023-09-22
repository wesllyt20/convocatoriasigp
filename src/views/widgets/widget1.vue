<template>
  <div>Hola mundo XD</div>
</template>

<!-- <script setup>
/*
 * File Name / rainbowTrueIdentity.js
 * Created Date / Sep 29, 2020
 * Aurhor / Toshiya Marukubo
 * Twitter / https://twitter.com/toshiyamarukubo
 */

/*
  Common Tool.
*/

class Tool {
  // random number.
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // random color rgb.
  static randomColorRGB() {
    return (
      "rgb(" +
      this.randomNumber(0, 255) +
      ", " +
      this.randomNumber(0, 255) +
      ", " +
      this.randomNumber(0, 255) +
      ")"
    );
  }
  // random color hsl.
  static randomColorHSL(hue, saturation, lightness) {
    return "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
  }
  // gradient color.
  static gradientColor(ctx, cr, cg, cb, ca, x, y, r) {
    const col = cr + "," + cg + "," + cb;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(" + col + ", " + ca * 1 + ")");
    g.addColorStop(0.5, "rgba(" + col + ", " + ca * 0.5 + ")");
    g.addColorStop(1, "rgba(" + col + ", " + ca * 0 + ")");
    return g;
  }
}

/*
  When want to use angle.
*/

class Angle {
  constructor(angle) {
    this.a = angle;
    this.rad = (this.a * Math.PI) / 180;
  }

  incDec(num) {
    this.a += num;
    this.rad = (this.a * Math.PI) / 180;
    return this.rad;
  }
}

/*
  When want to use controller.
*/

class Controller {
  constructor(id) {
    this.id = document.getElementById(id);
  }
  getVal() {
    return this.id.value;
  }
}

/*
  When want to use time.
*/

class Time {
  constructor(time) {
    this.startTime = time;
    this.lastTime;
    this.elapsedTime;
  }

  getElapsedTime() {
    this.lastTime = Date.now();
    this.elapsedTime = (this.startTime - this.lastTime) * -1;
    return this.elapsedTime;
  }
}

let canvas;
let offCanvas;

class Canvas {
  constructor(bool) {
    // create canvas.
    this.canvas = document.createElement("canvas");
    // if on screen.
    if (bool === true) {
      this.canvas.style.display = "block";
      this.canvas.style.top = 0;
      this.canvas.style.left = 0;
      document.getElementsByTagName("body")[0].appendChild(this.canvas);
    }
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    // mouse infomation.
    this.mouseX = null;
    this.mouseY = null;
    // shape
    this.shapeNum = 30;
    this.shapes = [];
    this.shapeBehavior = 0;
    // ground
    this.ground;
    this.groundBehavior = 0;
    /// www
    this.wwwNum = 300;
    this.wwws = [];
    // rain
    this.rainNum = 50;
    this.rains = [];
    this.rainBehavior = 0;
    // rainbow
    this.rainbow;
    this.rainbowBehavior = 0;
    // sun
    this.sun;
    this.sunBehavior = 0;
    // text
    this.text;
    this.textBehavior = 0;
    this.sentence = "Feliz día de la primavera mi princesita";
  }

  // init, render, resize
  init() {
    this.shapes = [];
    this.rains = [];
    this.wwws = [];
    this.ground;
    this.sun;
    this.rainbow;
    this.shapeBehavior = 0;
    this.groundBehavior = 0;
    this.rainBehavior = 0;
    this.rainbowBehavior = 0;
    this.sunBehavior = 0;
    this.textBehavior = 0;
    for (let i = 0; i < this.rainNum; i++) {
      const r = new Rain(
        this.ctx,
        Tool.randomNumber(0, this.width),
        Tool.randomNumber(-20, -this.height),
        i
      );
      this.rains.push(r);
    }
    for (let i = 0; i < this.shapeNum; i++) {
      const s = new Shape(
        this.ctx,
        Tool.randomNumber(this.width / 4, this.width - this.width / 4),
        Tool.randomNumber(-20, -this.height / 2),
        i
      );
      this.shapes.push(s);
    }
    for (let i = 0; i < this.wwwNum; i++) {
      const w = new Www(
        this.ctx,
        Tool.randomNumber(this.width / 4, this.width - this.width / 4),
        this.height - 100,
        i
      );
      this.wwws.push(w);
    }
    const g = new Ground(this.ctx, 0, this.height - 100);
    this.ground = g;
    const r = new Rainbow(this.ctx, this.width / 2, -this.height / 4);
    this.rainbow = r;
    const s = new Sun(this.ctx, this.width, 0);
    this.sun = s;
    const t = new Text(
      this.ctx,
      this.width / 2,
      this.width < 768 ? this.height / 2 : this.height - this.height / 5,
      this.sentence
    );
    this.text = t;
  }

  render() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.rainbow.render();
    this.sun.render();
    for (let i = 0; i < this.rains.length; i++) {
      this.rains[i].render();
    }
    for (let i = 0; i < this.wwws.length; i++) {
      this.wwws[i].render();
    }
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].render();
    }
    this.ground.render();
    this.text.render();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.init();
  }
}

/*
  Text
*/

class Text {
  constructor(ctx, x, y, s) {
    this.ctx = ctx;
    this.init(x, y, s);
  }

  init(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.tS = 0;
    this.tMax = 50;
    this.v = {
      s: 0,
    };
    this.a = new Angle(0);
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = "hsl(" + Math.sin(this.a.rad) * 360 + ", 80%, 60%)";
    ctx.font = this.tS + "px " + "sans-selif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.s, this.x, this.y);
    ctx.restore();
  }

  updateParams() {
    this.v.s += (this.tMax - this.tS) * 0.3;
    this.v.s *= 0.8;
    this.tS += this.v.s;
    this.a.incDec(0.1);
  }

  render() {
    if (canvas.textBehavior === 1) {
      this.draw();
      this.updateParams();
    }
  }
}

/*
  Rainbow
*/

class Rainbow {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.init(x, y);
  }

  init(x, y) {
    this.x = x;
    this.y = y;
    this.lw = canvas.width / 7 / 4;
    this.r = 5;
    this.cw = 50;
    this.maxCW = canvas.width / 2;
    this.maxR = canvas.width / 7 / 4;
    this.v = {
      x: 0,
      y: 30,
      r: 0,
      c: 0,
    };
    this.timer1 = null;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    for (let i = 0; i < 7; i++) {
      ctx.strokeStyle = Tool.randomColorHSL(i * 40, 80, 50);
      ctx.lineWidth = this.lw;
      ctx.beginPath();
      ctx.arc(
        this.x,
        this.y,
        this.cw - this.r * i,
        Math.PI,
        Math.PI * 2,
        false
      );
      ctx.stroke();
    }
    ctx.restore();
  }

  updateSize() {
    this.v.r += (this.maxR - this.r) * 0.3;
    this.v.r *= 0.8;
    this.r += this.v.r;
    this.v.c += (this.maxCW - this.cw) * 0.3;
    this.v.c *= 0.8;
    this.cw += this.v.c;
  }

  updatePosition() {
    this.y += this.v.y;
    if (this.y > canvas.height) {
      this.v.y = 0;
      this.y = canvas.height;
    }
  }

  render() {
    this.draw();
    if (canvas.rainbowBehavior === 1) this.updatePosition();
    if (this.y === canvas.height) {
      this.updateSize();
      if (this.timer1 === null) this.timer1 = new Time(new Date());
      if (this.timer1.getElapsedTime() > 400) {
        canvas.sunBehavior = 1;
      }
    }
  }
}

/*
  Shape class.
*/

class Shape {
  constructor(ctx, x, y, i) {
    this.ctx = ctx;
    this.init(x, y, i);
  }

  init(x, y, i) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.l = 0;
    this.maxL = Tool.randomNumber(50, 200);
    this.r = 5;
    this.maxR = this.maxL / 20;
    this.lw = this.maxL / 40;
    this.h = Tool.randomNumber(0, 360);
    this.c = Tool.randomColorHSL(55, 100, 50);
    this.cc = Tool.randomColorHSL(23, 95, 52);
    this.a = new Angle(Tool.randomNumber(0, 360));
    this.pn = Tool.randomNumber(5, 10);
    this.rad = (Math.PI * 2) / this.pn;
    this.rand = Math.random();
    this.v = {
      x: Tool.randomNumber(-1, 1) * Math.random(),
      y: Math.random() * Math.random(),
      r: 0,
      l: 0,
    };
    this.timer1 = null;
    this.timer2 = null;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = this.c;
    ctx.lineWidth = this.lw;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.quadraticCurveTo(
      Math.sin(this.a.rad) * 5 + this.x,
      this.y - this.l / 2,
      -Math.cos(this.a.rad) * 5 + this.x,
      this.y - this.l
    );
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.fillStyle = this.c;
    for (let i = 0; i < this.pn; i++) {
      let x = Math.cos(this.rad * i - this.rand) * this.r * 2 + this.x;
      let y = Math.sin(this.rad * i - this.rand) * this.r * 2 + this.y;
      ctx.beginPath();
      ctx.arc(
        -Math.cos(this.a.rad) * 5 + x,
        y - this.l,
        this.r,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    ctx.restore();
    ctx.save();
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.arc(
      -Math.cos(this.a.rad) * 5 + this.x,
      this.y - this.l,
      this.r * 2,
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
    ctx.fillStyle = this.cc;
    ctx.beginPath();
    ctx.arc(
      -Math.cos(this.a.rad) * 5 + this.x,
      this.y - this.l,
      this.r,
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
    ctx.restore();
  }

  updateParams() {
    this.a.incDec(0.5);
  }

  updatePosition() {
    if (this.timer1 === null) this.timer1 = new Time(new Date());
    if (
      this.timer1.getElapsedTime() > this.i * 160 &&
      this instanceof Www !== true &&
      canvas.shapeBehavior === 0
    ) {
      this.v.y += 0.1;
      this.y += this.v.y;
      this.x += this.v.x;
      if (this.y > canvas.height - 100) {
        this.y = canvas.height - 100;
        this.v.y = 0;
        this.v.x = 0;
        this.updateSize();
      }
    }
    if (this instanceof Www === true) {
      this.updateSize();
    }
    if (this.timer1.getElapsedTime() > canvas.shapes.length * 160)
      canvas.rainBehavior = 1;
  }

  updateSize() {
    this.v.r += (this.maxR - this.r) * 0.3;
    this.v.r *= 0.8;
    this.r += this.v.r;
    this.v.l += (this.maxL - this.l) * 0.3;
    this.v.l *= 0.8;
    this.l += this.v.l;
  }

  grow() {
    this.l += 20;
    this.y -= 20;
    if (this.l > canvas.height) {
      canvas.groundBehavior = 1;
    }
  }

  render() {
    this.draw();
    this.updateParams();
    this.updatePosition();
    if (canvas.shapeBehavior === 1) this.grow();
  }
}

/*
  www
*/

class Www extends Shape {
  constructor(ctx, x, y, i) {
    super(ctx, x, y, i);
    this.init(x, y, i);
  }

  init(x, y, i) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.l = 0;
    this.maxL = Tool.randomNumber(30, 130);
    this.r = this.l / 50;
    this.lw = 0.8;
    this.c = "rgb(193, 227, 174)";
    this.a = new Angle(Tool.randomNumber(0, 50));
    this.pn = Tool.randomNumber(5, 7);
    this.rad = (Math.PI * 2) / this.pn;
    this.rand = Math.random();
    this.v = {
      x: 0,
      y: 0,
      r: 0,
      l: 0,
    };
    this.timer1 = null;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = this.c;
    ctx.lineWidth = this.lw;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.quadraticCurveTo(
      Math.sin(this.a.rad) * 5 + this.x,
      this.y - this.l / 2,
      -Math.cos(this.a.rad) * 5 + this.x,
      this.y - this.l
    );
    ctx.stroke();
    ctx.restore();
    ctx.save();
  }
}

/*
  Rain Class
*/

class Rain {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.init(x, y);
  }

  init(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.c = "royalblue";
    this.v = {
      x: 0,
      y: 10,
    };
    this.timer1 = null;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(
      this.x - this.r / 2,
      this.y + this.r / 2,
      this.x - this.r / 2,
      this.y + this.r,
      this.x,
      this.y + this.r
    );
    ctx.bezierCurveTo(
      this.x + this.r / 2,
      this.y + this.r,
      this.x + this.r / 2,
      this.y + this.r / 2,
      this.x,
      this.y
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  updatePosition() {
    this.y += this.v.y;
  }

  wrapPosition() {
    if (this.y > canvas.height + this.r * 2) {
      this.y = 0 - this.r * 2;
    }
  }

  render() {
    this.draw();
    if (canvas.rainBehavior === 1) {
      if (this.timer1 === null) this.timer1 = new Time(new Date());
      if (this.timer1.getElapsedTime() > 4000) canvas.shapeBehavior = 1;
      this.updatePosition();
      this.wrapPosition();
    }
    if (canvas.rainBehavior === 2) {
      this.y -= 20;
    }
  }
}

/*
  Sun
*/

class Sun {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.init(x, y);
  }

  init(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
    this.maxR = 150;
    this.lw = 10;
    this.c = "orange";
    this.rad = (Math.PI * 2) / 24;
    this.a = new Angle(0);
    this.v = {
      x: 0,
      y: 0,
      r: 0,
    };
    this.timer1 = null;
  }

  updateSize() {
    this.v.r += (this.maxR - this.r) * 0.3;
    this.v.r *= 0.8;
    this.r += this.v.r;
  }

  chaseMouse() {
    this.v.x += (canvas.mouseX - this.x) * 0.3;
    this.v.x *= 0.8;
    this.x += this.v.x / 100;
    this.v.y += (canvas.mouseY - this.y) * 0.3;
    this.v.y *= 0.8;
    this.y += this.v.y / 100;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = this.c;
    ctx.strokeStyle = this.c;
    ctx.lineWidth = this.lw;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
    if (
      ctx.isPointInPath(canvas.mouseX, canvas.mouseY) &&
      canvas.mouseX !== null
    ) {
      this.timer1 = null;
      canvas.init();
    }
    for (let i = 0; i < 24; i++) {
      ctx.beginPath();
      ctx.moveTo(
        Math.cos(this.rad * i) * this.r * 1.1 + this.x,
        Math.sin(this.rad * i) * this.r * 1.1 + this.y
      );
      ctx.lineTo(
        Math.cos(this.rad * i) * this.r * 1.3 + this.x,
        Math.sin(this.rad * i) * this.r * 1.3 + this.y
      );
      ctx.stroke();
    }
    ctx.restore();
  }

  render() {
    if (canvas.sunBehavior === 1) {
      this.draw();
      this.updateSize();
      this.a.incDec(1);
      if (this.timer1 === null) this.timer1 = new Time(new Date());
      if (this.timer1.getElapsedTime() > 400) {
        canvas.textBehavior = 1;
        canvas.rainBehavior = 2;
      }
      if (this.timer1.getElapsedTime() > 800) {
        if (canvas.mouseX !== null) this.chaseMouse();
      }
    }
  }
}

/*
  Ground Class
*/

class Ground {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.init(x, y);
  }

  init(x, y) {
    this.x = x;
    this.y = y;
    this.c = "deeppink";
    this.h = 100;
    this.timer1 = null;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, canvas.width, this.h);
    ctx.restore();
  }

  grow() {
    this.y -= 50;
    this.h += 50;
    if (this.y < 0) {
      canvas.groundBehavior = 2;
    }
  }

  returnPosition() {
    this.h -= 50;
    canvas.rainbowBehavior = 1;
  }

  render() {
    this.draw();
    if (canvas.groundBehavior === 1) this.grow();
    if (canvas.groundBehavior === 2) this.returnPosition();
  }
}

(function () {
  "use strict";
  window.addEventListener("load", function () {
    canvas = new Canvas(true);
    canvas.init();

    function render() {
      window.requestAnimationFrame(function () {
        canvas.render();
        render();
      });
    }

    render();

    // event
    window.addEventListener(
      "resize",
      function () {
        canvas.resize();
      },
      false
    );

    canvas.canvas.addEventListener(
      "mousemove",
      function (e) {
        canvas.mouseX = e.clientX;
        canvas.mouseY = e.clientY;
      },
      false
    );

    canvas.canvas.addEventListener("touchmove", function (e) {
      const touch = e.targetTouches[0];
      canvas.mouseX = touch.pageX;
      canvas.mouseY = touch.pageY;
    });

    canvas.canvas.addEventListener("touchend", function (e) {
      canvas.mouseX = null;
      canvas.mouseY = null;
    });
  });
})();
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow: hidden;
}

body {
  position: relative;
}
</style> -->
