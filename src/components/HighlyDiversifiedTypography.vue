<script setup lang="ts">
const rawText = $ref('Al Modon Al Arabia Holding Company Ltd. has a vigorous business model based on operating right across the value chain to meet a range of customer requirements. The company has skills in design & build, maintenance testing, manufacturing, and eventual decommissioning of projects. Through the strong national presence of our building and civil engineering operations, we pursue business opportunities, mainly across Saudi Arabia. Our jobs often involve complex project management and are supported by our diversified subsidiaries providing high-end technical solutions. Also, through joint operations with our strategic partners we are able to take a long term operational and maintenance approach to certain projects.')
const text = $computed(() => `${rawText.slice(0, 385)} ...`)
</script>

<template>
  <div>
    <div text-white font-700 text-30px>
      Highly diversified
    </div>
    <div text-blue font-600 text-40px mb-4>
      Investment Sectors
    </div>
    <div max-w-400px text-white text-14px font-200>
      {{ text }}
    </div>
    <div mt-lg flex fi>
      <div text-blue font-300 text-22px>
        Business Sector
      </div>
      <div ms-lg>
        <div inline-block w-36px h-36px border-white rounded-full border-1>
          <div full flex fcc>
            <div text-white i-carbon-arrow-right />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
