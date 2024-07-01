<template>
  <div class="player-selector">
    <div class="player-row" v-for="(player, index) in players" :key="index">
      <n-input :placeholder="`Player ${index + 1} Name`" v-model:value="player.name" />
      <n-popselect v-model:value="player.color" :options="playerOptions(index)">
        <n-button>{{ colorMap[player.color] }}</n-button>
      </n-popselect>
      <PawnPiece :color="player.color" />
    </div>
    <n-button type="default" @click="$emit('cancel')"> Cancel </n-button>
    <n-button type="primary" :disabled="isSubmitDisabled" @click="$emit('startGame')">
      Start Game
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import PawnPiece from '@/components/PawnPiece.vue'
import Player from '@/helpers/player'

interface pawn {
  color: string
  position: number
}

interface player {
  name: string
  color: string
  pawns: pawn[]
}

const props = defineProps<{
  players: Player[]
}>()

const emits = defineEmits(['cancel', 'startGame'])

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

const playerOptions = (index:number) => {
  return options.filter((option) => {
    return !props.players.some((player, i) => {
      return i !== index && player.color === option.value
    })
  })
}

const isSubmitDisabled = computed(() => {
  for (const player of props.players) {
    if (!player.name || !player.color) {
      return true
    }
  }
  return false
})

function cancel() {
  emits('cancel')
}

function startGame() {
  emits('startGame')
}
</script>

<style scoped>
/* Styles */
</style>
