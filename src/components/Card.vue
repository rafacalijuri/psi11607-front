<template>
    
    <v-card color="#fbfbfb">

        <v-card-title class="font-weight-bold titulo" :style="{color: corTitulo}">
            {{titulo}}
        </v-card-title>

        <v-card-subtitle v-if="tipoCard == 'aprovado'" class="font-weight-bold text-h7 pt-1" style="color: #ff4949">
            <v-icon  color="#ff4949" small>mdi-cancel</v-icon>
                NÃO CONTRATADAS
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

        <div v-if="tipoCard == 'aprovado'">

            <div class="separador pb-4">
                <div></div>
            </div>

            <v-card-subtitle class="font-weight-bold text-h7 pt-1" style="color: green">
                <v-icon v-if="tipoCard == 'aprovado'" color="green" small>mdi-checkbox-marked-circle</v-icon>
                    CONTRATADAS
            </v-card-subtitle>

            <v-card-text  class="text--primary">

                <v-row dense>
                    <v-col cols="6">
                        <div class="text-center text-h3 font-weight-bold mb-3 quantidade">
                            {{quantidade2}}
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div class="text-right" style="font-size:15px; color: #336699">
                            Valor Repasse
                        </div>
                        <div class="text-right text-h6 valorRepasse">
                            R$ {{formataNumero(valor2)}}
                        </div>
                    </v-col>
                </v-row>
            
            </v-card-text>

            <div style="margin-top: -10px; padding: 10px" >
                <v-progress-linear

      color="green"
      :value="percentualContratado"
      height="6px"
      striped
    ></v-progress-linear>
            </div>

        </div>

    </v-card>

</template>

<script>
    export default {

        props: ['corTitulo','titulo','quantidade','valor','quantidade2','valor2','tipoCard','percentualContratado'],

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

    .separador{
        text-align:center;
        margin-top: -20px;
    }

    .separador div{
        display: inline-block;
        width: 90%;
        border-bottom: 1px dotted #b7b5b5;
    }

</style>