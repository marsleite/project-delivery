<template>
  <main id="login-page" :class=[styles.container]>
    <div :class=[styles.banner]></div>

    <div :class=[styles.inputs__container]>
      <router-link to="/">Voltar</router-link>
      <LoginForm />
      <LoginMenu />
    </div>
  </main>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';
import LoginMenu from '@/components/Login/LoginMenu.vue';
import styles from '@/styles/views/Login.module.scss';

export default {
  name: 'Login',
  components: {
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
