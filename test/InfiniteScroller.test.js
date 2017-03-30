import { mount } from 'avoriaz';
import InfiniteScroller from '../src/components/InfiniteScroller.vue';
import { expect } from 'chai';
import { given } from 'mocha-testdata';

describe('InfiniteScroller', () => {
  describe('#render', () => {
    it('should renders a div with class infinite-scroller', () => {
      const wrapper = mount(InfiniteScroller);
      expect(wrapper.is('div')).to.equal(true);
      expect(wrapper.hasClass('infinite-scroller')).to.equal(true);
    });
  });
  
  describe('#methods', () => {
    it('should have scrollHandler function', () => {
      const wrapper = mount(InfiniteScroller);
      expect(typeof wrapper.vm.scrollHandler).to.equal('function');
    });
  });

  describe('#props', () => {
    given(
      ['distance', 40],
      ['onLoad', () => null],
      ['promptColor', 'rgba(4, 178, 78, 0.8)'],
      ['contentsColor', '#6c6c6']
    )
      .it('should accept prop:', (propName, propValue) => {
        const wrapper = mount(InfiniteScroller, {
          propsData: { propName: propValue }
        });
        expect(wrapper.propsData().propName).to.equal(propValue);
      });
  });

  describe('#events', () => {
    it('should listen infinite-scroller-loaded and disable isLoading when event was triggerd', () => {
      const wrapper = mount(InfiniteScroller);

      wrapper.setData({ isLoading: true });
      expect(wrapper.data().isLoading).to.equal(true);

      wrapper.vm.$emit('infinite-scroller-loaded');
      expect(wrapper.data().isLoading).to.equal(false);
    });
    it('should listen infinite-scroller-complete and enable isComplete when event triggerd', () => {
      const wrapper = mount(InfiniteScroller);

      expect(wrapper.data().isComplete).to.equal(false);

      wrapper.vm.$emit('infinite-scroller-complete');
      expect(wrapper.data().isComplete).to.equal(true);
    });
    it('should listen infinite-scroller-reset and disable both isLoading and isComplete when event triggerd', () => {
      const wrapper = mount(InfiniteScroller);

      wrapper.setData({ isLoading: true });
      wrapper.setData({ isComplete: true });
      expect(wrapper.data().isLoading).to.equal(true);
      expect(wrapper.data().isComplete).to.equal(true);
      
      wrapper.vm.$emit('infinite-scroller-reset');
      expect(wrapper.data().isLoading).to.equal(false);
      expect(wrapper.data().isComplete).to.equal(false);
    });
  });
});