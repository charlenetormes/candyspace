<template>
    <div class="phone-container relative flex">
        <img
            class="w-[400px] select-none z-10 mock-phone"
            src="/svg/ip12.svg"
            v-bind="imgAttrs"
        />
        <slot />
    </div>
</template>

<script lang="ts" setup>
const imgAttrs = {
    draggable: "false",
    style: "-webkit-user-drag: none; user-drag: none;",
};
</script>

<style scoped>
@media (max-width: 500px) {
    .mock-phone {
        min-width: 375px;
    }
}
</style>
