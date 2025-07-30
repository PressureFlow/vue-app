<template>
    <div>
        {{ technology.id }}

        <h1 class="text-2xl">{{ technology.title }}</h1>
    </div>

    <h1></h1>
</template>

<script setup>
    defineProps({
        technology: Object
    })
</script>

<style>

</style>