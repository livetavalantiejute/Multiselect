<script setup>
import { useItemsStoreLeft } from "../../stores/itemstestLeft";
import { useItemsStoreRight } from "../../stores/itemstestRight";
import { storeToRefs } from "pinia";

const itemsStoreLeft = useItemsStoreLeft();
const itemsStoreRight = useItemsStoreRight();

const { searchTermLeft } = storeToRefs(itemsStoreLeft);
const { updateItemsLeft } = itemsStoreLeft;
const { updateItemsRight } = itemsStoreRight;
const { searchTermRight } = storeToRefs(itemsStoreRight);

const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="border-b-2 border-slate-600 px-4 py-2">
    <input
      placeholder="Search"
      v-if="props.data.side == 'left'"
      v-model="searchTermLeft"
      @input="updateItemsLeft"
    />
    <input
      placeholder="Search"
      v-if="props.data.side == 'right'"
      v-model="searchTermRight"
      @input="updateItemsRight"
    />
  </div>
</template>

<style scoped></style>
