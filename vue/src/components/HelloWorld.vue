<template src="./HelloWorld.html"></template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data: function () {
        return {
            env:process.env.NODE_ENV
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./HelloWorld.css"></style>
