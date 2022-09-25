<script setup>
import { twMerge } from "tailwind-merge";

const BtnStyles = twMerge("flex-1", "p-4", "text-white");

const defaultBtnClasses = twMerge(BtnStyles, "bg-blue-800");
const altBtnClasses = twMerge(BtnStyles, "bg-slate-600");

const props = defineProps({
  classType: {
    type: String,
  },
  btnName: {
    type: String
  },
  disabled: {
    type: Boolean
  }
});
</script>

<template>
  <button :class="disabled ? altBtnClasses : defaultBtnClasses" :disabled="disabled">
    <slot name="btnName"></slot>
  </button>
</template>

<style scoped></style>
