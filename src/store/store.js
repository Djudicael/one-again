import Vue from 'vue';
import Vuex from 'vuex';

let io = require('socket.io-client');
let socket=io('http://localhost:3001');
//let socket=io.set('origins', 'http://localhost:3001');

Vue.use(Vuex);

socket.on('connect',()=>{
socket.emit('getKanbanList',{
    token: 'test'
})
});

socket.on('kanbanProject',(kanbban)=>{
    console.log(kanbban);
    store.state.kanbanLists=kanbban;
})

export const store= new Vuex.Store({
    state:{
        modalKanbanAddList:false,
        modalKanbanAddCard:false,
        indexKanbanSelected:0,
        kanbanLists: [
            /*{
              listName: "test de nom de list",
              listCards: [
                {
                  taskName: "test de nom",
                  descriptif: " wow c'est géant mais c'est si bon",
                  activeman: "JDU",
                  corector: "DJU"
                }
              ]
            },
            {
              listName: "test de nom de list2",
              listCards: [
                {
                  taskName: "test de nom2",
                  descriptif: " je croise les doigts",
                  activeman: "JDU2",
                  corector: "DJU2"
                },
                {
                  taskName: "verification",
                  descriptif: " roulement de tambour",
                  activeman: "JDU3",
                  corector: "DJU32"
                }
              ]
            }*/
          ]
    },
    getters:{
        modalKanbanAddList: state=>{
            
            return state.modalKanbanAddList;
        },
        modalKanbanAddCard: state=>{
            
            return state.modalKanbanAddCard;
        }

    },
    
    mutations:{
        addSection: (state,payload)=>{
            state.modalKanbanAddList=false;
            var payloadClone = Object.assign({}, payload); 
            state.kanbanLists.push(payloadClone);
        },
        addCard:(state,payload)=>{
            state.modalKanbanAddCard=false;
            console.log(state.indexKanbanSelected)
            console.log(payload)
            var payloadClone = Object.assign({}, payload); 
            state.kanbanLists[state.indexKanbanSelected].listCards.push(payloadClone);
        }
    },
    
    actions:{
        addSection:(context,payload)=>{
            
            setTimeout(function(){
                context.commit('addSection', payload)
            }, 2000);
        },
        addCard:(context,payload)=>{
            
            setTimeout(function(){
                context.commit('addCard', payload)
            }, 2000);
        }
    }

});