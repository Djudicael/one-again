<template>
  <div>
<draggable :list="kanbanLists" :options="{group:'kanbanLists'}">
<list-card v-for="(listofcard,index) in kanbanLists" :listofcard="listofcard" :index="index" :key="listofcard.id"></list-card>
 </draggable>


   <menu class="kanban-test">
        <div class="menu-setting">
            <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div class="menu-add">
            <i class="fa fa-plus" aria-hidden="true" @click="openModal"></i>
        </div>
    </menu>
     <modal-add-list></modal-add-list>
     <modal-add-card></modal-add-card>
    </div>
 
</template>

<script>
import listOfCard from "../components/kanban/listOfCard";
import draggable from "vuedraggable";
import ModalAddList from "../components/ModalAddList";
import ModalAddCard from "../components/ModalAddCard";
export default {
  name: "home",
  components: {
    draggable,
    "list-card": listOfCard,
    "modal-add-list": ModalAddList,
    "modal-add-card": ModalAddCard
  },
  computed: {
    kanbanLists() {
      return this.$store.state.kanbanLists;
    }
  },
  methods: {
    openModal: function() {
      this.$store.state.modalKanbanAddList = true;
    }
  }
};
</script>