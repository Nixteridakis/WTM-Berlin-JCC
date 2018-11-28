<template>
    <div>
        <h1>Theater name: {{this.$route.params.name}}</h1>
        <ul>
            <h2>Movies Playing:</h2>
            <li v-for="movie in movies">
                {{ this.store.state}}
            </li>
        </ul>
        <router-link to="/">Back</router-link>
    </div>
</template>

<script>
export default {
}
</script>


<style>

</style>
