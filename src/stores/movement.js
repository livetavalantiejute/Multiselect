import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useItemsStore2 } from "./itemstest";
import { useItemsStoreLeft } from "./itemstestLeft";
import { useItemsStoreRight } from "./itemstestRight";

export const useMovementStore = defineStore("movement", () => {
  const itemsStore = useItemsStore2();
  const itemsStoreLeft = useItemsStoreLeft();
  const itemsStoreRight = useItemsStoreRight();

  const { selected } = storeToRefs(itemsStore);
  const { selectNone } = itemsStore;

  const { itemsFilteredLeft, initialLeft } = storeToRefs(itemsStoreLeft);
  const { updateItemsLeft, selectAllLeft } = itemsStoreLeft;

  const { itemsFilteredRight, initialRight } = storeToRefs(itemsStoreRight);
  const { updateItemsRight, selectAllRight } = itemsStoreRight;

  const itemsSelectedLeft = ref([]);
  const itemsSelectedRight = ref([]);

  function moveOne(itemsSelectedFrom, itemsFrom, itemsTo) {
    itemsSelectedFrom.value = selected.value.filter((selectedItem) => {
      return itemsFrom.value.includes(selectedItem);
    });

    itemsTo.value.push(...itemsSelectedFrom.value);

    selectNone(itemsFrom);

    itemsFrom.value = itemsFrom.value.filter((item) => {
      return !itemsSelectedFrom.value.includes(item);
    });

    updateItemsLeft();
    updateItemsRight();
  }

  function moveAll(selectAllFn, moveOneToSide) {
    selectAllFn();
    moveOneToSide();
  }

  function moveOneRight() {
    moveOne(itemsSelectedLeft, initialLeft, initialRight);
  }

  function moveOneLeft() {
    moveOne(itemsSelectedRight, initialRight, initialLeft);
  }

  function moveAllRight() {
    moveAll(selectAllLeft, moveOneRight);
  }

  function moveAllLeft() {
    moveAll(selectAllRight, moveOneLeft);
  }

  return {
    moveOneRight,
    moveAllRight,
    moveOneLeft,
    moveAllLeft,
    itemsFilteredRight,
    itemsFilteredLeft,
  };
});
