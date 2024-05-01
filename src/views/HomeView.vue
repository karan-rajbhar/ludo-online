<template>

  <div class="home">
    <n-button type="primary" @click="dialogVisible = true"> Start Game
    </n-button>
  </div>

  <n-modal v-model:show="dialogVisible">
    <n-tabs v-model="playerCount" class="demo-tabs" @tab-click="handleClick">
      <n-tab-pane label="2P" name="2P" class="select-tab
      ">
        <n-radio-group v-model="radio">
          <n-radio :value="1">
            <PawnPiece color="blue"> <n-input v-model="player_1_name" style="width: 240px" placeholder="Player 1" />
            </PawnPiece>
            <PawnPiece color="green"> <n-input v-model="player_2_name" style="width: 240px" placeholder="Player 2" />
            </PawnPiece>
          </n-radio>
          <n-radio :value="2">
            <PawnPiece color="red"> <n-input v-model="player_1_name" style="width: 240px" placeholder="Player 1" />
            </PawnPiece>
            <PawnPiece color="yellow"> <n-input v-model="player_2_name" style="width: 240px" placeholder="Player 2" />
            </PawnPiece>
          </n-radio>
        </n-radio-group>

      </n-tab-pane>
      <n-tab-pane label="3P" name="3P">3P</n-tab-pane>
      <n-tab-pane label="4P" name="4P">4P</n-tab-pane>
    </n-tabs>
  </n-modal>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import PawnPiece from '@/components/PawnPiece.vue'

const dialogVisible = ref(false)



const playerCount = ref('2P')
const radio = ref(1)
const player_1_name = ref('')
const player_2_name = ref('')


function handleClick(tab, event) {
  console.log(tab, event)
}



</script>


<style scoped>

</style>