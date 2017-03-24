import InfiniteScroller from 'src/components/InfiniteScroller.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('infinite-scroller', InfiniteScroller);
}

export default InfiniteScroller;
