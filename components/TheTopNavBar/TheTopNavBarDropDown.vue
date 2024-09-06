<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>

            <Button variant="outline" class="md:w-12">

                <Icon icon="radix-icons:person"
                    class="absolute h-[1.2rem] w-[1.2rem]   transition-all dark:rotate-0 dark:scale-100" />

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

</template>