<template>
    <div>
        <header>
            <!-- Your header content -->
            <h1>My Nuxt App</h1>
        </header>

        <main>
            <!-- This is where page content will be injected -->
            <NuxtPage />
        </main>

        <footer>
            <!-- Your footer content -->
            <p>© 2024 My Nuxt App</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
// Add any setup code here if needed
</script>

<style scoped>
/* Add your styles here */
header {
    background-color: #333;
    color: white;
    padding: 1rem;
}

footer {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
}
</style>
