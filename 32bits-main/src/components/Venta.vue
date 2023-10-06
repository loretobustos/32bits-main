<template>
  <div class="px-4">
    <div class="w-50 mx-auto mt-3">
      <h5>Cantidad de juegos con stock: {{juegosConStockDisponibles}}</h5>
    </div>
    <div class="w-50 mx-auto">
      <table class="table table-striped table-hover table-borderless shadow-sm mt-3">
        <thead class="table-dark">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th colspan="2">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegosConStock"  :key="juego.codigo">
            <td>{{juego.codigo}}</td>
            <td>{{juego.nombre}}</td>
            <td>{{juego.stock}}</td>
            <td class="valor">{{juego.precio}}</td>
            <td><button type="button" class="btn btn-primary w-100" @click="vender(juego)">Vender</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'juegosConStock',
        'juegosConStockDisponibles'
      ])
    },
    methods: {
      ...mapActions(['vender'])
    }
  }
</script>
