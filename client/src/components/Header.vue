<template>
  <header :class=[styles.mainHeader]>The header</header>
</template>

<script>
import styles from '@/styles/components/Header.module.scss';

export default {
  name: 'Header',
  data() {
    return {
      styles,
    };
  },
};
</script>
