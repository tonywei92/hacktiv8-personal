<template>
  <div>
    <div>
      <button
        @click="loadData"
        class="rounded border-indigo-500 font-bold text-white bg-blue-500 px-4 py-2"
      >Refresh</button>
    </div>
    {{this.messageUp}}
    <div class="flex justify-center">
      <div class="w-4/12">
        <card-container>
          <em v-if="articles === null">Data not loaded</em>
          <ul v-if="articles !==null">
            <card-item v-for="(article,i) in articles" :key="i" @selectedArticle="selectArticle" :article="article" :idx="i" :selectedarticleindex="selectedArticleIndex"></card-item>
          </ul>
        </card-container>
      </div>
      <!-- detail article -->
      <div class="w-5/12 pl-8">
        <card-container>
            <article-view
                :article="articles ? articles[selectedArticleIndex]: {}"
                :selectedarticleindex="selectedArticleIndex"
                :activearticleedit="activeArticleEdit"
                :success="success"
                :error="error"
                @editArticle="setActiveArticleEdit(selectedArticleIndex)"
                @cancelEdit="setActiveArticleEdit(null)"
                @saveArticle="saveArticle"
                ></article-view>
        </card-container>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardContainer from './components/CardContainer';
import CardItem from './components/CardItem';
import Article from './components/Article';


export default {
    components: {
        'card-container': CardContainer,
        'card-item': CardItem,
        'article-view': Article,
    },
  data: function() {
    return {
      articles: null,
      selectedArticleIndex: null,
      activeArticleEdit: null,
      message: "Hello world",
      error: null,
      success: null
    };
  },
  methods: {
    loadData() {
      axios.get("http://localhost:3000/articles").then(res => {
        this.articles = res.data;
      });
    },
    selectArticle(index) {
      this.selectedArticleIndex = index;
    },
    setActiveArticleEdit(idx) {
        if(idx === null){
            this.activeArticleEdit = null
        }
        else{
          this.activeArticleEdit = { ...this.articles[idx] };
        }
    },
    saveArticle() {
      axios
        .put(
          `http://localhost:3000/articles/${this.activeArticleEdit.id}`,
          this.activeArticleEdit
        )
        .then(res => {
          this.articles[this.selectedArticleIndex] = this.activeArticleEdit;
          this.activeArticleEdit = null;
          this.success = "data saved";
        })
        .catch(err => (this.error = err.response.data));
    },
    messageUpTapiMethod: function() {
      console.log("message up di method terpanggil");
      return this.message.toUpperCase();
    }
  },
  created: function() {
    this.loadData();
  },
  computed: {
    messageUp: function() {
      console.log("message up di computed terpanggil");
      return this.message.toUpperCase();
    }
  },
  watch: {
    message: function() {},
    articles: function(newData, oldData) {
      this.selectedArticleIndex = null;
      this.activeArticleEdit = null;
    },
    selectedArticleIndex: function() {
      this.error = null;
      this.success = null;
    }
  }
};
</script>

<style>
</style>