<template>
  <switch-comp :on="toggleComp.status.on" @click.native="onClick"></switch-comp>
</template>
<script>
import Switch from "./Switch";

export default {
  inject: { toggleComp: "toggleComp" },
  methods: {
    onClick() {
      this.toggleComp.toggle();
    }
  },
  components: {
    SwitchComp: Switch
  }
};
</script>
<style>
</style>
