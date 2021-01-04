<template>
  <div class="about">
    <h1>my name is Jiawei</h1>

    <button @click="goBack">go back</button>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'me',
    methods: {
      goBack() {
        this.$router.push('/');
      }
    }
  }
</script>
