
<template>

    <div class="home">
      <el-button type="primary" @click="dialogVisible=true"> Start Game</el-button>
    </div>

    <el-dialog
    v-model="dialogVisible"
    title="Select Number of Players"
    width="700"
    :before-close="handleClose"
  >
  <el-tabs v-model="playerCount" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="2P" name="2P">
      <PawnPiece color="blue"></PawnPiece>
      <PawnPiece color="green"></PawnPiece>
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
    .catch(() => {})
}

const playerCount = ref('2P')


const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
