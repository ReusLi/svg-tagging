<template>
  <div class="c-draw-rect " id="-IdLd6zF1d" style="cursor: auto;"  :style="{left: `${x1}px`, top: `${y1}px`, width: `${width}px`, height: `${height}px`}">
    <svg :width="width" :height="height" class="svg-panel" style="top: 0; left: 0;">
      <rect x="1" y="1" :width="width" :height="height" stroke-width="1" stroke-dasharray="none" class="line-rect"
        fill="rgba(249,86,113,0.5)" style="pointer-events: auto; cursor: move;"></rect>
      <rect x="1" y="1" :width="width" :height="height" stroke="rgba(0,0,0,0)" stroke-width="20" class="line-rect" fill="none"
        style="pointer-events: auto; cursor: move;"></rect>
      <!-- 竖向的长直线 -->
      <line x1="-5.5" y1="0.5" x2="-5.5" :y2="height + 0.5" :stroke="lineColor" stroke-width="1"></line>
      <!-- 竖向的上直线 -->
      <line x1="-8" y1="0.5" x2="-3" y2="0.5" :stroke="lineColor" stroke-width="1"></line>
      <!-- 竖向的下直线 -->
      <line x1="-8" :y1="height + 0.5" x2="-3" :y2="height + 0.5" :stroke="lineColor" stroke-width="1"></line>
      <!-- 横向的长直线 -->
      <line x1="0.5" y1="-5.5" :x2="width + 0.5" y2="-5.5" :stroke="lineColor" stroke-width="1"></line>
      <!-- 横向的左直线 -->
      <line x1="0.5" y1="-8" x2="0.5" y2="-3" :stroke="lineColor" stroke-width="1"></line>
      <!-- 横向的右直线 -->
      <line :x1="width + 0.5" y1="-8" :x2="width + 0.5" y2="-3" :stroke="lineColor" stroke-width="1"></line>
      <!-- 横向的长度文本 -->
      <text :x="width / 2" y="-10"
        :fill="lineColor" class="region-text"
        style="pointer-events: auto; cursor: move; dominant-baseline: text-after-edge; text-anchor: middle;">
        {{width}}px
      </text>
      <!-- 竖向的长度文本 -->
      <text x="-50" :y="height / 2" :fill="lineColor" class="region-text"
        style="pointer-events: auto; cursor: move;">
        {{height}} px
      </text>
    </svg>
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
    }
  }
})
</script>