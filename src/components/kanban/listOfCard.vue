<template>
   <ol class="kanban To-do">
    
            <div class="kanban__title">
                <h2>
                    <i class="material-icons">report_problem</i> {{listofcard.listName}}</h2>
            </div>
            <div class="actions">
                <button>  <i class="fa fa-bars" aria-hidden="true"></i></button>
                <button @click.prevent="openModal(index)" class="addbutt">
                        <i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            
<draggable :list="listofcard.listCards" :options="{group:'listofcard.listCards'}">
    <card v-for="card in listofcard.listCards" :card="card" :key="card.id"></card>
</draggable>
        </ol>
</template>

<script>

import Card from "./Card";
import draggable from 'vuedraggable';
export default {
  name: 'HelloWorld',
   props:["listofcard","index"],
    components: { draggable,"card": Card },
    
  methods: {
    openModal: function(index) {
      this.$store.state.modalKanbanAddCard = true;
       this.$store.state.indexKanbanSelected=index;
             

    }
  }
  
}
</script>

 

