<script setup lang="ts">
import logo from '~/assets/logo.svg'
import saudiTree from '~/assets/saudi-tree.svg'
</script>

<template>
  <div px-xl bg-header h-79px class="2xl:h-" flex>
    <div flex fb w-full>
      <div flex flex-1 fi>
        <div me-39px>
          <img :src="logo" alt="">
        </div>
        <div w="100%" flex justify-around max-w-500px>
          <div>
            <Link path="/" text="Home" :active="true" />
          </div>
          <div>
            <Link path="/group-structure" text="GROUP STRUCTURE" />
          </div>
          <div>
            <Link path="/business-sectors" text="BUSINESS SECTORS" />
          </div>
        </div>
      </div>
      <div min-w-240px>
        <div layers full>
          <div a-layer>
            <div h-79px flex fcc>
              <div relative flex fcc>
                <div absolute flex fc>
                  <div pt-42px>
                    <div w-140px h-140px rounded-full bg-white op-50 />
                  </div>
                </div>
                <div absolute flex fc>
                  <div pt-42px>
                    <div w-170px h-170px rounded-full bg-white op-50 />
                  </div>
                </div>
                <div absolute flex fc>
                  <div pt-42px>
                    <div w-200px h-200px rounded-full bg-white op-50 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div a-layer bg-green>
            <div h-79px flex fcc>
              <div relative flex fcc>
                <div absolute flex fc>
                  <div pt-67px>
                    <Logo color="" :width="70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div r-layer bg-header>
            <div h-79px overflow-hidden flex fcc>
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
      <div flex flex-1 fi justify-end>
        <div w="100%" flex justify-around max-w-600px>
          <div>
            <Link path="/about-us" text="ABOUT US" />
          </div>
          <div>
            <Link path="/gallery" text="GALLERY" />
          </div>
          <div>
            <Link path="/careers" text="CAREERS" />
          </div>
          <div>
            <Link path="/contact-us" text="CONTACT US" />
          </div>
        </div>
        <div color-white me-29px relative>
          En
          <span absolute h-1px rounded w-full bottom-0 bg-white left-0 scale-x-120 />
        </div>
        <div>
          <img w-28px :src="saudiTree" alt="img">
        </div>
      </div>
    </div>
  </div>
</template>
