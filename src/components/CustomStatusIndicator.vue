<template>
  <h3>
	  current toggle status: {{ toggle.status.on ? 'on' : 'off' }}
  </h3>
</template>
<script>
import { withToggle } from "@/mixins/toggle";

export default {
  mixins: [withToggle("toggle")]
};
</script>
<style>
</style>
