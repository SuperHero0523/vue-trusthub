<template>
  <label label="file" class="button file-input">
    <FontAwesomeIcon class="icon" :icon="source"></FontAwesomeIcon>
    <input @change="emmitFiles" v-show="false" id="file" type="file" name="files[]" multiple />
  </label>
</template>

<script>
export default {
  name: 'ToolbarButtonUpload',
  props: ['source', 'action'],
  methods: {
    emmitFiles (e) {
      this.$uploadFiles(e.target.files)
    }
  }
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

  &:hover {
    /deep/ svg path {
      @include transition;
      fill: $theme;
    }
  }

  .icon {
    @include font-size(16);
  }
}
</style>
