<template>
  <h3>
	  current toggle status: {{ on ? 'on' : 'off' }}
  </h3>
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
