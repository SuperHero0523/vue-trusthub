<template>
  <div v-if="fileInfoDetail">
    <div class="file-headline" spellcheck="false">
      <!--Image thumbnail-->
      <div v-if="fileInfoDetail.type == 'image'" class="image-preview">
        <img
          @dblclick="$openImageOnNewTab(fileInfoDetail.file_url)"
          :src="fileInfoDetail.thumbnail"
          :alt="fileInfoDetail.name"
        />
      </div>

      <!--File info-->
      <div class="flex">
        <div class="icon">
          <div class="icon-preview" @dblclick="getItemAction">
            <FontAwesomeIcon v-if="fileInfoDetail.type == 'folder'" icon="folder"></FontAwesomeIcon>
            <FontAwesomeIcon v-if="fileInfoDetail.type == 'file'" icon="file"></FontAwesomeIcon>
            <FontAwesomeIcon v-if="fileInfoDetail.type == 'image'" icon="file-image"></FontAwesomeIcon>
          </div>
        </div>
        <div class="file-info">
          <span ref="name" contenteditable="false" class="name">
            {{
            fileInfoDetail.name
            }}
          </span>
          <span class="mimetype">{{ fileInfoDetail.mimetype }}</span>
        </div>
      </div>
    </div>

    <!--Info list-->
    <ul class="list-info">
      <!--Filesize-->
      <li v-if="fileInfoDetail.filesize" class="list-info-item">
        <b>Size</b>
        <span>{{ fileInfoDetail.filesize }}</span>
      </li>

      <!--Latest change-->
      <li v-if="fileInfoDetail.created_at" class="list-info-item">
        <b>Created at</b>
        <span>{{ fileInfoDetail.created_at }}</span>
      </li>

      <!--Parent-->
      <li class="list-info-item">
        <b>Where</b>
        <span>
          {{
          fileInfoDetail.parent ? fileInfoDetail.parent.name : 'Home'
          }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { debounce } from 'lodash'

export default {
  name: 'FilesInfoPanel',
  computed: {
    ...mapGetters('filemanage', ['fileInfoDetail'])
  },
  methods: {
    getItemAction () {
      // Open image on new tab
      if (this.fileInfoDetail.type === 'image') {
        this.$openImageOnNewTab(this.fileInfoDetail.file_url)
      }

      // Download file
      if (this.fileInfoDetail.type === 'file') {
        this.$downloadFile(
          this.fileInfoDetail.file_url,
          `${this.fileInfoDetail.name}.${this.fileInfoDetail.mimetype}`
        )
      }

      // Open folder
      if (this.fileInfoDetail.type === 'folder') {
        // Todo: open folder
        console.log('Open folder')
      }
    },
    changeItemName: debounce(function (e) {
      // Prevent submit empty string
      if (e.target.innerText === '') return

      self.$store.dispatch('filemanage/changeItemName', {
        unique_id: self.fileInfoDetail.unique_id,
        type: self.fileInfoDetail.type,
        name: e.target.innerText
      })
    }, 300)
  }
}
</script>

<style scoped lang="scss">

.file-headline {
  background: $light_background;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;

  .image-preview {
    width: 100%;
    display: block;
    margin-bottom: 7px;

    img {
      border-radius: 4px;
      overflow: hidden;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .flex {
    display: flex;
    align-items: top;
  }

  .icon-preview {
    height: 42px;
    width: 42px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: white;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    outline: none;
    border: none;

    /deep/ svg {
      @include font-size(22);

      path {
        fill: $theme;
      }
    }

    &:hover {
      .icon path {
        fill: $theme;
      }
    }
  }

  .file-info {
    padding-left: 12px;
    width: 100%;
    word-break: break-all;

    .name {
      @include font-size(16);
      font-weight: 600;
    }

    .mimetype {
      @include font-size(14);
      font-weight: 600;
      color: $theme;
      display: block;
    }
  }
}

.list-info {
  padding-left: 12px;

  .list-info-item {
    display: block;
    padding-top: 20px;

    &:first-child {
      padding-top: 0;
    }

    b {
      display: block;
      @include font-size(13);
      color: $theme;
    }

    span {
      display: block;
      @include font-size(16);
      font-weight: bold;
    }
  }
}
</style>
