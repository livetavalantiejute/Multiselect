<script setup>
import { storeToRefs } from "pinia";
import Multiselect from "./components/Multiselect.vue";
import { useItemsStore2 } from "./stores/items";
import { useMovementStore } from "./stores/movement";
import { useItemsStoreLeft } from "./stores/itemsLeft";
import { useItemsStoreRight } from "./stores/itemsRight";
import ButtonsMove from "./components/buttonsLists/ButtonsMove.vue";
// import TheWelcome from "./components/TheWelcome.vue";

const movementStore = useMovementStore();
const itemsStoreLeft = useItemsStoreLeft();
const itemsStoreRight = useItemsStoreRight();

const { itemsFilteredRight, itemsFilteredLeft } = storeToRefs(movementStore);

const { selectedLeft, searchTermLeft } = storeToRefs(itemsStoreLeft);
const { selectAllLeft, selectNoneLeft } = itemsStoreLeft;

const { selectedRight, searchTermRight } = storeToRefs(itemsStoreRight);
const { selectAllRight, selectNoneRight } = itemsStoreRight;

const left = "left";
const right = "right";

const leftData = {
  side: "left",
  items: itemsFilteredLeft,
  selectAll: selectAllLeft,
  selectNone: selectNoneLeft,
  selected: selectedLeft,
  searchTerm: searchTermLeft.value,
};

const rightData = {
  side: "right",
  items: itemsFilteredRight,
  selectAll: selectAllRight,
  selectNone: selectNoneRight,
  selected: selectedRight,
  searchTerm: searchTermRight.value,
};
</script>

<template>
  <main class="flex p-8 flex-col md:flex-row">
    <Multiselect :side="left" :data="leftData" />
    <ButtonsMove />
    <Multiselect :side="right" :data="rightData" />
  </main>
</template>

<style scoped>

</style>
