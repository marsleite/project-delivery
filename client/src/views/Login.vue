<template>
  <main id="login-page" :class=[styles.container]>
    <div :class=[styles.inputs__container]>
      <div style="display: flex; flex-direction: column; align-items: flex-start;">
        <router-link to="/">Voltar</router-link>
      </div>
      <LoginForm />
      <LoginMenu />
    </div>
    <Banner />
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue';
import LoginForm from '@/components/Login/LoginForm.vue';
import LoginMenu from '@/components/Login/LoginMenu.vue';
import styles from '@/styles/views/Login.module.scss';

export default {
  name: 'Login',
  components: {
    Banner,
    LoginForm,
    LoginMenu,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
