<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footerM">
    <RouterLink to="/" class="nav-link" exact-active-class="active">
      <i class="ri-home-9-line"></i>
    </RouterLink>
    <RouterLink to="/about" class="nav-link" exact-active-class="active">
      <i class="ri-file-info-line"></i>
    </RouterLink>
  </div>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--white);

  & i {
    font-size: 44px;
  }

  &.active i {
    color: var(--dark);
  }
}
</style>
