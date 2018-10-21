<template>
  <div class="toggle">
	  <slot :status="status" :toggle="toggle"></slot>
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
  },
  data() {
    return {
      status: {
        on: false
      }
    };
  },
  provide() {
    return {
      toggleComp: {
        status: this.status,
        toggle: this.toggle
      }
    };
  },
  methods: {
    toggle() {
      this.status.on = !this.status.on;
      this.$emit("toggle", this.status.on);
    }
  },
  mounted() {
    this.status.on = this.on;
  }
};
</script>
<style>
</style>
