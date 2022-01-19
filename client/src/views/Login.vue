<template>
  <main id="login-page" :class="[styles.container]">
    <div :class=[styles.banner]>
      Left
    </div>

    <div :class=[styles.inputs__container]>
      Login
      <LoginForm />
    </div>

  </main>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';
import styles from '../styles/views/_Login.module.scss';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
