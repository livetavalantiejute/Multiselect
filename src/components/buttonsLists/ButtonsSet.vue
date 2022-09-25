<script setup>
import ButtonSelectAll from "./ButtonSelectAll.vue";
import ButtonSelectNone from "./ButtonSelectNone.vue";

defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="w-full flex">
    <ButtonSelectAll :data="data"/>
    <ButtonSelectNone :data="data"/>
  </div>
</template>

<style scoped></style>
