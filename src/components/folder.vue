<script setup>
import { defineProps } from 'vue'
import FolderIcon from '@/assets/folder.svg'
const props = defineProps({
  name: {
    type: String,
    default: 'nova pasta'
  },
  icon: {
    type: Object,
    default: () => FolderIcon
  },
  color: {
    type: String,
    default: 'var(--primary)'
  }
})
</script>

<template>
  <div class="folder">
    <component :is="icon" :style="{ color }" />
    <div>{{ name }}</div>
  </div>
</template>

<style scoped>
.folder {
  --wh-folder: 100px;
  --wh-icon-folder: 70px;
  --w-name-folder: 80px;
  width: var(--wh-folder);
  height: var(--wh-folder);


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  cursor: pointer;


  & svg {
    width: var(--wh-icon-folder);
    height: var(--wh-icon-folder);
    padding: 0;
    margin: 0;
  }

  & div {
    width: var(--w-name-folder);
    font-size: 10px;
    text-align: center;
    padding: 0;
    margin: 0;
  }
}

</style>
