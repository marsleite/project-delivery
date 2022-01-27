<template>
  <div :class=[styles.container]>
  </div>
</template>

<script>
import styles from '@/styles/components/Banner.module.scss';

export default {
  name: 'Banner',
  data() {
    return {
      styles,
    };
  },
};
</script>
