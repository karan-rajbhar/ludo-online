<template>
  <div>
    <button @click="startGame">Start Game</button>
    <button @click="rollDice">Roll Dice</button>
    <div v-for="(player, index) in players" :key="index">
      <div>{{ player.name }}</div>
      <ul>
        <li v-for="(pawn, index) in player.pawns" :key="index">
          {{ index }} {{ pawn.position }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Player from '@/helpers/player';

let players = ref<Player[]>([]);
let currentPlayerIndex = ref(0);
let diceNumber = ref(0);

function startGame() {
  players.value = [
    new Player('Player 1', 'red'),
    new Player('Player 2', 'yellow'),
  ];
}

function rollDice() {
  diceNumber.value = Math.floor(Math.random() * 6) + 1;
  movePawn();
}

function movePawn() {
  let currentPlayer = players.value[currentPlayerIndex.value];
  currentPlayer.movePawn(diceNumber.value);
  checkCollision();
  checkWin();
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length;
}

function checkCollision() {
  // Implement collision logic
}

function checkWin() {
  // Implement win condition check
}

</script>