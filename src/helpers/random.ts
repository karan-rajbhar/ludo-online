import {ref} from 'vue'

export function useRandomNumberGenerator() {
    const random = ref(1);
  
    function generateRandomNumber() {
      // Generate a random number between 1 and 6
      random.value = Math.floor(Math.random() * 6) + 1;
    }
  
    return {
      random,
      generateRandomNumber,
    };
  }