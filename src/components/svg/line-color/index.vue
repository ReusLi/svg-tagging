<template>
  <div class="c-draw-color-label" id="l1vcmYl6kDAl" style1="width: 15px; height: 33px; left: 224px; top: 224px;"
    :style="{left: `${x1}px`, top: `${y1}px`, width: `${width}px`, height: `${height}px`}"
  >
    <svg width="15" :height="w1" class="svg-panel isShow">
      <polyline class="line-main" :points="p1" fill="none" stroke-width="1" stroke="rgba(249,86,113,1)" stroke-dasharray="none" style="cursor: move;">
      </polyline>
      <polyline class="line-main" points="0.5,0.5, 15.5,15.5,
      15.5,33.5" fill="none" stroke="transparent" stroke-width="10" style="cursor: move;"></polyline>
    </svg>
    <div class="color-text"
      style="position: absolute; left: 15px; top: 27px; color: rgb(249, 86, 113); pointer-events: auto; cursor: move;">
      <div
        style="width: 8px; height: 8px; margin-top: -1px; background: rgb(235, 245, 244); border: 1px solid rgb(249, 86, 113);">
      </div>
      <span>#EBF5F4</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      w1: 0,
      p1: '',
      width: 0,
      height: 0,
      lineColor: 'rgba(249,86,113,1)'
    };
  },
  props: {
    startInfo: {
      required: true,
      type: Object
    },
    endInfo: {
      required: true,
      type: Object
    }
  },
  watch: {
    startInfo(newVal) {
      // this.
      console.log(newVal);
    },
    endInfo(endInfoData) {
      const x1 = this.startInfo.x,
        y1 = this.startInfo.y,
        x2 = endInfoData.x,
        y2 = endInfoData.y;
      this.width = Math.abs(x1 - x2);
      this.height = Math.abs(y1 - y2);

      this.x1 = Math.min(x1, x2);
      this.y1 = Math.min(y1, y2);
      this.x2 = Math.max(x1, x2);
      this.y2 = Math.max(y1, y2);

      this.w1 = Math.min(this.width, this.height);
      this.p1 = `0.5,0.5, ${this.w1 + 0.5} , ${this.w1 + 0.5}, ${this.w1 + 0.5}, ${this.height + 0.5}`
    }
  }
})
</script>