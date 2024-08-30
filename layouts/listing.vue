<template>
    <div>
        <LayoutsHeader />
        <div class="grid md:grid-cols-12 grid-cols-1">
            <div class="col-span-3">
                <LayoutsSidebar />
            </div>
            <div class="col-span-9">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
