<template>
  <div :class="[styles.container]">
    <h3>
      Ainda não é membro?
      <router-link to="/registrar">Crie sua conta!</router-link>
    </h3>
    <h3>
      Deseja anunciar seus produtos?
      <router-link to="/">Registre-se aqui</router-link>
    </h3>
  </div>
</template>

<script>
import styles from '@/styles/components/LoginMenu.module.scss';

export default {
  name: 'LoginMenu',
  data() {
    return {
      styles,
    };
  },
};
</script>
