<template>
  <div class="game">
    <div class="top">
      <div class="side lt red">
        <div class="cube c3">
          <div class="face front"><span class="dot"></span></div>
          <div class="face back"><span class="dot"></span><span class="dot"></span></div>
          <div class="face right"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
          <div class="face left">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
          <div class="face top">
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="face bottom">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
        </div>
        <div class="acin"></div>
        <div class="bcer">
          <div class="player red"></div>
        </div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
      </div>
      <div class="v sc">
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq blue"></div>
        <div class="sq blue"></div>
        <div class="sq"></div>
        <div class="sq blue"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq blue"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq blue"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq blue"></div>
        <div class="sq"></div>
      </div>
      <div class="side rt blue">
        <div class="cube c2">
          <div class="face front"><span class="dot"></span></div>
          <div class="face back"><span class="dot"></span><span class="dot"></span></div>
          <div class="face right"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
          <div class="face left">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
          <div class="face top">
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="face bottom">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
        </div>
        <div class="acin"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
      </div>
    </div>
    <div class="hl">
      <div class="h sc left">
        <div class="sq"></div>
        <div class="sq red"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq red"></div>
        <div class="sq red"></div>
        <div class="sq red"></div>
        <div class="sq red"></div>
        <div class="sq red"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
      </div>
      <div class="center">
        <div class="ccer blue"></div>
        <div class="hcerc">
          <div class="red ccer"></div>
          <div class="yellow ccer"></div>
        </div>
        <div class="green ccer"></div>
      </div>
      <div class="h sc right">
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq yellow"></div>
        <div class="sq yellow"></div>
        <div class="sq yellow"></div>
        <div class="sq yellow"></div>
        <div class="sq yellow"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq yellow"></div>
        <div class="sq"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="side lb green">
        <div class="cube c4">
          <div class="face front"><span class="dot"></span></div>
          <div class="face back"><span class="dot"></span><span class="dot"></span></div>
          <div class="face right"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
          <div class="face left">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
          <div class="face top">
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="face bottom">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
        </div>
        <div class="acin"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
      </div>
      <div class="v sc">
        <div class="sq"></div>
        <div class="sq green"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq green"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq green"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq green"></div>
        <div class="sq"></div>
        <div class="sq green"></div>
        <div class="sq green"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
        <div class="sq"></div>
      </div>
      <div class="side rb yellow">
        <div class="cube c1 active">
          <div class="face front"><span class="dot"></span></div>
          <div class="face back"><span class="dot"></span><span class="dot"></span></div>
          <div class="face right"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
          <div class="face left">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
          <div class="face top">
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
            </div>
            <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="face bottom">
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
            <div class="column"><span class="dot"></span><span class="dot"></span></div>
          </div>
        </div>
        <div class="acin active"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
        <div class="bcer"></div>
      </div>
    </div>
    <!-- TODO: create the players and make them move -->
  </div>
</template>

<style scoped>

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
}

.top,
.bottom {
  display: flex;
}

.side {
  position: relative;
  width: 36vh;
  height: 36vh;
  background-color: #333;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
  border: 0.1px solid #333;
}

.bcer {
  width: 6vh;
  height: 6vh;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cube {
  position: absolute;
  width: 6vh;
  height: 6vh;
  transform-style: preserve-3d;
  transition: transform 2s ease-out;
  transform-origin: 50% 50%;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.5vh;
}

.side.green .face {
  background-image: linear-gradient(90deg, green, darkgreen);
}
.side.blue .face {
  background-image: linear-gradient(90deg, #006fdf, #0060c0);
}
.side.yellow .face {
  background-image: linear-gradient(90deg, #f9d330, #e9c731);
}
.side.red .face {
  background-image: linear-gradient(90deg, #ff0000, rgb(216, 0, 0));
}
.face.top {
  transform: rotateX(90deg) translateZ(3vh);
}
.face.bottom {
  transform: rotateX(-90deg) translateZ(3vh);
}

.face.right {
  transform: rotateY(90deg) translateZ(3vh);
}
.face.left {
  transform: rotateY(-90deg) translateZ(3vh);
}

.face.front {
  transform: rotateX(0deg) translateZ(3vh);
}
.face.back {
  transform: rotateX(-180deg) translateZ(3vh);
}

.side.lt .cube {
  left: -6.5vh;
  top: -6.5vh;
}
.side.rt .cube {
  top: -6.5vh;
  right: -6.5vh;
}
.side.lb .cube {
  left: -6.5vh;
  bottom: -6.5vh;
}
.side.rb .cube {
  bottom: -6.5vh;
  right: -6.5vh;
}

.sc {
  display: grid;
}

.sq {
  height: 6vh;
  width: 6vh;
  background-color: white;
  border: 0.1px solid #333;
}

.blue {
  background-color: #006fdf;
}

.red {
  background-color: rgb(255, 0, 0);
}

.green {
  background-color: #009b1a;
}

.yellow {
  background-color: #f9d330;
}
.hl {
  height: 18vh;
  display: flex;
}
.v {
  grid-template-columns: repeat(3, 6vh);
}
.h {
  grid-template-rows: repeat(3, 6vh);
  grid-template-columns: repeat(6, 6vh);
}

.center {
  width: 18vh;
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1vh;
  background-color: #fff;
}

.ccer {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  border: 1px solid white;
}

.hcerc {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.face.front {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  display: block;
  width: 1.5vh;
  height: 1.5vh;
  border-radius: 50%;
  background-color: white;
}

.face.back {
  display: flex;
  justify-content: space-between;
}

.face.back .dot:nth-of-type(2) {
  align-self: flex-end;
}

.face.right {
  display: flex;
  justify-content: space-between;
}

.face.right .dot:nth-of-type(1) {
  align-self: flex-end;
}

.face.right .dot:nth-of-type(2) {
  align-self: center;
}

.face.left,
.face.bottom,
.face.top {
  display: flex;
  justify-content: space-between;
}

.face.left .column,
.face.bottom .column,
.face.top .column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.face.top .column:nth-of-type(2) {
  justify-content: center;
}
/* 
.player {
    width: 3vh;
    height: 3vh;
    border-radius: 50%;
    border: 1px solid white;
    background-image: linear-gradient(to right, red,red),;
} */

.acin {
  width: 2vh;
  height: 2vh;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translate(0, -50%);
}

.rt .acin,
.rb .acin {
  right: -3vh;
}

.lt .acin,
.lb .acin {
  left: -3vh;
}

.acin.active {
  background-color: #333;
  animation: blink 0.5s infinite alternate-reverse;
}

@keyframes blink {
  from {
    background-color: #333;
  }
  to {
    background-color: rgb(255, 255, 255);
  }
}

.cor {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.5rem;
  cursor: pointer;
}
.cor.big {
  top: 3vh;
  left: 3vh;
  width: 15vh;
  height: 15vh;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
}

</style>
  