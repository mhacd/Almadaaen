<script setup lang="ts">
const { text, path } = defineProps<{
  text: string
  path: string
}>()

const active = $computed(() => {
  const route = useRoute()
  return route.path === path
})
</script>

<template>
  <div class="nav-link" :class="active ? 'active-nav-link' : ''">
    <RouterLink :to="path" color-white relative>
      <span block class="nav-link-text">
        {{ text }}
      </span>
      <span class="nav-link-line" w="100%" bottom-0 left-0 scale-x-108 absolute border-b-1 bg-white h-1px rounded />
    </RouterLink>
  </div>
</template>

<style lang="scss">
.nav-link {
  font-weight: 300;

  .nav-link-line {
    opacity: 0;
    transform: scaleX(0);
  }
  .nav-link-text {
    transition: all .1s ease-in;
  }
  &:hover{
    .nav-link-line {
      opacity: 1;
      transform: scaleX(0.7);
      animation-name: HoveredLine;
      animation-duration: 400ms;
      animation-timing-function: cubic-bezier(0.460, -0.255, 0.295, 1.375);
    }
    .nav-link-text {
    transform: translateY(-1px);
    scale: 1.01;
    transition: all .3s ease-in-out;
  }

  }
  &.active-nav-link {
    font-weight: 400;
    .nav-link-line {
      opacity: 1;
      transform: scaleX(1);
      animation-name: ShowLine;
      animation-duration: 400ms;
      animation-timing-function: cubic-bezier(0.460, -0.255, 0.295, 1.375);
    }
    .nav-link-text {
    animation-name: setTextToActive;
    animation-duration: 200ms;
    animation-timing-function: ease;
}
  }
}
@keyframes HoveredLine {
  from {
    transform: scaleX(0.0);
  }

  to {
    transform: scaleX(0.7);
  }
}

@keyframes ShowLine {
  from {
    transform: scaleX(0.5);
  }

  to {
    transform: scaleX(1);
  }
}
@keyframes setTextToActive {
  from {
    transform: scaleX(1);
  }

  75% {
    transform: scaleX(1.1);
  }

  to {
    transform: scaleX(1);

  }
}
</style>
