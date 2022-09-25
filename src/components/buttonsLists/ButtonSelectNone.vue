<script setup>
import { storeToRefs } from "pinia";
import { useItemsStoreLeft } from "../../stores/itemsLeft";
import { useItemsStoreRight } from "../../stores/itemsRight";
import Button from "../common/Button.vue";

const itemsStoreLeft = useItemsStoreLeft();
const { itemsSelectedLeft } = storeToRefs(itemsStoreLeft);

const itemsStoreRight = useItemsStoreRight();
const { itemsSelectedRight } = storeToRefs(itemsStoreRight);

defineProps({
  data: {
    type: Object,
  },
});

function isDisabledLeft() {
  if (itemsSelectedLeft.value.length) {
    return false;
  }
  return true;
}

function isDisabledRight() {
  if (itemsSelectedRight.value.length) {
    return false;
  }
  return true;
}
</script>

<template>
    <Button v-if="data.side == 'left'" :classType="'alt'" @click="data.selectNone" :disabled="isDisabledLeft()">
      <template #btnName> None </template>
    </Button>
    <Button v-if="data.side == 'right'" :classType="'alt'" @click="data.selectNone" :disabled="isDisabledRight()">
      <template #btnName> None </template>
    </Button>
</template>

<style scoped></style>
