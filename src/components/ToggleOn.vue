<template>
  <div class="toggle-on" v-if="toggleComp.status.on">
	  <slot></slot>
  </div>
</template>
<script>
export default {
  inject: { toggleComp: "toggleComp" }
};
</script>
<style>
</style>
