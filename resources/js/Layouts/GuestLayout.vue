<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="relative flex justify-center items-center flex-col min-h-screen bg-center bg-[url('@/img/test.svg')] bg-gray-900 selection:bg-red-500 selection:text-white">
        <div class="flex justify-center">
            <Link href="/">
                <ApplicationLogo class="w-40 h-40 fill-current text-red-600" />
            </Link>
        </div>

        <div
            class="font-semibold focus:outline items-center focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            <slot />
        </div>
    </div>
</template>
<style>
.bg-dots-lighter {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.09)'/%3E%3C/svg%3E");
}

</style>