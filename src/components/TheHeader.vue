<script setup lang="ts">
import logo from '~/assets/logo.svg'
import saudiTree from '~/assets/saudi-tree.svg'
</script>

<template>
  <div p-xl bg-header>
    <div flex fb>
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
      <div w-230px text-center />
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
