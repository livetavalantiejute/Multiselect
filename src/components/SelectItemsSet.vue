<script setup>
import { useItemsStore2 } from "../stores/itemstest";
import SelectItem from "./common/SelectItem.vue";
import ButtonsSet from "./buttonsLists/ButtonsSet.vue";

const itemsStore = useItemsStore2();
const { toggleSelected } = itemsStore;

defineProps({
  side: {
    type: String,
  },
  data: {
    type: Object,
  },
  searchTerm: {
    type: String,
  },
});
</script>

<template>
  <div class="items-set flex flex-col min-h-[500px]">
    <SelectItem
      v-for="item in data.items.value"
      :name="item.name"
      :key="item.id"
      @click="toggleSelected(item.id)"
      :class="{ selected: item.selected }"
    />
  </div>
  <ButtonsSet :data="data" />
</template>

<style scoped>
</style>
