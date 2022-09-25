import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useItemsStore2 } from "./itemstest";

export const useItemsStoreLeft = defineStore("itemsLeft", () => {
  const itemsStore = useItemsStore2();

  const { items, selected } = storeToRefs(itemsStore);
  const { filteringFunction, selectAll, selectNone } = itemsStore;

  const searchTermLeft = ref("");
  const itemsFilteredLeft = ref([]); //filtered after search
  const initialLeft = ref([...items.value]); //initial and moved items

  itemsFilteredLeft.value = filteringFunction(
    initialLeft,
    searchTermLeft
  ).value;

  function selectAllLeft() {
    selectAll(itemsFilteredLeft);
  }

  function selectNoneLeft() {
    selectNone(itemsFilteredLeft);
  }

  function updateItemsLeft() {
    itemsFilteredLeft.value = filteringFunction(
      initialLeft,
      searchTermLeft
    ).value;
  }

  return {
    initialLeft,
    itemsFilteredLeft,
    searchTermLeft,
    selectAllLeft,
    selectNoneLeft,
    updateItemsLeft,
  };
});
