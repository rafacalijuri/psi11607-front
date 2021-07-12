<template>
    
    <v-card :color="corCard">

        <v-card-title class="justify-center font-weight-bold titulo">
            {{titulo}}
        </v-card-title>

         <v-card-subtitle class="text-center font-weight-bold" :style="{color: corSubTitulo}">
             {{subtitulo}}
         </v-card-subtitle>

        <v-card-text  class="text--primary">

            <div class="text-center text-h3 font-weight-bold mb-3 quantidade">
                {{quantidade}}
            </div>
            <div class="text-center text-h5 valorRepasse">
                {{formataNumero(valor)}}
            </div>
        
        </v-card-text>

    </v-card>

</template>

<script>
    export default {

        props: ['corCard','corSubTitulo','titulo','subtitulo','quantidade','valor'],

        methods: {

            formataNumero(value){
                if (isNaN(parseFloat(value))) return "-"
                return parseFloat(value).toLocaleString(undefined, {maximumFractionDigits: 0});
            },

        }
    }
</script>

<style scoped>
    .titulo{
        font-size: 15pt;
        color: #336699
    }

    .valorRepasse{
        color: #949494;
    }

    .quantidade{
        color:#007792;
    }

</style>