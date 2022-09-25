import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useItemsStore2 } from "./itemstest";

export const useItemsStoreRight = defineStore("itemsRight", () => {
  const itemsStore = useItemsStore2();

  const { filteringFunction, selectAll, selectNone } = itemsStore;

  const searchTermRight = ref("");
  const itemsFilteredRight = ref([]); //filtered after search
  const initialRight = ref([]); //initial and moved items

  itemsFilteredRight.value = filteringFunction(
    itemsFilteredRight,
    searchTermRight
  ).value;

  function selectAllRight() {
    selectAll(itemsFilteredRight);
  }

  function selectNoneRight() {
    selectNone(itemsFilteredRight);
  }

  function updateItemsRight() {
    itemsFilteredRight.value = filteringFunction(
      initialRight,
      searchTermRight
    ).value;
  }

  return {
    initialRight,
    itemsFilteredRight,
    searchTermRight,
    selectAllRight,
    selectNoneRight,
    updateItemsRight
  };
});
