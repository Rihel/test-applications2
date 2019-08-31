<template>
  <div class="data-show-block">
    <div class="header-container" v-loading="headerLoading">
      <el-row>
        <el-col :span="8" class="module-num">
          <div class="card">
            <p>模块数</p>
            <p class="times">{{ headerData.moduleSum }}个模块</p>
          </div>
        </el-col>
        <el-col :span="8" class="module-num">
          <div class="card">
            <p>已用项目数</p>
            <p class="times">{{ headerData.projectSum }}个项目</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <p>使用数</p>
            <p class="times">{{ headerData.useSum }}次使用</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import StatisticsInfo from './statisticsInfo.json';

const getStatisticsInfo = () => {
  return new Promise((resolve) => {
    resolve(StatisticsInfo)
  })
}
export default {
  name: 'DataShow',
  data() {
    return {
      headerLoading: false,
      headerData: {}, // 头部统计数据
    };
  },
  mounted() {
    this.getHeaderInfo();
  },
  methods: {
    // 获取头部信息
    getHeaderInfo() {
      this.headerLoading = true;
      getStatisticsInfo()
        .then(res => {
          this.headerData = res.payload;
        })
        .finally(() => {
          this.headerLoading = false;
        });
    },
  },
}

</script>

<style lang="less">
.data-show-block {
  .header-container {
    padding: 20px;
    background: #fff;
    .module-num {
      position: relative;
      &::before {
        border-left: 0.2px solid #ebeef5;
        content: '';
        height: 100%;
        width: 1px;
        position: absolute;
        right: 0;
      }
    }
    .card {
      text-align: center;
      .times {
        font-size: 2em;
        color: black;
      }
    }
  }
}
</style>
