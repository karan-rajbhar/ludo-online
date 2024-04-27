<template>

  <div class="home">
    <el-button type="primary" @click="dialogVisible = true"> Start Game</el-button>
  </div>

  <el-dialog v-model="dialogVisible" title="Select Number of Players" width="700" height="500"
    :before-close="handleClose">
    <el-tabs v-model="playerCount" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="2P" name="2P">

        <el-radio-group v-model="radio">
          <el-radio :value="1">
            <PawnPiece color="blue"> <el-input v-model="player_1_name" style="width: 240px" placeholder="Player 1" />
            </PawnPiece>
            <PawnPiece color="green"> <el-input v-model="player_2_name" style="width: 240px" placeholder="Player 2" />
            </PawnPiece>
          </el-radio>
          <el-radio :value="2">
            <PawnPiece color="red"> <el-input v-model="player_1_name" style="width: 240px" placeholder="Player 1" />
            </PawnPiece>
            <PawnPiece color="yellow"> <el-input v-model="player_2_name" style="width: 240px" placeholder="Player 2" />
            </PawnPiece>
          </el-radio>

        </el-radio-group>

      </el-tab-pane>
      <el-tab-pane label="3P" name="3P">3P</el-tab-pane>
      <el-tab-pane label="4P" name="4P">4P</el-tab-pane>
    </el-tabs>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { ElDialog } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
import PawnPiece from '@/components/PawnPiece.vue'

const dialogVisible = ref(false)

const handleClose = () => {
  ElMessageBox.confirm('Are you sure you want to close this dialog?')
    .then(() => {
      dialogVisible.value = false
    })
    .catch(() => { })
}

const playerCount = ref('2P')
const radio = ref(1)
const player_1_name = ref('')
const player_2_name = ref('')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>


<style scoped>
:deep(.el-dialog) {
  max-width: 700px;
  min-height: 700px !important;
}

:deep(.el-tabs__content){
  display: flex;
  margin: 30px;
  padding: 30px;
  flex-direction: row;
  gap: 10px;
  position: relative;
  height: 100%;
}
</style>