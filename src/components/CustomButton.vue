<template>
  <div>
    <button class="toggle-on" @click="onClick">
	  custom toggle button
    </button>
    <input v-if="on" ref="input" type="text" placeholder="addtional messages">
  </div>
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
    focus() {
      /* comment out will result in error:
          Cannot read property 'focus' of undefined"
      */
      // this.$refs.input.focus()
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },
    onClick() {
      this.$emit("toggle", this.on);
      this.toggle();
    }
  }
};
</script>
<style>
</style>
