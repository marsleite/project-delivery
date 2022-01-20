<template>
  <div :class="[styles.options__container]">
    <slot></slot>
  </div>
</template>

<script>
import styles from '@/styles/views/Login.module.scss';

export default {
  name: 'LoginOptions',
  data() {
    return {
      styles,
    };
  },
};
</script>
