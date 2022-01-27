<template>
  <main id="register-page" :class=[styles.container]>
    <div :class=[styles.inputs__container]>
      <router-link to="/">Voltar</router-link>

      <RegisterForm />

      <div :class=[styles.options]>
        <img src="/DeliveryLogo.png" alt="Delivery Logo" height="30" />        <h3>
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
