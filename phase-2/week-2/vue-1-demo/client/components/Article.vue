<template>
  <div>
    <em v-if="selectedarticleindex === null">No article selected</em>
    <div class="text-red-500 rounded border border-red-300 p-4" v-if="error">{{error}}</div>
    <div class="text-green-500 rounded border border-green-300 p-4" v-if="success">{{success}}</div>
    <div v-if="selectedarticleindex !== null">
      <div v-if="activearticleedit===null">
        <div class="flex justify-end">
          <custom-button
            type="info"
            @click="$emit('editArticle')"
          >Sunting</custom-button>
        </div>
        <h1 class="font-2xl">{{article.title}}</h1>
        <p class="text-sm">{{article.description}}</p>
        <br />
        <p>{{article.body}}</p>
      </div>
      <div v-if="activearticleedit !== null">
        <form action @submit.prevent="$emit('saveArticle')">
          <div>
            <label for="title">Title</label>
            <input
              type="text"
              v-model="activearticleedit.title"
              id="title"
              class="block border border-gray-500"
            />
          </div>
          <div>
            <label for="description">Description</label>
            <input
              type="text"
              v-model="activearticleedit.description"
              id="description"
              class="block border border-gray-500"
            />
          </div>
          <div>
            <label for="body">Body</label>
            <textarea id="body" cols="30" rows="10" class="block border border-gray-500" v-model="activearticleedit.body"></textarea>
          </div>
          <input
            type="submit"
            value="Save"
            class="mt-4 shadow-xl rounded bg-blue-500 border border-gray-500 px-4 py-2 hover:bg-blue-300 text-white"
          />
        </form>
        <br />
        <button
          class="mt-4 shadow-xl rounded bg-yellow-500 border border-gray-500 px-4 py-2 hover:bg-yellow-300 text-white"
          @click="$emit('cancelEdit')"
        >Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button';
export default {
    components:{
        'custom-button': Button
    },
    props: ["article", "selectedarticleindex", "activearticleedit", "success", "error"]
};
</script>

<style>
</style>