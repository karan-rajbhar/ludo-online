<template>
    <div class="pawn">
        <FontAwesomeIcon class="icon"  :icon="faChessPawn"/>
        <slot>
        </slot>
    </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChessPawn } from '@fortawesome/free-regular-svg-icons';
const props = defineProps<{
    color: string
}>();
</script>

<style scoped>
.icon {
    color: v-bind(color);
    height: 1em;
    width: 1em;
    margin: 0 0.25em;
    padding: 30px;
}
</style>