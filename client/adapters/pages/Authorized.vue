<template>
  <div>
    hoge
    moga
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    code: String
  }
})
export default class Authorized extends Vue {
  code: string;

  mounted() {
    console.log(this.$route.query);
    console.log(this.display);
  }

  display() {
    console.log(this.code);
  }
}
</script>


