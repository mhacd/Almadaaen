<template>
  <HeroLayout />
  <div bg-white p-xl>
    <WhoWeAreTypography />
  </div>
  <div bg-white p-xl>
    <TheCard />
  </div>
  <div bg-white p-xl>
    <TheImageCard />
  </div>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
    <TheFooter />
  </main>
</template>
