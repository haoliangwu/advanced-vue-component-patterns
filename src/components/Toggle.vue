<template>
  <div class="toggle">
	  <slot :status="controlledStatus" :toggle="toggle" :reset="reset"></slot>
  </div>
</template>
<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: undefined
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
        on: this.on
      }
    };
  },
  computed: {
    isOnControlled() {
      return this.on !== undefined;
    },
    controlledStatus() {
      return this.isOnControlled ? { on: this.on } : this.status;
    }
  },
  methods: {
    toggle() {
      if (this.isOnControlled) {
        this.$emit("toggle", !this.on);
      } else {
        this.status.on = !this.status.on;
        this.$emit("toggle", this.status.on);
      }
    },
    reset() {
      if (this.isOnControlled) {
        Promise.resolve(this.onReset(!this.on)).then(on => {
          this.$emit("reset", on);
        });
      } else {
        Promise.resolve(this.onReset(this.status.on)).then(on => {
          this.status.on = on || false;
          this.$emit("reset", this.status.on);
        });
      }
    }
  }
};
</script>
<style>
</style>
