<template>
  <main id="register-page" :class=[styles.container]>
    <div :class=[styles.banner]></div>

    <div :class=[styles.inputs__container]>
      <router-link to="/">Voltar</router-link>

      <RegisterForm />

      <div :class=[styles.options]>
        <h3>
          Já tem uma conta?
          <router-link to="/entrar">Entrar</router-link>
        </h3>
        <h3>
          Deseja vender seus alimentos?
          <router-link to="/">Cadastre-se aqui</router-link>
        </h3>
      </div>

    </div>
  </main>
</template>

<script>
import RegisterForm from '@/components/Register/RegisterForm.vue';
import styles from '../styles/views/_Register.module.scss';

export default {
  name: 'Register',
  components: {
    RegisterForm,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
