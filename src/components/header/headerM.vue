<template>
  <div class="headerM">
    <div class="logo">
      <img src="@/assets/logo-192x192.png" width="44px" alt="Logo" />
      <span>Ficheiro</span>
    </div>

    <div class="userland">
      userland
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: var(--pG);

  & img {
    width: 44px;
    height: 44px;
  }

  & span {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
