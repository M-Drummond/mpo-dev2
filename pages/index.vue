<template>
    <section class="w-full md:flex md:flex-row items-stretch">
        <div class="prose dark:prose-invert w-full p-8 ">
            <h1>Placeholder content is dull </h1>
            <h2>Vel non magnis neque penatibus hendrerit habitant </h2>
            <p>Per vitae placerat diam sagittis nascetur ad
                adipiscing nullam parturient a elit curae volutpat curabitur adipiscing. A vestibulum nisi non
                parturient vestibulum scelerisque hac adipiscing ante cubilia nascetur risus blandit sit at. Nulla
                sodales quis parturient a semper quam torquent consectetur et aliquam s</p>
            <h2>Vel non magnis neque penatibus hendrerit habitant </h2>
            <p>id a scelerisque condimentum adipiscing montes a mattis habitant ullamcorper a suspendisse.A
                himenaeos
                lobortis suspendisse interdum a vestibulum in dignissim suspendisse nibh parturient in eu inceptos
                integer massa consequat tincidunt sociis ac parturient a a.Mattis velit nec.</p>
        </div>
        <div class="w-full  min-h-32  ">



        </div>

    </section>

    <section id="sec_2" class="min-h-32 p-8">
        <div class="prose dark:prose-invert mx-auto py-24 ">
            <h1>We'll put some icons and some nice photos in amongst all this.</h1>
            <h2>Vel non magnis neque penatibus hendrerit habitant </h2>
            <p>Per vitae placerat diam sagittis nascetur ad
                adipiscing nullam parturient a elit curae volutpat curabitur adipiscing. A vestibulum nisi non
                parturient vestibulum scelerisque hac adipiscing ante cubilia nascetur risus blandit sit at. Nulla
                sodales quis parturient a semper quam torquent consectetur et aliquam s</p>
            <h2>Every other security/privacy org is big on padlocks and shield imagery.</h2>
        </div>
    </section>


    <div class="p-4 bg-black py-8 md:py-24  w-full min-h-12 mx-auto rounded-sm">
        <div class="prose dark:prose-invert mx-auto w-full mb-8 ">
            <h1 class="text-center text-white w-full">We make charts</h1>
        </div>
        <div class="lg:max-w-screen-lg mx-auto ">
            <BarChart :rounded-corners="4" :data="data" index="name" :categories="['total', 'predicted']"
                :y-formatter="(tick, i) => {
                    return typeof tick === 'number'
                        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                        : ''
                }" />
        </div>
    </div>


    <section class="w-full md:flex md:flex-row-reverse items-stretch">
        <div class="prose dark:prose-invert w-full p-8">
            <h1>adipiscing nullam parturient a elit curae volutpat curabitur adipiscing </h1>
            <h2>Vel non magnis neque penatibus hendrerit habitant </h2>
            <p>Per vitae placerat diam sagittis nascetur ad
                adipiscing nullam parturient a elit curae volutpat curabitur adipiscing. A vestibulum nisi non
                parturient vestibulum scelerisque hac adipiscing ante cubilia nascetur risus blandit sit at. Nulla
                sodales quis parturient a semper quam torquent consectetur et aliquam s</p>
            <h2>Vel non magnis neque penatibus hendrerit habitant </h2>
            <p>id a scelerisque condimentum adipiscing montes a mattis habitant ullamcorper a suspendisse.A
                himenaeos
                lobortis suspendisse interdum a vestibulum in dignissim suspendisse nibh parturient in eu inceptos
                integer massa consequat tincidunt sociis ac parturient a a.Mattis velit nec.</p>
        </div>
        <div class="w-full  min-h-32  ">

        </div>

    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default'
})

import { BarChart } from '@/components/ui/chart-bar'

const data = [
    { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
]

</script>