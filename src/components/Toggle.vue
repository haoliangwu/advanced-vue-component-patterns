<template>
  <div class="toggle">
	  <slot :status="status" :toggle="toggle" :reset="reset"></slot>
  </div>
</template>
<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false
    },
    onReset: {
      type: Function,
      default: () => this.on
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
        toggle: this.toggle,
        reset: this.reset
      }
    };
  },
  methods: {
    toggle() {
      this.status.on = !this.status.on;
      this.$emit("toggle", this.status.on);
    },
    reset(){
      Promise.resolve(this.onReset(this.status.on))
        .then(on => {
          this.status.on = on
          this.$emit("reset", this.status.on)
        })
    }
  },
  mounted() {
    this.status.on = this.on;
  }
};
</script>
<style>
</style>
