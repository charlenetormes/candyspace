<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script lang="ts" setup>
onMounted(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
        "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap";
    document.head.appendChild(link);
});
</script>
