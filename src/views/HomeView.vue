<template>
  <div class="home">
    <n-button type="primary" @click="dialogVisible = true"> Start Game </n-button>
  </div>
  <div class="board">
    {{ game }}
  </div>

  <n-modal v-model:show="dialogVisible" class="player-select-modal">
    <template #header-extra>
      Config player
    </template>
    <div class="player-selector">
      <div class="player-row">
        <n-input placeholder="Player 1 Name" v-model:value="player1.name" />
        <n-popselect v-model:value="player1.color" :options="player1Options">
          <n-button>{{ colorMap[player1.color] }}</n-button>
        </n-popselect>
        <PawnPiece :color="player1.color" />
      </div>
      <div class="player-row">
        <n-input placeholder="Player 2 Name" v-model:value="player2.name" />
        <n-popselect v-model:value="player2.color" :options="player2Options">
          <n-button>{{ colorMap[player2.color] }}</n-button>
        </n-popselect>
        <PawnPiece :color="player2.color" />
      </div>
      <n-button type="default" @click="dialogVisible = false"> Cancel </n-button>
      <n-button type="primary"  :disabled="isSubmitDisabled" @click="startGame">  Start Game </n-button>
    </div>


  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PawnPiece from '@/components/PawnPiece.vue'

const dialogVisible = ref(false)

interface player {
  name: string
  color: string
}



class Game {
  player1: player
  player2: player
  constructor(player1: player, player2: player) {
    this.player1 = player1
    this.player2 = player2
  }
}

const colorMap: Record<string, string> = {
  red: 'Red',
  green: 'Green',
  blue: 'Blue',
  yellow: 'Yellow'
}

const options = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' }
]

const game = ref<Game | null>(null)

const player1 = ref<player>({ name: '', color: 'red' })
const player2 = ref<player>({ name: '', color: 'green' })

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
  game.value = new Game(player1.value, player2.value)
  dialogVisible.value = false
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
