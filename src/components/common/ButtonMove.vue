<script setup>
import Button from "./Button.vue";

defineProps({
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <Button class="m-2 rounded-md font-bold" :disabled="disabled">
    <template #btnName>
      <slot name="btnName"></slot>
    </template>
  </Button>
</template>

<style scoped></style>
