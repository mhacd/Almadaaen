<script setup lang="ts">
const { text, active } = defineProps<{
  text: string
  active?: boolean
}>()
</script>

<template>
  <div>
    <div color-white relative :class="[active ? 'text-16px  font-medium ' : 'text-14px mt-1 ']">
      {{ text }}
      <span :class="active ? 'display-inline' : 'display-none'" w="100%" bottom-0 left-0 scale-x-108 absolute border-b-1 bg-white h-1px rounded />
    </div>
  </div>
</template>
