<script setup lang="ts">
import logo from '~/assets/logo.svg'
</script>

<template>
  <div p-xl bg-header>
    <div flex fb>
      <div flex flex-1 fi>
        <div me-39px>
          <img :src="logo" alt="">
        </div>
        <div w="100%" flex justify-around>
          <div>
            <Link text="Home" :active="true" />
          </div>
          <div>
            <Link text="GROUP STRUCTURE" />
          </div>
          <div>
            <Link text="BUSINESS SECTORS" />
          </div>
        </div>
      </div>
      <div w-230px text-center />
      <div flex flex-1 fi>
        <div w="100%" flex justify-around>
          <div>
            <Link text="ABOUT US" />
          </div>
          <div>
            <Link text="GALLERY" />
          </div>
          <div>
            <Link text="CAREERS" />
          </div>
          <div>
            <Link text="CONTACT US" />
          </div>
        </div>
        <div color-white me-29px relative>
          En
          <span absolute h-1px rounded w-full bottom-0 bg-white left-0 scale-x-120 />
        </div>
        <div color-white i-carbon-tree />
      </div>
    </div>
  </div>
</template>
