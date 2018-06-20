<template>
           <li class="item-card" data-id="1">
                <div class="item-card-header">
                    <h3 class="title item-task-name">{{card.taskName}}</h3>
                    <div class="item-card-delete">
                        <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="item-card-content">
                    <div class="item-card-description">{{card.descriptif}}</div>
                    <div class="item-card-trigram-action-man">{{card.activeman}}</div>
                    <div class="item-card-trigram-reviewer">{{card.corector}}</div>

                </div>
                <div class="item-card-footer">
                    <div class="item-card-modif">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div class="item-card-valid ">
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div class="item-card-not-valid">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>

            </li>

</template>

<script>
export default {
  name: 'HelloWorld',
   props:["card"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
