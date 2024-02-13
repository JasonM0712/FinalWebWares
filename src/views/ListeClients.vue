<template>
  <div>
    <h1>Liste des utilisateurs</h1>

    <ul v-if="userData">
        <li v-for="(value, key) in userData" :key="key">
            {{ key }} : {{ value }}
        </li>
    </ul>
    <p v-else>Aucune donnée utilisateur trouvée dans le localStorage.</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // userData:,
        };
    },

    mounted() {
        const infosUserData = localStorage.getItem('userData');

        if(infosUserData) {
            this.userData = JSON.parse(infosUserData);
        } else {
            console.log('Aucune donnée utilisateur trouvée dans le localStorage.')
        }
    },

};
</script>

<style>

</style>