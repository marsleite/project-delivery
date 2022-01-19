<template>
  <form>
    <label for="email"><h3>Email</h3></label>
    <input id="email" type="email" v-model="email" placeholder="você@exemplo.com.br" />
    <label for="password"><h3>Senha</h3></label>
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Por favor, informe sua senha"
    />
    <button id="btn-login" type="button" @click="login">Entrar</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
