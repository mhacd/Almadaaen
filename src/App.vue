<template>
  <HeroBg>
    <div p-lg full>
      <div full bg-gray op-12 />
    </div>
  </HeroBg>
  <div bg-white p-xl>
    <TheCard />
  </div>
  <div my-lg />
  <div bg-white p-xl flex>
    <TheCard />
  </div>
  <div my-lg />
  <div bg-white p-xl flex>
    <TheCard />
    <TheCard />
    <TheCard />
  </div>
  <div bg-white p-xl flex>
    <div me-1>
      <TheCard />
    </div>
    <div me-1>
      <TheCard />
    </div>
    <div me-1>
      <TheCard />
    </div>
  </div>
  <div bg-white p-xl flex>
    <div flex-1 px-1>
      <TheCard />
    </div>
    <div flex-1 px-1>
      <TheCard />
    </div>
    <div flex-1 px-1>
      <TheCard />
    </div>
  </div>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
    <TheFooter />
  </main>
</template>
