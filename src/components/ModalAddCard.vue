<template>
<div v-if="modalKanbanAddCard" id="id01" class="modal">
  <span @click="closeModal" class="close" title="Close Modal">×</span>
  <form class="modal-content animate" >
    <div class="container">
      <label><b>Nom de la tache</b></label>
      <input type="text" placeholder="Enter the section name" name="taskName"  v-model="newCard.taskName" required>
      <label><b>Description</b></label>
      <input type="text" placeholder="Enter a desciption" name="section"  v-model="newCard.descriptif" required>
      <textarea name="" id="" cols="30" rows="10"placeholder="Enter a desciption"></textarea>
      <label><b>Client</b></label>
      <input type="text" placeholder="Enter the client" name="section"  v-model="newCard.client" required>
      <label><b>Jira</b></label>
      <input type="text" placeholder="Enter Jira reference" name="section"  v-model="newCard.jira" required>

     <!-- <label><b>Client</b></label>
      <input type="password" placeholder="Enter Password" name="psw" >

      <label><b>Jira</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" >
      <input type="checkbox" checked="checked"> Remember me
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>-->

      <div class="clearfix">
        <button type="button" @click="closeModal" class="cancelbtn">Cancel</button>
        <button  @click.prevent="addCard(newCard)" class="signupbtn">Creer section</button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
    data() {
    return {
      newCard:  {
                  taskName: '',
                  descriptif: '',
                  activeman: '',
                  corector: '',
                  client: '',
                  jira: ''
                }
    }
     
  },
   computed:{
    ...mapGetters([
        'modalKanbanAddCard'

    ])
  },
   methods:{
   
    closeModal:function(){
      this.$store.state.modalKanbanAddCard = false;
    },
     ...mapActions([
          'addCard'
      ])
  }
  
};
</script>

<style scoped>
/* Full-width input fields */
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,.signupbtn {float:left;width:50%}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* The Modal (background) */
.modal {
    /*display: none;*/ /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 35px;
    top: 15px;
    color: #000;
    font-size: 40px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
    .cancelbtn, .signupbtn {
       width: 100%;
    }
}
</style>
