<template>
  <div class="ludo-board">
    <template v-for="row in 11" :key="row">
      <template v-for="col in 11" :key="col">
        <div :class="['square', getSquareColor(row, col)]">{{ getSquareText(row, col) }}</div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const getSquareColor = (row: number, col: number): string => {
  // Define your logic to determine square color here
  const colors: string[] = [
    'red', '', '', '', '', '', '', '', '', '', 'green',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '',
    'yellow', '', '', '', '', '', '', '', '', '', 'blue',
  ];
  return colors[(row - 1) * 11 + col - 1];
};

const getSquareText = (row: number, col: number): string => `${row}-${col}`;
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

.square.red { background-color: #ff3333; }
.square.green { background-color: #33ff33; }
.square.blue { background-color: #3333ff; }
.square.yellow { background-color: #ffff33; }
</style>
