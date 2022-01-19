<template>
  <main id="login-page" :class="[styles.container]">
    <div :class=[styles.banner]></div>

    <div :class=[styles.inputs__container]>
      <router-link to="/">Voltar</router-link>

      <LoginForm />
      <h3>Ou</h3>
      <h3>Entrar com Google</h3>

      <h3>
        Ainda não é membro?
        <router-link to="/">Se cadastre</router-link>
      </h3>

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
  // methods: {

  // },
};
</script>
