<script setup>
import { storeToRefs } from "pinia";
import { useMovementStore } from "../../stores/movement";
import ButtonMove from "../common/ButtonMove.vue";
import DoubleLeft from "../icons/DoubleLeft.vue";

const movementStore = useMovementStore();
const { moveAllLeft } = movementStore;
const { itemsFilteredRight } = storeToRefs(movementStore)

defineProps({
  disabled: {
    type: Boolean,
  },
});

</script>

<template>
  <ButtonMove @click="moveAllLeft" :classType="'def'" :disabled="itemsFilteredRight.length === 0 ? true : false">
    <template #btnName>
      <DoubleLeft />
    </template>
  </ButtonMove>
</template>
