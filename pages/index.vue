<template>
    <div class="p-4 bg-custom-orange-100"></div>
</template>

<script lang="ts" setup>
const router = useRouter();

onMounted(() => {
    router.push("/calculator");
});
</script>
