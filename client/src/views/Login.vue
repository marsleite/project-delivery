<template>
  <main id="login-page" :class=[styles.container]>
    <div :class=[styles.banner]></div>

    <div :class=[styles.inputs__container]>
      <router-link to="/">Voltar</router-link>

      <LoginForm />
      <!-- <LoginOptions /> -->
      <div :class=[styles.options]>
        <h3>
          Ainda não é membro?
          <router-link to="/registrar">Crie sua conta!</router-link>
        </h3>
        <h3>
          Deseja anunciar seus produtos?
          <router-link to="/">Registre-se aqui</router-link>
        </h3>
      </div>

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
    // LoginOptions,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
