<script setup>
import { useMovementStore } from "../../stores/movement";
import ButtonMoveAllRight from "./ButtonMoveAllRight.vue";
import ButtonMoveOneRight from "./ButtonMoveOneRight.vue";
import ButtonMoveOneLeft from "./ButtonMoveOneLeft.vue";
import ButtonMoveAllLeft from "./ButtonMoveAllLeft.vue";

const movementStore = useMovementStore();
const { moveOneRight, moveAllRight, moveOneLeft, moveAllLeft } = movementStore;

defineProps({
  disabled: {
    type: Boolean,
  },
});

const buttonClass = ["rotate-90", "md:rotate-0"];
</script>

<template>
  <div class="flex self-center mx-4 flex-row md:flex-col">
    <ButtonMoveAllRight :class="buttonClass"/>
    <ButtonMoveOneRight :class="buttonClass"/>
    <ButtonMoveOneLeft :class="buttonClass"/>
    <ButtonMoveAllLeft :class="buttonClass"/>
  </div>
</template>

<style scoped></style>
