<template>
  <div>
    <UserForm title="Débutez votre shopping !"
    paragraphe="Nos produits, vos envies."
    :formInscription="true" 
    @submit.prevent="enregistrerUtilisateur"/>
  </div>

</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  components: {
    UserForm,
  },

  methods: {
    enregistrerUtilisateur(utilisateur) {
      // localStorage.setItem('userData', JSON.stringify(utilisateur));
      console.log('Utilisateur enregistré !', utilisateur)
    }
  }

}
</script>

<style scoped>

</style>
