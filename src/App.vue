<template>
  <div id="app">
    <toggle :on="true" @toggle="onToggle" :on-reset="onReset">
      <template slot-scope="{status, toggle, reset}">
        <toggle-button></toggle-button>
        <toggle-on>On</toggle-on>
        <toggle-off>Off</toggle-off>
        <button @click="reset">reset to false</button>
      </template>
    </toggle> 
    <br>
    <toggle :on="false" @toggle="onToggle" :on-reset="resetToTrue">
      <template slot-scope="{status, toggle, reset}">
        <toggle-button></toggle-button>
        <toggle-on>On</toggle-on>
        <toggle-off>Off</toggle-off>
        <button @click="reset">reset to true</button>
      </template>
    </toggle> 
    <br>
    <toggle :on="true" @toggle="onToggle" :on-reset="asyncResetToTrue">
      <template slot-scope="{status, toggle, reset}">
        <toggle-button></toggle-button>
        <toggle-on>On</toggle-on>
        <toggle-off>Off</toggle-off>
        <button @click="reset">async reset to true</button>
      </template>
    </toggle> 
  </div>
</template>

<script>
import Toggle from "./components/Toggle";
import ToggleButton from "./components/ToggleButton";
import ToggleOn from "./components/ToggleOn";
import ToggleOff from "./components/ToggleOff";

export default {
  name: "App",
  components: {
    Toggle,
    ToggleButton,
    ToggleOn,
    ToggleOff
  },
  methods: {
    onToggle(on) {
      if (on) this.$refs.customButton.focus();
      console.log("toggle", on);
    },
    onReset(on) {
      console.log("first reset toggle", on);
    },
    resetToTrue(on) {
      console.log("second second toggle", on);
      return true;
    },
    asyncResetToTrue(on) {
      console.log("third second toggle", on);
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 1500);
      });
    }
  }
};
</script>
<style>
/* Add application styles & imports to this file! */

*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Antic Slab", serif;
}
hr {
  width: 100%;
}
/*
toggle styles copied and modified from
https://codepen.io/mallendeo/pen/eLIiG
by Mauricio Allende (https://mallendeo.com/)
 */
.toggle-btn {
  display: inline-block;
  outline: 0;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  border: 1px solid #e8eae9;
}
.toggle-btn:focus::after,
.toggle-btn:active::after {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
    inset 0px 0px 0px 1.5px #9c9c9c;
}
.toggle-btn::after {
  left: 0;
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  border-radius: 2em;
  background: #fbfbfb;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    padding 0.3s ease, margin 0.3s ease;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
}
.toggle-btn.toggle-btn-on::after {
  left: 50%;
}
.toggle-btn.toggle-btn-on {
  background: #86d993;
}
.toggle-btn.toggle-btn-on:active {
  box-shadow: none;
}
.toggle-btn.toggle-btn-on:active::after {
  margin-left: -0.8em;
}
.toggle-btn:active::after {
  padding-right: 0.8em;
}
.toggle-input {
  display: none;
}
</style>
