import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useItemsStore2 } from "./items";
import { useItemsStoreLeft } from "./itemsLeft";
import { useItemsStoreRight } from "./itemsRight";

export const useMovementStore = defineStore("movement", () => {
  const itemsStore = useItemsStore2();
  const itemsStoreLeft = useItemsStoreLeft();
  const itemsStoreRight = useItemsStoreRight();

  const { selected } = storeToRefs(itemsStore);
  const { selectNone, selectionWhere } = itemsStore;

  const { itemsFilteredLeft, initialLeft, itemsSelectedLeft } = storeToRefs(itemsStoreLeft);
  const { updateItemsLeft, selectAllLeft } = itemsStoreLeft;

  const { itemsFilteredRight, initialRight, itemsSelectedRight } = storeToRefs(itemsStoreRight);
  const { updateItemsRight, selectAllRight } = itemsStoreRight;

  function moveOne(itemsSelectedFrom, itemsFrom, itemsTo) {
    selectionWhere(itemsSelectedFrom, itemsFrom)

    itemsTo.value.push(...itemsSelectedFrom.value);

    selectNone(itemsFrom, selected);

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
    console.log(itemsSelectedLeft)

    moveOne(itemsSelectedLeft, initialLeft, initialRight);
    console.log(itemsSelectedLeft)
    itemsSelectedLeft.value = []
  }

  function moveOneLeft() {
    moveOne(itemsSelectedRight, initialRight, initialLeft);
    itemsSelectedRight.value = []
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
    itemsSelectedLeft,
    itemsSelectedRight,
  };
});
