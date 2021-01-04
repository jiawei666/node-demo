<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
            <router-link to="/me">me</router-link>
    </div>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped>
    #nav {
        padding: 30px;
    }
</style>