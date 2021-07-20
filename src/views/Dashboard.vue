<template>
  
  <v-app data-app class="corpo" id="app">
    
    <v-card class="mx-auto my-3" width="800">
      <filtro-proposta
        :selectUnidades="selectUnidades"
        :carregaDadosCard="carregaDadosCard"
      >
      </filtro-proposta>

      <v-container>
        <v-row>

          <v-col cols="6">
         
            <v-col cols="12">
              <card-proposta
                corTitulo="#6cc77c"
                titulo="Aptas Análise Plano de Trabalho"
                tipoCard="apta"
                :quantidade="dadosCard.quantidadeAptas"
                :valor="dadosCard.valorRepasseAptas">
              </card-proposta>
            </v-col>

            <v-col cols="12">
              <card-proposta 
                corTitulo="#6aacfd"
                titulo="Plano de Trabalho Aprovado"
                tipoCard="aprovado"
                :quantidade="dadosCard.quantidadeProspeccao"
                :valor="dadosCard.valorRepasseProspeccao"
                :quantidade2="dadosCard.quantidadeContratadas"
                :valor2="dadosCard.valorRepasseContratadas"
                :percentualContratado="percentualContratado"
              >
              </card-proposta>
            </v-col>

          </v-col>

          <v-col cols="6">
              
              <v-col cols="12" style="height:220px; border-bottom:1px solid #a9c2e0">
                <tabela-unidades></tabela-unidades>
              </v-col>

               <v-col cols="12">
                 <grafico-contratacao></grafico-contratacao>
              </v-col>

          </v-col>

        </v-row>
      </v-container>


    </v-card>

  </v-app>

</template>

<script>
import Filtro from '../components/Filtro.vue';
import Card from '../components/Card.vue';
import DataTable from '../components/DataTable.vue';
import Grafico from '../components/Grafico.vue';
import {pathApi} from '@/assets/js/variaveis.js';
export default {
  data(){
    return{
      selectUnidades: [],
      dadosCard: [],
      percentualContratado: 50,
      
    };
  },
  components:{
    'card-proposta': Card,
    'filtro-proposta': Filtro,
    'tabela-unidades': DataTable,
    'grafico-contratacao': Grafico
  },
  created(){
    let unidadesPromisse = this.axios.get(pathApi + "/unidades");
    unidadesPromisse
      .then(unidades => {
          this.selectUnidades = this.geraDadosSelectUnidades(unidades.data);
      });
  
    this.carregaDadosCard(5669);
  },
  methods:{
      carregaDadosCard: function(unidadeId){
        let dadosCardPromisse = this.axios.get(pathApi + "/propostas/" + unidadeId + "/total");
        dadosCardPromisse
          .then(dadosCard => {
            this.dadosCard = dadosCard.data;
            if (dadosCard.data.quantidadeContratadas == 0){
              this.percentualContratado = 0;
            }else{
              this.percentualContratado = (dadosCard.data.quantidadeContratadas / (dadosCard.data.quantidadeContratadas + dadosCard.data.quantidadeProspeccao)) * 100;
            }
          });
      },
      
      geraDadosSelectUnidades: function(unidades){
        var select = [];
        for (var i = 0; i < unidades.length; i++) {
          
          let opt = {
            value : unidades[i].UnidadeId,
            text : unidades[i].UnidadeId + " - " + unidades[i].Sigla
          };
          
          select.push(opt);
        }
        return select;
      }
    }
}
</script>

<style>
  .titulo{
    color: #ffb100;
    font-weight: 400;
  }
</style>