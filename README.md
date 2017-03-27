# Infinite Scroller
A infinite scroll component for Vue.js.

## Usage

**basic**

```html
<infinite-scroller
  :on-load="onLoad"
  :distance="distance"
  :contents-color="'rgba(65, 132, 225, .8)'"
  :prompt-color="'rgba(234, 9, 127, .8)'"
  ref="your-ref-name"
  class="your-class-name"
>
</infinite-scroller>
```

```js
new Vue({
  el: '#app',
  data: {
    distance: 1,
    list: []
  },
  methods: {
    onLoad() {
      if (this.list.length > 10) {
        this.$refs.infiniteScroller.$emit('complete');
      } else {
        setTimeout(() => {
          this.list.push(/* more data for render */);
          this.$refs.infiniteScroller.$emit('loaded');
        }, 2000);
      }
    }
  }
});
```

**with slot**
```html
<infinite-scroller
  :on-load="onLoad"
  :distance="distance"
>
  <h1 slot="contents">
    {{ Render anything you wants in infinite-scroller block }}
  </h1>
  <p slot="no-more">
    {{ define data for prompt when no more }}
  </p>
</infinite-scroller>
```

## Props config

Name | Type | Default value | Description
---|:---:|:---:|---
`distance` | Number | `100` | The minimum distance between the bottom of the element and the bottom of the viewport before the infinite-scroller executed.
`on-load` | Function | -- | The method will be executed when the bottom of the viewport is reached.
`prompt-color` | String | `rgba(84, 78, 78, 0.8)` | The font color of prompt slot
`contents-color` | String | `rgba(84, 78, 78, 0.8)` | The font color of contents slot

## Slot
Name | Description
---|---
`no-more` | The contents will be show when infinite-scroller status is complete.
`contents` | The contents will be show in the infinite-scroller block.

## Events
Name | Description
---|---
infinite-scroller-loaded | Set infinite-scroller to `isLoading`, trigger spinner disappear
infinite-scroller-complete | Set infinite-scroller to `isComplete`, trigger prompt render
infinite-scroller-reset | Set infinite-scroller to initial status, which is not loading and not complete

## Contributing

```sh
# install dependencies
npm install

# remove dependencies and clear cache
npm run clear

# lint
npm run lint

# build
npm run build

# run unit tests
npm run test
```

## Changelog

## License

The MIT License (MIT)