<template>
    <v-carousel hide-delimiters show-arrows class="rounded-xl">
        <template v-slot:prev="{ props }">
            <v-btn density="compact" icon="mdi-plus" @click="props.onClick">{{
                "<"
            }}</v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn density="compact" icon="mdi-plus" @click="props.onClick">{{
                ">"
            }}</v-btn>
        </template>
        <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
            :src="image"
            cover
        ></v-carousel-item>
    </v-carousel>
</template>

<script lang="ts" setup>
defineProps({
    images: { type: Array as PropType<string[]>, default: [] },
});
</script>
