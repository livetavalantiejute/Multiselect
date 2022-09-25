import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useItemsStore2 = defineStore("items", () => {
  const itemsLetters = ["A", "B", "C", "D", "E"];
  const itemsArray = [];

  //creating initial Array of each item
  for (const [index, letter] of itemsLetters.entries()) {
    itemsArray.push({
      name: "Item " + letter,
      selected: false,
      id: index,
    });
  }

  //making initial Array reactive
  const items = ref(itemsArray);

  //filtering out of the initial array according to search term
  function filteringFunction(items, searchTerm) {
    const itemsFiltered = computed(() => {
      if (items.length != 0) {
        return items.value.filter((item) => {
          const name = item.name.toLowerCase();
          return name.indexOf(searchTerm.value.toLowerCase()) > -1;
        });
      }
    });
    return itemsFiltered;
  }

  const selected = ref([]);

  //toggle whether an item in filtered list is selected
  function toggleSelected(idToFind) {
    const item = items.value.find((obj) => obj.id === idToFind);
    
    if (item) {
      item.selected = !item.selected;
    }

    if (item.selected) {
      selected.value.push(item);
    } else {
      selected.value = selected.value.filter(function (selectedItem) {
        return item.id != selectedItem.id;
      });
    }
  }

  //select all filtered items
  function selectAll(itemsFiltered) {
    for (const item of itemsFiltered.value) {
      item.selected = true;
      selected.value.push(item)
    }

    const uniqueIds = []
    selected.value = selected.value.filter(element => {
      const isDuplicate = uniqueIds.includes(element.id);
    
      if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
      }
    
      return false;
    });

    console.log(selected.value)
  }

  //select no items
  function selectNone(itemsFiltered) {
    for (const item of itemsFiltered.value) {
      item.selected = false;
    }

    selected.value.splice(0,selected.value.length)
  }

  return {
    items,
    toggleSelected,
    selectAll,
    selectNone,
    filteringFunction,
    selected,
  };
});
