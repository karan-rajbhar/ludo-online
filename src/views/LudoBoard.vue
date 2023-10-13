<template>
  <span @click="shuffleAndMovePawn">Generate Number</span><br />
  <span>{{ random }}</span
  ><br />
  <div class="paws">
    <div>{{ player1.name }}</div>
    <ul>
      <li v-for="(position, pawn) in player1.pawns">{{ pawn }} {{ position }}</li>
    </ul>
  </div>

  <div class="paws">
    <div>{{ player2.name }}</div>
    <ul>
      <li v-for="(position, pawn) in player2.pawns">{{ pawn }} {{ position }}</li>
    </ul>
  </div>
  <div class="player-init">
    <div class="pawn" v-for="(position, pawn) in player1.pawns">
    {{ position }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRandomNumberGenerator } from '@/helpers/random'
import Player from '@/helpers/player'

const { random, generateRandomNumber } = useRandomNumberGenerator()

let player1 = new Player('karan', 'red')
let player2 = new Player('aashu', 'yellow')

function shuffleAndMovePawn() {
  generateRandomNumber(6)

}
</script>

<style scoped>
.ludo-board {
  display: grid;
  grid-template-columns: repeat(11, 40px);
  grid-template-rows: repeat(11, 40px);
  gap: 2px;
}

.square {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.square.red {
  background-color: #ff3333;
}
.square.green {
  background-color: #33ff33;
}
.square.blue {
  background-color: #3333ff;
}
.square.yellow {
  background-color: #ffff33;
}

.player-init{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 50px solid;
  padding: 20px;
  height: 100px;
  width: 100px;
}

.player-init>* {
  flex: 1 1 50%;
}

.pawn{
  border-radius: 50%;
  background-color: #ff3333;
}

</style>
