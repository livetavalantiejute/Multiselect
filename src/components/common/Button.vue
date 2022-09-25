<script setup>
import { twMerge } from "tailwind-merge";

const BtnStyles = twMerge("flex-1", "p-4", "text-white");

const defaultBtnClasses = twMerge(BtnStyles, "bg-blue-800");
const altBtnClasses = twMerge(BtnStyles, "bg-slate-600");

defineProps({
  classType: {
    type: String,
  },
  btnName: {
    type: String
  }
});
</script>

<template>
  <button :class="classType == 'def' ? defaultBtnClasses : altBtnClasses">
    <slot name="btnName"></slot>
  </button>
</template>

<style scoped></style>
