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
    <table>
      <thead>
          <tr>
            <th>用户名</th>
            <th>邮箱</th>
            <th>密码</th>
            <th>住址</th>
            <th>来源</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>{{item.zip}}</td>
            <td>{{item.address}}</td>
            <td>{{item.province}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: '',
      searchData: [
        {
        email:"1234@qqq.com",
        psw:"45678",
        soce:"taobao"
        },
      ],
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
      }]
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
table{
  width: 60%;
  margin:0;
  padding:0;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
  color: #fff;
  thead{
    tr{
      padding: 5px;
      th{
        padding: 10px;
        text-align: left;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 10px;
        text-align: left;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  table {
    border: 0;
  }
  table thead {
    display: none;
  }
  table tr {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #ddd;
  }
  table td {
    display: block;
    text-align: right;
    font-size: 13px;
    border-bottom: 1px dotted #ccc;
  }
  table td:last-child {
    border-bottom: 0;
  }
  table td:before {
    content: attr(data-label);
    float: left;
    text-transform: uppercase;
    font-weight: bold;
  }
}
// .viewbox{
//   .el-table,.el-table__expanded-cell{
//     background-color: rgba(255, 255, 255, 0.1);
//     margin-left: 10%;
//   }
// }
</style>
