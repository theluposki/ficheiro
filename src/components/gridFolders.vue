<script setup>
import FolderIcon from '@/assets/folder.svg'
import FolderLock from '@/assets/folder-lock.svg'
import Folder from '@/components/folder.vue'

const icons = {
  'FolderIcon': FolderIcon,
  'FolderLock': FolderLock
}

defineProps({
  folders: {
    type: Array
  }
})
</script>

<template>
  <div class="grid-folders">
    <Folder v-for="item in folders" :name="item.name" :icon="icons[item.icon]" :color="item.color" />
  </div>
</template>

<style scoped>
.grid-folders {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  padding: 10px;
}

.grid-folders>* {
  flex: 1;
  min-width: 100px;
  max-width: 200px;
}

.grid-folders>*:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
  background-color: #333333;
}

.grid-folders>*:active {
  transform: scale(0.98);
  transition: transform 0.1s ease-in-out;
}
</style>
