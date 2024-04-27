<template>
    <div class="pawn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <circle cx="12" cy="6" r="4"></circle>
            <line x1="12" y1="10" x2="12" y2="16"></line>
            <line x1="12" y1="16" x2="16" y2="20"></line>
            <line x1="12" y1="16" x2="8" y2="20"></line>
        </svg>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    color: string
}>();
</script>

<style scoped>
.icon {
    color: v-bind(color);
    height: 1em;
    width: 1em;
}
</style>