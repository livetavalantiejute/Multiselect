<script setup>
import Button from "./Button.vue";

defineProps({
  btnName: {
    type: String,
  },
});
</script>

<template>
  <Button class="m-2 rounded-md font-bold">
    <template #btnName>
      <slot name="btnName"></slot>
    </template>
  </Button>
</template>

<style scoped></style>
