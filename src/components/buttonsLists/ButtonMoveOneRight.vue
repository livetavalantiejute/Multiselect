<script setup>
import { storeToRefs } from "pinia";
import { useItemsStoreLeft } from "../../stores/itemsLeft";
import { useItemsStoreRight } from "../../stores/itemsRight";
import { useMovementStore } from "../../stores/movement";
import ButtonMove from "../common/ButtonMove.vue";
import Right from "../icons/Right.vue";

const movementStore = useMovementStore();
const { moveOneRight } = movementStore;

const itemsStoreLeft = useItemsStoreLeft();
const { itemsSelectedLeft } = storeToRefs(itemsStoreLeft);

defineProps({
  disabled: {
    type: Boolean,
  },
});

function isDisabled() {
  if (itemsSelectedLeft.value.length) {
    return false;
  }
  return true;
}
</script>

<template>
  <ButtonMove @click="moveOneRight" :classType="'alt'" :disabled="isDisabled()">
    <template #btnName>
      <Right />
    </template>
  </ButtonMove>
</template>
