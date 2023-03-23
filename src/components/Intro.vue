<script setup lang="ts">
const anime = ref(true)
function toggle() {
  anime.value = false
  setTimeout(() => {
    anime.value = true
  }, 500)
}
</script>

<template>
  <div w-screen fixed z-999 h-screen bg-cool op-100 @dblclick="toggle">
    <div v-if="anime" class="an-header" bg-header h-79px fixed z-9999 flex w-full fb>
      <!-- <div />
      <div>
        <div layers full translate-y-100px>
          <div r-layer bg-header>
            <div h-79px flex fcc>
              <div relative flex fcc>
                <div absolute flex fc>
                  <div pt-42px>
                    <div w-200px h-200px rounded-full bg="#2E2F37" :style="{ 'box-shadow': '0 -3px 21px #ffffff21' }" />
                  </div>
                </div>
                <div absolute flex fc>
                  <div pt-67px>
                    <Logo color="white" :width="70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div /> -->
    </div>
    <div v-if="anime" full flex fcc>
      <div h-100px w-100px>
        <div full flex fcc>
          <div layers full class="an-up-logo">
            <div a-layer>
              <div h-79px flex fcc>
                <div relative flex fcc>
                  <div absolute flex fc>
                    <div pt-42px>
                      <div class="cr cr--1" w-200px h-200px rounded-full bg-white op-50 />
                    </div>
                  </div>
                  <div absolute flex fc>
                    <div pt-42px>
                      <div class="cr cr--2" w-170px h-170px rounded-full bg-white op-50 />
                    </div>
                  </div>
                  <div absolute flex fc>
                    <div pt-42px>
                      <div class="cr cr--3" w-140px h-140px rounded-full bg-white op-50 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div a-layer>
              <div flex fcc>
                <div relative flex fcc>
                  <div absolute flex fc>
                    <div pt-120px>
                      <Logo color="" class="cr cr--logo" :width="70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cr {
  animation-name: scale-c;
  animation-duration: .5s;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  &--1 {
    animation-delay: .0s;
  }

  &--2 {
    animation-delay: .3s;
  }

  &--3 {
    animation-delay: .6s;
  }

  &--logo {
    animation-name: scale-logo;
    animation-timing-function: ease-in;
    animation-fill-mode: both;
    animation-duration: .6s;
    animation-delay: .9s;
  }
}

@keyframes scale-c {
  from {
    opacity: 0;
    scale: 0;
  }

  to {
    opacity: 50%;
    scale: 1;
  }
}

@keyframes scale-logo {
  from {
    opacity: 0;
    scale: 0;
  }

  to {
    opacity: 100%;
    scale: 1;
  }
}
</style>

<style lang="scss">
.an-header {
  animation-name: header;
  animation-duration: .5s;
  animation-delay: 1.4s;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
}
@keyframes header {
  from {
    transform: translateY(-79px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>

<style lang="scss">
.an-up-logos {
  animation-name: up;
  animation-duration: .5s;
  animation-delay: 1.9s;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
}

@keyframes up {
  to {
    transform: translateY(-40vh);
  }
}
</style>
