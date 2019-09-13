<template>
    <div class="container">
        <div class="input-group col-md-3">
            <span class = "input-group-addon">
                PW
            </span>
            <input type="text" v-model="del_password" class="form-control col-md-2">
        </div>
        <div class="row col-md-6"> 
            <input class="btn btn-default col-md-3" @click="del_data" type="button" value="삭제">
            <input class="btn btn-default col-md-3" @click="$emit('close')" type="button" value="취소">
        </div>
    </div>
</template>
<script>
export default {
  data:function(){
      return {
          del_password:'',
      }
  },props : [
      'hot_table',
  ],methods : {
      del_data(){
          
          this.$emit('close')
      }
  }
}
</script>