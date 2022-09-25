import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useItemsStore2 } from "./items";

export const useItemsStoreLeft = defineStore("itemsLeft", () => {
  const itemsStore = useItemsStore2();

  const { items } = storeToRefs(itemsStore);
  const { filteringFunction, selectAll, selectNone, toggleSelected, selectionWhere } = itemsStore;

  const searchTermLeft = ref("");
  const itemsFilteredLeft = ref([]); //filtered after search
  const initialLeft = ref([...items.value]); //initial and moved items
  const itemsSelectedLeft = ref([]);

  itemsFilteredLeft.value = filteringFunction(
    initialLeft,
    searchTermLeft
  ).value;

  function selectAllLeft() {
    selectAll(itemsFilteredLeft, itemsSelectedLeft);
    console.log(itemsSelectedLeft.value)
  }

  function selectNoneLeft() {
    selectNone(itemsFilteredLeft, itemsSelectedLeft);
  }

  function updateItemsLeft() {
    itemsFilteredLeft.value = filteringFunction(
      initialLeft,
      searchTermLeft
    ).value;
  }

  function getSelectedLeft(idToFind) {
    itemsSelectedLeft.value = toggleSelected(idToFind)
    selectionWhere(itemsSelectedLeft, initialLeft)
  } 

  return {
    initialLeft,
    itemsFilteredLeft,
    searchTermLeft,
    selectAllLeft,
    selectNoneLeft,
    updateItemsLeft,
    itemsSelectedLeft,
    getSelectedLeft
  };
});
