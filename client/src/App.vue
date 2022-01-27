<template>
  <Header v-if="headerRender" />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  computed: {
    headerRender() {
      if (this.$route.path === '/entrar' || this.$route.path === '/registrar') {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/App.scss";
</style>
