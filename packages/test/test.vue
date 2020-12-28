<template>
    <div class="zm-test" :style="{backgroundColor: bgColor}"></div>
</template>

<script>
    export default {
        name: 'ZmTest',
        props: {
            bgColor: {
                type: String,
                default: "#ccc"
            }
        }
    }
</script>

<style lang="css" scoped>
    .zm-test {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        animation: zm-opacity 2s infinite linear;
    }
</style>