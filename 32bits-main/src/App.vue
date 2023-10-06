<template>
  <div id="app">
    <div class="d-flex justify-content-center py-3">
      <img alt="logo" src="./assets/logo.png">
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-50 mx-auto">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'inicio'}">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'busqueda'}">Búsquedas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'venta'}">Ventas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'total'}">Total</router-link>
            </li>
          </div>
        </div>
      </div>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
