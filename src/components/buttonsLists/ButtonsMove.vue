<script setup>
import { useMovementStore } from "../../stores/movement";
import ButtonMove from "../common/ButtonMove.vue";
import Left from "../icons/Left.vue";

const movementStore = useMovementStore();
const { moveOneRight, moveAllRight, moveOneLeft, moveAllLeft } = movementStore;
</script>

<template>
  <div class="flex flex-col self-center mx-4">
    <ButtonMove @click="moveAllRight" :classType="'def'">
      <template #btnName> <Left /> </template>
    </ButtonMove>
    <ButtonMove @click="moveOneRight" :classType="'alt'">
      <template #btnName> > </template>
    </ButtonMove>
    <ButtonMove @click="moveOneLeft" :classType="'alt'">
      <template #btnName> &#60; </template>
    </ButtonMove>
    <ButtonMove @click="moveAllLeft" :classType="'def'">
      <template #btnName> &#60;&#60; </template>
    </ButtonMove>
  </div>
</template>

<style scoped></style>
