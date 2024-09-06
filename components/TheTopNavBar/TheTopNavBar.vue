<script setup lang="ts">
import DarkMode from '../TheTopNavBar/DarkMode.vue'

defineOptions({
  inheritAttrs: false
})

const colorMode = useColorMode()
</script>

<template>
  <div class="p-4 w-full flex flex-row items-center justify-between border-b border-solid">
    <div class="flex flex-row items-center space-x-2 md:space-x-4">
     
      <TheTopNavBarMenuLink :linkDestination="'/'" :linkText="'Home'" />
      <TheTopNavBarMenuLink :linkDestination="'/dashboard'" :linkText="'Dashboard'" />
      <TheTopNavBarMenuLink :linkDestination="'/about'" :linkText="'About'" />
      <TheTopNavBarMenuLink :linkDestination="'/news'" :linkText="'News'" />
  
    </div>

    <div class="flex flex-row items-center space-x-2">

      <TheTopNavBarDropDown />

      <DarkMode class="" />

    </div>

  </div>
</template>