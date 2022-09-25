<script setup>
import { storeToRefs } from "pinia";
import { useItemsStoreRight } from "../../stores/itemsRight";
import { useMovementStore } from "../../stores/movement";
import ButtonMove from "../common/ButtonMove.vue";
import Left from "../icons/Left.vue";

const movementStore = useMovementStore();
const { moveOneLeft } = movementStore;

const itemsStoreRight = useItemsStoreRight();
const { itemsSelectedRight } = storeToRefs(itemsStoreRight);

function isDisabled() {
  if (itemsSelectedRight.value.length) {
    return false;
  }
  return true;
}

defineProps({
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <ButtonMove @click="moveOneLeft" :classType="'alt'" :disabled="isDisabled()">
    <template #btnName>
      <Left />
    </template>
  </ButtonMove>
</template>
