<template>
  <button class="button" :title="action">
    <FontAwesomeIcon class="icon" :icon="source"></FontAwesomeIcon>
  </button>
</template>

<script>
export default {
  name: 'ToolbarButton',
  props: ['source', 'action']
}
</script>

<style scoped lang="scss">

.button {
  height: 42px;
  width: 42px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: $light_background;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  border: none;

  .icon {
    @include font-size(22);
  }

  &:hover {
    /deep/ svg path {
      @include transition;
      fill: $theme;
    }
  }

  &.active {
    /deep/ svg path {
      fill: $theme;
    }
  }
}
</style>
