<template>
    <div>

        <div class="pb-2 titulo">
            <img src="@/assets/img/icon-chart.png"/>
            Evolução Contratação Mensal GEGOV
        </div>
        
        <apexchart v-if="dataReady" width="100%" type="line" :options="options" :series="series"></apexchart>
    
    </div>
</template>

<script>

import {pathApi} from '@/assets/js/variaveis.js';

export default {

    data(){
        return{

            dataReady: false,

            options: {
                chart: {
                    id: 'contratadas-mes',
                    animations: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false
                    },
                },
                tooltip:{
                    x:{
                        show:false
                    },
                }
            },
            series: [{
                name: 'Contratações',
                data: []
            }],
            
        
        };
    },

    created(){
        
        let dadosGraficoPromisse = this.axios.get(pathApi + "/propostas/contratadasMes");

        dadosGraficoPromisse
            .then(res => this.converteDadosGrafico(res.data));

    },

    methods:{

        converteDadosGrafico: function(data){

            var dadosGrafico = [];
            const meses = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];

            data.slice().reverse()
                .forEach(function(item) {

                    var mes = meses[parseInt(item.AnoMesContratada.substring(4)) - 1];
                
                    let dadoSerie = {
                        x : mes,
                        y : item.Contratadas
                    };
                    dadosGrafico.push(dadoSerie);
                });

            this.series[0].data = dadosGrafico;
            this.dataReady = true;
        }

    }

}
</script>
