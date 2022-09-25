<script setup>
import { useItemsStoreLeft } from "../../stores/itemsLeft";
import { useItemsStoreRight } from "../../stores/itemsRight";
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

const searchClassList = [
  "px-4",
  "py-2",
  "w-full"
]
</script>

<template>
  <div class="border-b-2 border-slate-600">
    <input
      placeholder="Search"
      v-if="props.data.side == 'left'"
      v-model="searchTermLeft"
      @input="updateItemsLeft"
      :class="searchClassList"
    />
    <input
      placeholder="Search"
      v-if="props.data.side == 'right'"
      v-model="searchTermRight"
      @input="updateItemsRight"
      :class="searchClassList"
    />
  </div>
</template>

<style scoped></style>
