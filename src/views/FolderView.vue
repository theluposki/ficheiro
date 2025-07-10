<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const folderName = route.params.folderName || 'Nova Pasta'
document.title = `Folder: ${folderName}`
</script>
<template>
  <div class="page">
    Foldder View: {{ folderName }}
  </div>
</template>
