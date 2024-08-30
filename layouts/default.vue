<template>
    <div>
        <LayoutsHeader />
        <slot></slot>
    </div>
</template>

<style scoped>
/* Add your styles here */
header {
    color: white;
    padding: 1rem;
}

footer {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
}
</style>
