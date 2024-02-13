<template>
  <div>
    <h1>Liste des utilisateurs</h1>

    <table>

    <thead>
      <tr>
        <th>Entreprise</th>
        <th>Nom </th>
        <th>Prénom </th>
        <th>Email </th>
        <th>Status </th>
      </tr>
    </thead>

    <tbody>

      <tr v-for="client in clients" :key="client.id">
        <td> {{ client.raisonSociale }} </td>
        <td> {{ client.nom }} </td>
        <td> {{ client.prenom }} </td>
        <td> {{ client.email }} </td>
        <td>
          <!-- <button type="button" class="btn btn-primary actions" v-on:click="openModal(index)">Modifier</button>
          <button type="button" class="btn btn-danger actions" v-on:click="removeProduct(index)">
              <i class="fas fa-trash"></i> Supprimer
          </button> -->
        </td>
      </tr>

    </tbody>

    </table>


  </div>
</template>

<script>
import { mapState } from 'vuex';



export default {

  computed: {
    ...mapState(['clients']),
  },

}
</script>

<style scoped>
h1{
  margin: 150px auto;
}

</style>