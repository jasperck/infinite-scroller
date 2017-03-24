<template>
  <div class="infinite-scroller">
    <div class="loading-spinner">
      <div
        class="spinner"
        v-show="isLoading"
      >
      </div>
    </div>
    <div
      class="infinite-scroller-contents"
      :style="contentsStyle"
    >
      <slot name="contents"></slot>
    </div>
    <div
      class="infinite-scroller-prompt"
      v-show="!isLoading && isComplete"
      :style="promptStyle"
    >
      <slot name="no-more"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      isComplete: false,
    };
  },
  props: {
    distance: {
      type: Number,
      default: 100
    },
    onLoad: {
      type: Function
    },
    promptColor: {
      type: String,
      default: 'rgba(84, 78, 78, 0.8)'
    },
    contentsColor: {
      type: String,
      default: 'rgba(84, 78, 78, 0.8)'
    }
  },
  computed: {
    promptStyle () {
      return {
        color: this.promptColor
      };
    },
    contentsStyle () {
      return {
        color: this.contentsColor
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
    this.$on('infinite-scroller-loaded', () => {
      this.isLoading = false;
    });
    this.$on('infinite-scroller-complete', () => {
      this.isComplete = true;
      this.isLoading = false;
      window.removeEventListener('scroll', this.scrollHandler);
    });
    this.$on('infinite-scroller-reset', () => {
      this.isComplete = false;
      this.isLoading = false;
      window.addEventListener('scroll', this.scrollHandler);
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    _getCurrentDistance() {
      let scrollTop = window.scrollY;
      let viewHeight = window.innerHeight;
      let contentHeight = this.$parent.$el.clientHeight;
      return contentHeight - (scrollTop + viewHeight);
    },
    _triggerLoadMore() {
      this.onLoad.call();
    },
    scrollHandler() {
      let currentDistance = this._getCurrentDistance();
      if (currentDistance <= this.distance) {
        if (!this.isLoading && !this.isComplete) {
          this.isLoading = true;
          this._triggerLoadMore();
        }
      }
    }
  }
};
</script>
<style lang="scss">
$spCol: #000;

.infinite-scroller {
  clear: both;
  width: 100%;
  text-align: center;

  .spinner {
    margin: 0 auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px rgba($spCol, 0.25) solid;
    border-top: 4px rgba($spCol, 1) solid;
    animation: rotate .5s infinite linear;
  }

  .infinite-scroller-prompt {
    margin: inherit;
    font-size: 15px;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
