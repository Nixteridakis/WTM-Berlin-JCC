<template>
    <div>
        <h1>Theater name: {{this.$route.params.name}}</h1>
        <ul>
            <h2>Movies Playing:</h2>
            <p>{{ theaterMovies }}</p>
           <!-- <p v-for="name in NowPlaying.movies">{{ name.name }}</p> -->
        </ul>
        <router-link to="/">Back</router-link>
    </div>
</template>

<script>
export default {
    props: ['msg'],
    data(){
        return {
            theaterName: this.$route.params.name,
        }
    },
    computed:{
        theaterMovies(){
            const movies = this.$store.state.theaters.filter(function(theater){
                return theater.name ==  this.theaterName
            })
        }
    }
}
</script>


<style>

</style>
