<template>

  <div class="home">
    <n-button type="primary" @click="dialogVisible = true"> Start Game
    </n-button>
  </div>

  <n-modal v-model:show="dialogVisible" class="player-select-modal">
    <n-tabs v-model="playerCount" class="demo-tabs" @tab-click="handleClick" style="width: 600px;">
      <n-tab-pane label="2P" name="2P" class="select-tab">
        <n-radio-group v-model:value="radioValue" name="radiogroup" class="color-select">
          <n-space>
            <n-radio v-for="player in playersOption" :key="player.value" :value="player.value" :label="player.label" >
              <PawnPiece :color="player.value" />
              
            </n-radio>
          </n-space>
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

const radioValue = ref('1')

const playersOption = [
  { value: 'greeBlue', label: '' },
  { value: 'redYellow', label: '' },
]


function handleClick(tab: any, event: any) {
  console.log(tab, event)
}


</script>


<style scoped>
.player-select-modal {
  width: 600px;
  padding: 10px;
  background: #f0f0f0;
}
</style>