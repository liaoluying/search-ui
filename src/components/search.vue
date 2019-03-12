<template>
  <div>
    <div class="search">
      <i></i>
      <div class="s-bar">
        <form>
          <input v-model="keywords" type="text" placeholder="请输入要搜索的内容"/>
          <input type="submit"  value="Search" @click="searchEvent">
        </form>
      </div>
    </div>
    <div class="view-box">
      <ul>
        <li v-for="item in seachData" :key="item.id"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: '',
      searchData: []
    }
  },
  methods: {
    searchEvent() {
       this.$axios.post('https://xxx.xxx.com', {
        keywords: this.keywords
       }).then(res => {
            // 成功
            this.searchData = res.data.data
        }).catch(function (error) {
            // 失败
            console.log(error)
        })
    },
  }
}
</script>

<style lang="scss">
  
  @import '../style/search.css';

</style>
