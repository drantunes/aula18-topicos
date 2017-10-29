<template>
  <div id="pagina2">
      <h1>O parâmetro enviad: {{ $route.params.parametro }}</h1>
      <router-link to="/pagina2/teste/sub-rota">Sub-Rota Link</router-link>

      <transition name="bounce">
        <router-view></router-view>
      </transition>

  </div>
</template>

<style>
.bounce-enter-active {
animation: bounce-in .5s;
}
.bounce-leave-active {
animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
    0% {
    transform: scale(0);
    }
    50% {
    transform: scale(1.5);
    }
    100% {
    transform: scale(1);
    }
}
</style>
