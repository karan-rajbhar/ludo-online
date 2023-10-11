<template>

  <span @click="generateRandomNumber">Generate Number</span>
  <span>{{random}}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRandomNumberGenerator} from '@/helpers/random'



const {random,generateRandomNumber} = useRandomNumberGenerator();
let board = [];

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
