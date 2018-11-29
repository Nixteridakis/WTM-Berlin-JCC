<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
    beforeCreate(){
    this.$store.dispatch('fetchTheaters')
  }
}
</script>


<style lang="scss">
</style>
