<template>
  <div class="note_page">
    <div class="note_list">笔记列表:</div>
    <ul class="list_tab">
      <li v-for="item in noteList" :key="item" class="list_foreach">
        <router-link :to="'/article/' + item">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {
      noteList: []
    };
  },
  components: {},
  mounted() {
    this.$axios
      .get("http://localhost:3000/note/getNoteList")
      .then(res => {
        this.noteList = res.data;
        console.log(this.noteList);
      })
      .catch(function(error) {
        console.log("借口调用失败");
      });
  }
};
</script>

<style>
.note_page{
  width: 85%;
  height: 100%;
  display:block;
  float: left;
  background-color: black;
  color: wheat;
}
.note_list{
  padding: 0px 10% 0px 10%;
  font-size: 32px;
  height: 15%;
  padding-top: 12%;
}
.list_tab{
  height: 65%;
  padding: 0px 10% 0px 10%;
  list-style:none;
}
.list_foreach{
  margin-top: 20px;
  font-size: 23px;
}
</style>