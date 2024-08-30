<template>
    <div
        class="flex items-center gap-2 min-w-[100px] min-h-[30px] p-2 border-[1px] border-slate-300 rounded-[16px]"
    >
        <img class="w-5 h-5 mt-[-2px]" src="/svg/star.svg" />
        <span class="text-sm font-semibold">{{ rating }}</span>
        <span class="text-[12px] text-slate-400">({{ reviews }})</span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    rating: { type: Number, default: 4.7 },
    reviews: { type: Number, default: 109 },
});
</script>
