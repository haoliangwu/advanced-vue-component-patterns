<template>
  <div class="toggle-on" v-if="!toggleComp.status.on">
	  <slot></slot>
  </div>
</template>
<script>
import { withToggleMixin } from "@/mixins/toggle";

export default {
  mixins: [withToggleMixin]
};
</script>
<style>
</style>
