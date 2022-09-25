<script setup>
import Button from "../common/Button.vue";

defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="w-full flex">
    <Button @click="data.selectAll" :classType="'def'">
      <template #btnName>
        Select All
      </template>
    </Button>
    <Button :classType="'alt'" @click="data.selectNone">
      <template #btnName>
        Select None
      </template>
    </Button>
  </div>
</template>

<style scoped></style>
