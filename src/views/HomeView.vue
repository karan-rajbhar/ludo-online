
<template>

    <div class="home">
      <el-button type="primary" @click="dialogVisible=true"> Start Game</el-button>
    </div>

    <el-dialog
    v-model="dialogVisible"
    title="Number of Players"
    width="500"
    :before-close="handleClose"
  >
  <el-select v-model="playerCount" placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
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

const dialogVisible = ref(false)

const handleClose = () => {
  ElMessageBox.confirm('Are you sure you want to close this dialog?')
    .then(() => {
      dialogVisible.value = false
    })
    .catch(() => {})
}

const playerCount = ref('')
const options = [
  {
    value: '2',
    label: '2 Players',
    disabled: false
  },
  {
    value: '3',
    label: '3 Players',
    disabled: false
  },
  {
    value: '4',
    label: '4 Players',
    disabled: false
  }
]

</script>
