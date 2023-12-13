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

const SAFE_SQUARES = [1, 9, 14, 22, 27, 35];

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

  // Ask the user to select a pawn to move
  let pawnIndex = window.prompt("Select a pawn to move (0-3)");

  currentPlayer.pawns[pawnIndex].move(diceNumber.value);
  checkCollision(pawnIndex);
  checkWin();
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length;
}

function checkCollision(pawnIndex: number) {
  let currentPlayer = players.value[currentPlayerIndex.value];
  let movedPawn = currentPlayer.pawns[pawnIndex];

  for (let player of players.value) {
    for (let pawn of player.pawns) {
      if (pawn !== movedPawn && pawn.position === movedPawn.position) {
        // Check if the collision occurred on a safe square
        if (!SAFE_SQUARES.includes(movedPawn.position)) {
          pawn.capture();
        }
      }
    }
  }
}

function checkWin() {
  // Implement win condition check
}

</script>