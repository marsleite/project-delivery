<template>
  <form @submit.prevent="submit">
    <h1>
      Cria sua conta sem<br />
      nenhum custo
    </h1>

    <label for="full-name"><h3>Nome completo</h3></label>
    <input id="full-name" type="text" v-model="fullName" placeholder="Qual seu nome completo?" />

    <label for="email"><h3>Email</h3></label>
    <input id="email" type="email" v-model="email" placeholder="você@exemplo.com.br" />

    <label for="password"><h3>Senha</h3></label>
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Digite pelo menos 8 caracteres"
    />

    <label for="password-confirm"><h3>Confirme sua senha</h3></label>
    <input
      id="password-confirm"
      type="password"
      v-model="password"
      placeholder="Digite novamente sua senha"
    />

    <div :class=[styles.btn__container]>
      <button id="btn-register" type="submit">Criar conta</button>
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
