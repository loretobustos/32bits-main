import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [
      {codigo: '0001', nombre: 'Seriko', stock: 100, precio: 30000, color: 'red', destacado: true},
      {codigo: '0002', nombre: 'Fifa 21', stock: 100, precio: 25000, color: 'blue', destacado: false},
      {codigo: '0003', nombre: 'Gears of War 4', stock: 100, precio: 15000, color: 'green', destacado: true},
      {codigo: '0004', nombre: 'Mario Tennis Aces', stock: 100, precio: 35000, color: 'yellow', destacado: false},
      {codigo: '0005', nombre: 'Bloodborne', stock: 100, precio: 10000, color: 'blue', destacado: false},
      {codigo: '0006', nombre: 'Forza Horizon 4', stock: 100, precio: 20000, color: 'red', destacado: true}
    ],
    juegosVendidos: []
  },
  getters: {
    juegosDisponibles: state => {
      return state.juegos.length
    },
    stockTotal: state => {
      return state.juegos.reduce((a, b) => a + b.stock, 0)
    },
    juegosPorId: state => id => {
      let regExp = new RegExp(id)
      if (id == '') {
        return state.juegos
      } else {
        return state.juegos.filter(juego => regExp.test(juego.codigo))
      }
    },
    juegosConStock: state => {
      return state.juegos.filter(juego => juego.stock > 0)
    },
    juegosConStockDisponibles: (state, getters) => {
      return getters.juegosConStock.length
    },
    totalVentas: state => {
      return state.juegosVendidos.reduce((a, b) => a + b.precio, 0)
    },
    listaJuegosVendidos: state => {
      return state.juegosVendidos.map(juego => {
        let cantidad = state.juegosVendidos.filter(juegoVendido => juegoVendido.codigo == juego.codigo).length
        let subTotal = cantidad*juego.precio
        return {codigo: juego.codigo, nombre: juego.nombre, precio: juego.precio, cantidad: cantidad, subTotal: subTotal}
      })
    },
    setJuegosVendidos: (state, getters) => {
      return getters.listaJuegosVendidos.filter((juego, index) => {
        return getters.listaJuegosVendidos.map(j => j.codigo).indexOf(juego.codigo) === index
      })
    }
  },
  mutations: {
    procesarVenta: (state, juegoVendido) => {
      state.juegos.forEach(juego => {
        if (juego.codigo == juegoVendido.codigo && juego.stock > 0) juego.stock--
      })
    },
    registrarVenta: (state, juegoVendido) => {
      state.juegosVendidos.push({codigo: juegoVendido.codigo, nombre: juegoVendido.nombre, precio: juegoVendido.precio})
    }
  },
  actions: {
    async vender ({dispatch}, juegoVendido) {
      await dispatch('procesarVenta', juegoVendido)
              .then(() => alert('Venta procesada'))
              .catch(() => alert('La venta falló'))
      dispatch('registrarVenta', juegoVendido)
    },
    async procesarVenta ({commit}, juegoVendido) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('procesarVenta', juegoVendido)
          resolve()
        }, 1000)
      })
    },
    async registrarVenta ({commit}, juegoVendido) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('registrarVenta', juegoVendido)
          resolve()
        }, 1000)
      })
    }
  }
});

export default store;
