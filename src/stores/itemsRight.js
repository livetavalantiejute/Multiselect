import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useItemsStore2 } from "./items";

export const useItemsStoreRight = defineStore("itemsRight", () => {
  const itemsStore = useItemsStore2();

  const { filteringFunction, selectAll, selectNone, toggleSelected, selectionWhere } = itemsStore;

  const searchTermRight = ref("");
  const itemsFilteredRight = ref([]); //filtered after search
  const initialRight = ref([]); //initial and moved items
  const itemsSelectedRight = ref([]);

  itemsFilteredRight.value = filteringFunction(
    itemsFilteredRight,
    searchTermRight
  ).value;

  function selectAllRight() {
    selectAll(itemsFilteredRight, itemsSelectedRight);
  }

  function selectNoneRight() {
    selectNone(itemsFilteredRight, itemsSelectedRight);
  }

  function updateItemsRight() {
    itemsFilteredRight.value = filteringFunction(
      initialRight,
      searchTermRight
    ).value;
  }

  function getSelectedRight(idToFind) {
    itemsSelectedRight.value = toggleSelected(idToFind)
    selectionWhere(itemsSelectedRight, initialRight)
  } 

  return {
    initialRight,
    itemsFilteredRight,
    searchTermRight,
    selectAllRight,
    selectNoneRight,
    updateItemsRight,
    itemsSelectedRight,
    getSelectedRight
  };
});
