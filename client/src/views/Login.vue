<template>
  <main id="login-page">
    <form>
      Login
      <input
        id="email"
        placeholder="você@exemplo.com.br"
        type="email"
        v-model="email"
      />
      <input
        id="password"
        type="password"
        v-model="password"
      />
      <button
        id="btn-login"
        type="button"
        @click="login"
      >
        Entrar
      </button>

    </form>

  </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
