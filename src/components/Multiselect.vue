<script setup>
import Search from "./common/Search.vue";
import SelectItemsSet from "./SelectItemsSet.vue";

defineProps({
  data: {
    type: Object,
  },
});

</script>

<template>
  <div class="flex-1 border-2 border-slate-600">
    <Search :data="data" />
    <SelectItemsSet :data="data"/>
  </div>
</template>

<style scoped></style>
