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
  <!-- <div class="player-init">
    <div class="pawn" v-for="(position, pawn) in player1.pawns">

    </div>
  </div> -->
</template>

<script setup lang="ts">
import { useRandomNumberGenerator } from '@/helpers/random'
import Player from '@/helpers/player'

const { random, generateRandomNumber } = useRandomNumberGenerator()

let player1 = new Player('karan', 'red')
let player2 = new Player('aashu', 'yellow')
let userInput: number | null = null

// Function to handle user input
function handleUserInput(input: any) {
  userInput = input
  console.log('User input: ' + userInput)
}
function timedPrompt() {
  const timer = setTimeout(function () {
    if (!userInput) {
      // If no user input after 5 seconds, select a random value
      userInput = Math.floor(Math.random() * 4) + 1;
      console.log("Random value selected: " + userInput);
    }
  }, 5000);

  const promptDialog = prompt("Enter something:");

  // When the user provides input, clear the timer
  clearTimeout(timer);

  // Handle the user input
  handleUserInput(promptDialog);
}

function shuffleAndMovePawn() {
  generateRandomNumber(6)
  timedPrompt()
  console.log(userInput)
  console.log(player1)
  player1.pawns[userInput]=player1.pawns[userInput]+random.value
  console.log(player1)
  // When the user provides input, clear the timer
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

.player-init {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 50px solid;
  padding: 20px;
}

.pawn {
  border-radius: 50%;
  background-color: #ff3333;
  padding: 4px;
}
</style>
