<script setup>
import { storeToRefs } from "pinia";
import { useMovementStore } from "../../stores/movement";
import ButtonMove from "../common/ButtonMove.vue";
import DoubleRight from "../icons/DoubleRight.vue";

const movementStore = useMovementStore();
const { moveAllRight } = movementStore;
const { itemsFilteredLeft } = storeToRefs(movementStore)

defineProps({
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <ButtonMove @click="moveAllRight" :classType="'def'" :disabled="itemsFilteredLeft.length === 0 ? true : false">
    <template #btnName>
      <DoubleRight />
    </template>
  </ButtonMove>
</template>
