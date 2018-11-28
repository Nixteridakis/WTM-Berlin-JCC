<template>
  <div id='theaters'>
    <header></header>
    <div id='theater-list'>
      <ul>
        <li v-for="theater in theaters" :style="{ backgroundImage: `url('${theater.image}')` }" class="theater">
          <router-link :to="`/theater/${theater.name}`"  exact>{{ theater.name }}</router-link>
        </li>
      
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  beforeCreate(){
    this.$store.dispatch('fetchTheaters')
  },
  computed:{
    theaters(){
      return this.$store.state.data
    }
  }
}
</script>


<style>
#theaters{
  max-width: 720px;
  height:auto;
  background:red;
  margin: 0 auto;
}
#theaters #theater-list ul {
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(3,minmax(200px,auto));
  grid-template-rows: repeat(3, minmax(200px,auto));
  grid-gap: 16px 20px;
  justify-content: center;
  padding: 20px;
}
#theaters #theater-list ul li {
  border: 1px solid black;
  text-align: center;
  cursor:pointer;
}
#theaters #theater-list ul li:hover {
  background:green;
  color:white;
}
#theaters #theater-list ul li.theater{
  background-size: 530px;
  background-repeat: no-repeat;
  background-position-x: center;
}
</style>
