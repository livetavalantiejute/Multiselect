<script setup>
import { useItemsStore2 } from "../stores/items";
import SelectItem from "./common/SelectItem.vue";
import ButtonsSet from "./buttonsLists/ButtonsSet.vue";
import { storeToRefs } from "pinia";
import { useMovementStore } from "../stores/movement";
import { useItemsStoreLeft } from "../stores/itemsLeft";
import { useItemsStoreRight } from "../stores/itemsRight";

const itemsStore = useItemsStore2();
const { toggleSelected } = itemsStore;

const itemsStoreLeft = useItemsStoreLeft();
const { getSelectedLeft } = itemsStoreLeft;

const itemsStoreRight = useItemsStoreRight();
const { getSelectedRight } = itemsStoreRight;

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
      v-if="data.side == 'left'"
      v-for="item in data.items.value"
      :name="item.name"
      :key="item.id"
      @click="getSelectedLeft(item.id)"
      :class="{ selected: item.selected }"
    />
    <SelectItem
      v-if="data.side == 'right'"
      v-for="item in data.items.value"
      :name="item.name"
      :key="item.id"
      @click="getSelectedRight(item.id)"
      :class="{ selected: item.selected }"
    />
  </div>
  <ButtonsSet :data="data" />
</template>

<style scoped>
</style>
