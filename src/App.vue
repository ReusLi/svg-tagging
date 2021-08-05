<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <lineColorCom :startInfo="startInfo" :endInfo="endInfo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { listener } from './event';
import rectCom from './components/svg/rect/index.vue'
import lineColorCom from './components/svg/line-color/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    rectCom,
    lineColorCom
  },
  data() {
    return {
      startInfo: {
        x: 0,
        y: 0
      } as object,
      endInfo: {
        x: 0,
        y: 0
      } as object
    }
  },
  created() {
    listener.listenDom(document, {
      mouseDownCallback: this.mouseDownCallback,
      mouseMoveCallback: this.mouseMoveCallback,
      mouseUpCallback: this.mouseUpCallback
    });
  },
  methods: {
    mouseDownCallback(data: object) {
      this.startInfo = data;
    },
    mouseMoveCallback(data: object) {
      this.endInfo = data;
    },
    mouseUpCallback(data: object) {
      this.endInfo = data;
    }
  }
})
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body *,
  html * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .c-draw-rect,
  .c-draw-size-label,
  .c-draw-color-label,
  .c-draw-line,
  svg {
    position: absolute;
  }

  .svg-panel {
    overflow: visible;
  }

  .region-text {
    font-size: 12px;
  }

  .c-draw-size-label>svg {
    position: absolute;
    margin: auto;
    overflow: visible;
    min-height: 2px;
    min-width: 2px;
    pointer-events: none;
  }

  .c-draw-size-label {
    font-size: 12px;
  }

  .c-draw-color-label .color-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: 5px;
  }

  .c-text-editor {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    line-height: 1.5;
  }

  .c-text-editor .read-only-div.move {
    cursor: move !important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    caret-color: transparent;
  }

  .c-text-editor .read-only-div {
    pointer-events: auto;
    position: absolute;
    padding: 5px;
    border: 1px solid transparent;
  }
</style>
