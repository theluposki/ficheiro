<script setup>
import { ref, watch } from 'vue'

const showDialog = ref(false)
const dialogRef = ref(null)


function fecharDialog() {
  console.log('Fechando dialog')
  showDialog.value = false
}
</script>

<template>
  <dialog v-if="showDialog" class="dialogFolder">

    <div class="painelDialog">
      <p>Criar nova pasta?</p>
      <button class="close" @click="fecharDialog">
        <i class="ri-close-large-line"></i>
      </button>
    </div>

  </dialog>

  <header class="headerInt">
    <div class="left">
      left
    </div>
    <div class="right">
      <div class="btn">
        <i class="ri-file-add-line"></i>
      </div>
      <div class="btn" @click="showDialog = true">
        <i class="ri-folder-add-fill"></i>
      </div>
    </div>
  </header>

</template>

<style scoped>
.headerInt {
  min-height: var(--hPainel);
  max-height: var(--hPainel);
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--pG);
}

.dialogFolder {
  position: absolute;
  top: calc(2 * var(--hPainel));
  left: 0;
  min-width: var(--wG);
  max-width: var(--wG);
  min-height: var(--hInt);
  max-height: var(--hInt);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  & .painelDialog {
    position: relative;
    min-width: 60%;
    max-width: 60%;
    background-color: var(--text-light);
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .close {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: var(--text);
      font-size: 30px;
      cursor: pointer;

      &:hover {
        transition: all ease 0.2s;
        background-color: var(--text);
        color: var(--text-light);
      }
    }
  }
}

.right {
  display: flex;
  gap: var(--pG);
}

.btn {
  --hBtn: 40px;
  width: var(--hBtn);
  height: var(--hBtn);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: transparent;
  font-size: 30px;
  color: var(--text-light);
  cursor: pointer;

  &:hover {
    transition: all ease 0.2s;
    background-color: var(--text);
  }
}
</style>
