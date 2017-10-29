<template>
    <div>
        <md-button class="md-raised md-primary" @click="count()">Likes: {{ counter }}</md-button>
        <div class="botao">sdasda</div>
    </div>
</template>

<script>
    export default {
	    data: () => ({
            counter: 0
        }),
        methods:{
		count() {
			this.counter += 1;
			this.$emit( 'countou', this.counter );
		}
	}
}
</script>
<style scoped lang="scss">
    $cor: red;
    .botao {
    	border: 2px solid orange;
    	background: $cor;
        color: black;
    	font-size: 16px;
    	border-radius: 5px;
        padding: 30px;
    }
</style>
