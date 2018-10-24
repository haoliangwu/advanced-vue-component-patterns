<template>
  <div class="toggle-on" v-if="!on">
	  <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
</style>
