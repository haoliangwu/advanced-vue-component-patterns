<template>
  <div class="toggle">
	  <input class="toggle-input" type="checkbox" />
	  <button class="toggle-btn" :class="[className, {'toggle-btn-on': on, 'toggle-btn-off': !on}]" :aria-expanded="on"></button>
  </div>
</template>
<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false
    },
    className: String
  }
}
</script>
<style>

</style>

