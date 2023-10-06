<template>
  <div>
    <div class="w-50 mx-auto px-4">
      <table class="table table-striped table-hover table-borderless shadow-sm mt-3">
        <thead class="table-light">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in setJuegosVendidos"  :key="juego.codigo">
            <td>{{juego.codigo}}</td>
            <td>{{juego.nombre}}</td>
            <td class="valor">{{juego.precio}}</td>
            <td>{{juego.cantidad}}</td>
            <td class="valor">{{juego.subTotal}}</td>
          </tr>
          <tr v-if="setJuegosVendidos.length == 0">
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>0</td>
            <td class="valor">0</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-dark">
            <th colspan="4">Total</th>
            <td class="valor">{{totalVentas}}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['totalVentas','setJuegosVendidos'])
    }
  }
</script>

<style>
  .valor::before {
    content: '$';
  }
</style>
