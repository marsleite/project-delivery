<template>
  <div :class="[styles.options__container]">
    <button :class="[styles.btnGoogle]">Entrar com Google</button>
  </div>
</template>

<script>
import styles from '@/styles/views/_Login.module.scss';

export default {
  name: 'LoginOptions',
  data() {
    return {
      styles,
    };
  },
};
</script>
