<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div
    :class="$attrs.class"
    class="w-full border-b-2 border-slate-600 px-4 py-2"
  >
    <p class="text-center text-slate-600">
      {{ name }}
    </p>
  </div>
</template>

<style scoped>
.selected {
  background-color: rgb(209, 231, 238);
}
</style>
