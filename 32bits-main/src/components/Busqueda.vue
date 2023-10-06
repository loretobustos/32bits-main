<template>
    <div>
      <div class="w-50 mx-auto px-3">
        <div class="input w-50 my-3">
          <i class="fas fa-search"></i>
          <input v-model="id" type="text" class="form-control">
        </div>
        <div class="">
          <h5>Cantidad de juegos disponibles: {{juegosDisponibles}}</h5>
          <h5>Stock total: {{stockTotal}}</h5>
        </div>
        <lista :listaJuegos="juegosPorId"/>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Lista from './Lista'

export default {
  components: {
    Lista
  },
  data() {
    return {
      id: ''
    }
  },
  computed: {
    ...mapGetters([
      'juegosDisponibles',
      'stockTotal'
    ]),
    juegosPorId() {
      return this.$store.getters.juegosPorId(this.id)
    }
  }
}
</script>

<style scoped>
  .input {
    display: flex;
    align-items: center;
    position: relative;
  }
  i {
    position: absolute;
    right: 0.75em;
    color: lightgray;
  }
</style>
