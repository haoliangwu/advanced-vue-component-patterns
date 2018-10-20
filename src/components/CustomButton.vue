<template>
  <button class="toggle-on" @click="onClick">
	  custom toggle button
  </button>
</template>
<script>
import { withToggleMixin } from "@/mixins/toggle";
export default {
  mixins: [withToggleMixin],
  methods: {
    onClick(){
      this.$emit('toggle', this.toggleComp.status.on)
      this.toggleComp.toggle()
    }
  }
};
</script>
<style>
</style>
