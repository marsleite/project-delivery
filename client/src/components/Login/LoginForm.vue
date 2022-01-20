<template>
  <form @submit.prevent="submit">
    <h1>
      {{ greetings }}!<br />
      Seja bem-vindo.
    </h1>

    <label for="email"><h3>Email</h3></label>
    <input id="email" type="email" v-model="email" placeholder="você@exemplo.com.br" />
    <label for="password">
      <h3>Senha</h3>
      <router-link to="/redefinir-senha">
        <h3>Esqueceu sua senha?</h3>
      </router-link>
    </label>
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Por favor, informe sua senha"
    />
    <div :class=[styles.btn__container]>
      <button id="btn-login" type="submit">Entrar</button>
      <span><hr /><h3>Ou</h3><hr /></span>
      <LoginOptions />
    </div>
  </form>
</template>

<script>
import LoginOptions from '@/components/Login/LoginOptions.vue';
import styles from '@/styles/components/_LoginForm.module.scss';

export default {
  name: 'LoginForm',
  components: {
    LoginOptions,
  },
  data() {
    return {
      styles,
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      console.log('teste');
    },
  },
  computed: {
    greetings() {
      const d = new Date();
      const hour = d.getHours();
      let greetings;

      if (hour < 12) greetings = 'Bom dia';
      if (hour >= 12 && hour < 18) greetings = 'Boa tarde';
      if (hour >= 18) greetings = 'Boa noite';

      return greetings;
    },
  },
};
</script>
