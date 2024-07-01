<template>
  <div class="home">
    <n-button type="primary" @click="dialogVisible = true"> Start Game </n-button>
  </div>
  <div class="board">
    {{ game }}
    <div class="row" v-for="(row, i) in board" :key="i">
    <div class="cell" v-for="(cell, j) in row" :key="j">
      <PawnPiece v-if="cell" :color="cell.color" />
    </div>
  </div>
  </div>

  <n-modal v-model:show="dialogVisible" class="player-select-modal">
    <template #header-extra>
      Config player
    </template>
    <PlayerSelector
      :players="[player1, player2]"
      :colorMap="colorMap"
      @cancel="dialogVisible = false"
      @startGame="startGame"/>

  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PawnPiece from '@/components/PawnPiece.vue'
import PlayerSelector from '@/views/PlayerSelector.vue'


const dialogVisible = ref(false)

interface pawn {
  color: string
  position: number
}

interface player {
  name: string
  color: string
  pawns: pawn[]
}



class Game {
  player1: player
  player2: player

  constructor(players: player[] ) {
    this.player1 = players[0]
    this.player2 = players[1]
    this.player1.pawns = initPawn(this.player1.color)
    this.player2.pawns = initPawn(this.player2.color)
  }
}


const game = ref<Game | null>(null)

let initPawn = (color: string) => {
  return Array(4).fill(0).map((_, index) => {
    return { color, position: index }
  })
}
const player1 = ref<player>({ name: '', color: 'red' , pawns: []})
const player2 = ref<player>({ name: '', color: 'green' , pawns: []})

const player1Options = computed(() => {
  return options.filter((option) => option.value !== player2.value.color)
})

const player2Options = computed(() => {
  return options.filter((option) => option.value !== player1.value.color)
})

const isSubmitDisabled = computed(() => {
  return !player1.value.name || !player2.value.name
})

const startGame = () => {
  console.log('Game started')
  game.value = new Game([player1.value, player2.value])
  dialogVisible.value = false
}

const board=Array(8).fill(Array(8).fill(null))

const roleDice = () => {
  return Math.floor(Math.random() * 6) + 1
}

</script>

<style scoped>
.player-select-modal {
  width: 600px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #f0f0f0;
}

.player-selector {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.player-row {
  display: flex;
  gap: 5px;
  align-items: center;
  width: 75%;
}
</style>
