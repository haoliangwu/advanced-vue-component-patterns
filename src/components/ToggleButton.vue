<template>
  <switch-comp :on="toggleComp.status.on" @click.native="onClick"></switch-comp>
</template>
<script>
import Switch from "./Switch";
import { withToggleMixin } from "@/mixins/toggle";

export default {
  mixins: [withToggleMixin],
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
