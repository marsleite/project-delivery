<template>
  <main id="register-page" :class=[styles.container]>
    <div :class=[styles.inputs__container]>
      <router-link to="/">Voltar</router-link>

      <RegisterForm />

      <div :class=[styles.options]>
        <h3>
          Ao criar sua conta, você concorda com nossos
          <router-link to="/termos">termos de uso</router-link>
        </h3>
        <h3>
          Já tem uma conta?
          <router-link to="/entrar">Entrar</router-link>
        </h3>
      </div>

    </div>
    <Banner />
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue';
import RegisterForm from '@/components/Register/RegisterForm.vue';
import styles from '../styles/views/Register.module.scss';

export default {
  name: 'Register',
  components: {
    Banner,
    RegisterForm,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
