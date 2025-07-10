<script setup>
import { ref, watch } from 'vue'

const showDialog = ref(false)
const dialogRef = ref(null)

watch(showDialog, (val) => {
  if (val) {
    dialogRef.value?.showModal()
  } else {
    dialogRef.value?.close()
  }
})

function fecharDialog() {
  showDialog.value = false
}
</script>

<template>
  <dialog ref="dialogRef">
    <p>Este é um dialog nativo HTML5!</p>
    <button @click="fecharDialog">Fechar</button>
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
