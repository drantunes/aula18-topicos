<template>
  <div>
      <h1>Esta é a: {{ titulo }}</h1>
      <md-switch v-model="teste" id="my-test2" name="my-test2" class="md-warn" @change="funcao()">Teste</md-switch>

      valor: {{ teste }}
  </div>
</template>
<script>
export default {
  name: "pagina1",
  data: () => ({
      titulo: "Pagina 1",
      teste: true
  }),
  methods: {
      funcao() {
          console.log("asdad");
      }
  }
}
</script>
