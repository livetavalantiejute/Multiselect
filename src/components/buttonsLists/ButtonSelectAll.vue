<script setup>
import Button from "../common/Button.vue";

defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
    <Button @click="data.selectAll" :classType="'def'">
      <template #btnName> Select All </template>
    </Button>
</template>

<style scoped></style>
