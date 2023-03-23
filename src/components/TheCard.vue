<script setup lang="ts">
const { title } = defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div inline-block bg-card rounded-33px min-h-340px px-xl class="  scale-85 2xl:scale-100">
    <div flex fc pt-50px pb-30px>
      <slot name="icon">
        <div text-43px i-carbon-sun color-black />
      </slot>
    </div>
    <div mx-auto text-center text-blue text-21px pb-30px font-bold>
      {{ title }}
    </div>
    <div max-w-214px mx-auto text-center text="#222" all-break-words class="md:text-12px lg:text-16px" :style="{ 'lineHeight': '27px', 'word-break': 'break-all' }">
      {{ text }}
    </div>
  </div>
</template>
