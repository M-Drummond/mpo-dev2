
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()
</script>

<template><div class="p-4 w-full flex flex-row items-center bg-stone-950 justify-between border-b border-solid">
    <div class="flex flex-row items-center space-x-4">
      <RouterLink to="/" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 outline-none">Home</RouterLink>
      <RouterLink to="/dashboard" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 outline-none">Dashboard</RouterLink>
      <RouterLink to="/about" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 outline-none">About</RouterLink>
    </div>

    <div class="flex flex-row items-center space-x-2">
      
      <DropdownMenu>
        <DropdownMenuTrigger as-child>

          <Button variant="outline" class="md:w-12">

            <Icon icon="radix-icons:person" class="absolute h-[1.2rem] w-[1.2rem]   transition-all dark:rotate-0 dark:scale-100" /> 

            <!-- <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> -->
            <!-- <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> -->
            <span class="sr-only">View Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <RouterLink class="p-2 w-full block" to="/auth">Login</RouterLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DarkMode class="" />

    </div>

  </div>
</template>