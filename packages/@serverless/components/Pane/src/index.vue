<template>
  <div class="pane">
    <div class="pane-head">
      <span class="pane-head__title">{{title}}</span>
      <div class="pane-head__operation">
        <el-button class="pane-head__expand"
          @click="toggleExpanded"
          v-if="expand"
          type="text">
          <template v-if="expanded">
            收起
            <i class="el-icon-arrow-up el-icon--right"></i>
          </template>
          <template v-else>
            展开
            <i class="el-icon-arrow-down el-icon--right"></i>
          </template>

        </el-button>
        <slot name="operation"></slot>
      </div>
    </div>

    <div class="pane-content"
      v-if="expanded"
      :class="{'pane-content__center': center}">
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: 'pane',
  props: {
    expand: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expanded: true
    }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded
    }
  }
}
</script>
<style lang="less">
@space: 20px;
.pane {
  background-color: #fff;

  &-head {
    border-bottom: 1px solid #e4e8f3;
    padding: @space;
    // height: 40px;
    // line-height: 40px;
    display: flex;
    justify-content: space-between;
    &__title {
      font-weight: bold;
      font-size: 14px;
    }
    &__operation {
    }
    &__expand {
      padding: 0;
      margin: 0;
    }
  }
  &-content {
    &__center {
      display: flex;
      justify-content: center;
    }
    padding: @space;
  }
}
</style>
