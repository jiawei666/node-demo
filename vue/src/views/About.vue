<template>
  <myMenu/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import myMenu from './menu.vue'

  export default {
    name: 'about',
    components: {
      myMenu
    }
  }
</script>