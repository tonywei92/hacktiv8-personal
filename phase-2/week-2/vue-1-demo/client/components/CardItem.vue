<template>
  <li
    :class="`p-2 border-b border-gray-500 cursor-pointer transition-colors duration-500 ${idx === selectedarticleindex ? 'bg-blue-500 text-white': '' }`"
    @click="$emit('selectedArticle',idx)"
  >
    <div class="flex">
      <div class="w-6/12">
        <div class="h-16 w-full">
          <img :src="article.featured_image" class="object-cover w-full h-full" alt />
        </div>
      </div>
      <div class="flex flex-col w-6/12 ml-2">
        <p class="font-bold">{{article.title}}</p>
        <p>{{article.description}}</p>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["article", "selectedarticleindex", "idx"]
};
</script>
<style>
</style>