<template>
    <div class="bg-white md:min-h-screen min-h-0 sidebar p-6">
        <FormFilter />
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.sidebar {
    min-height: calc(100vh - 136px);
    @media (max-width: 768px) {
        min-height: 0;
    }
}
</style>
