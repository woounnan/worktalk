<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">
          <span class="headline white--text">Sarah Mcbeal</span>

          <div class="flex-grow-1"></div>
          <v-btn dark icon>
            <v-icon>check</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>cancel</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(650) 555-1234</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>

              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(323) 555-6789</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>mcbeal@example.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Orlando, FL 79938</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-img
          src="https://picsum.photos/700?image=996"
          height="200px"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>


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