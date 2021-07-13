<template>
  <div>
    <div class="pb-2 titulo">
      <img  src="@/assets/img/icon-handshake.png"/>
        Contratadas por Unidade
    </div>
      
    <v-data-table
      :headers="headers"
      :items="totalUnidade"
      sort-by="QuantidadePropostas"
      sort-desc
      disable-filtering
      hide-default-footer
      class="elevation-1"
      dense
      fixed-header
      disable-pagination
      height="200"
    >
      <template v-slot:[`item.ValorRepasse`]="{ item }">
      <span>{{ parseFloat(item.ValorRepasse).toLocaleString(undefined, {maximumFractionDigits: 0}) }}</span>
      </template>

    </v-data-table>
  </div>
</template>

<script>
    export default {

        data () {
        return {
            headers: [
            { text: 'Unidade', value: 'Sigla', class: "grey lighten-5 blue--text" },
            { text: 'Qtd', value: 'QuantidadePropostas', align: 'center', class: "grey lighten-5 blue--text" },
            { text: 'Valor', value: 'ValorRepasse', align: 'right', class: "grey lighten-5 blue--text" },
            ],

            totalUnidade: [],
            
        }
        },

        created(){
    
        //let totalUnidadePromisse = this.axios.get("http://localhost:8000/api/propostas/totalPorUnidade");
        let totalUnidadePromisse = this.axios.get("http://canais.caixa/c098452back/public/index.php/api/propostas/totalPorUnidade");

        totalUnidadePromisse
        .then(res => this.totalUnidade = res.data);

    	},

  }
</script>
