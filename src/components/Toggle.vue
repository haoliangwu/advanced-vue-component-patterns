<template>
  <switch-comp :on="checked" @click.native="onClick"></switch-comp>
</template>
<script>
import Switch from "./Switch";

export default {
  props: {
    on: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      checked: false
    }
  },
  components: {
    SwitchComp: Switch
  },
  methods: {
    onClick() {
      this.checked = !this.checked
      this.$emit("toggled", this.checked);
    }
  },
  mounted(){
    this.checked = this.on
  }
};
</script>
<style>
</style>
