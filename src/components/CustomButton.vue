<template>
  <button class="toggle-on" @click="onClick">
	  custom toggle button
  </button>
</template>
<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false
    },
    toggle: Function
  },
  methods: {
    onClick() {
      this.$emit("toggle", this.on);
      this.toggle();
    }
  }
};
</script>
<style>
</style>
