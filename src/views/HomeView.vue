<script setup>
import GridFolders from '@/components/gridFolders.vue'
import { shallowRef, ref } from 'vue'

const foldersList = [
  { name: 'Series', icon: 'FolderLock', color: 'red' },
  { name: 'Documentos', icon: 'FolderIcon' },
  { name: 'Musicas', icon: 'FolderIcon' },
  { name: 'Downloads', icon: 'FolderIcon', color: 'rebeccapurple' },
  { name: 'Videos', icon: 'FolderIcon', color: '#e3f' },
  { name: 'Ext', icon: 'FolderIcon' }
]
</script>

<template>
  <main class="page home">
    <GridFolders :folders="foldersList" />
  </main>
</template>
