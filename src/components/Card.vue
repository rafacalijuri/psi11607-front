<template>
    
    <v-card color="#fbfbfb">

        <v-card-title class="font-weight-bold titulo" :style="{color: corTitulo}">
            {{titulo}}
        </v-card-title>

         <v-card-subtitle class="font-weight-bold text-h7" :style="{color: corSubTitulo}">
             <v-icon v-if="subtitulo == 'CONTRATADAS'" color="green" small>mdi-checkbox-marked-circle</v-icon>
             <v-icon v-if="subtitulo == 'NÃO CONTRATADAS'" color="#ff4949" small>mdi-cancel</v-icon>
             {{subtitulo}}
         </v-card-subtitle>

        <v-card-text  class="text--primary">

             <v-row dense>
                 <v-col cols="6">
            <div class="text-center text-h3 font-weight-bold mb-3 quantidade">
                {{quantidade}}
            </div>
                 </v-col>
                 <v-col cols="6">
                <div class="text-right" style="font-size:15px; color: #336699">
                    Valor Repasse
                </div>
            <div class="text-right text-h6 valorRepasse">
                R$ {{formataNumero(valor)}}
            </div>
                 </v-col>
             </v-row>
        
        </v-card-text>

    </v-card>

</template>

<script>
    export default {

        props: ['corTitulo','corSubTitulo','titulo','subtitulo','quantidade','valor'],

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