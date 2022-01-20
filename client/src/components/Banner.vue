<template>
  <div :class=[styles.container]>
    <img src="/DeliveryLogo.png" alt="Delivery Logo" height="30" />
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
