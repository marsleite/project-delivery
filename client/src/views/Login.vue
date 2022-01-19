<template>
  <main id="login-page" :class="[styles.container]">
    <div :class=[styles.banner]>
      Left
    </div>
    <div :class=[styles.inputs__container]>
      Login
      <form>
        <label for="email"><h3>Email</h3></label>
        <input
          id="email"
          placeholder="você@exemplo.com.br"
          type="email"
          v-model="email"
        />
        <label for="password"><h3>Senha</h3></label>
        <input
          id="password"
          placeholder="Por favor, informe sua senha"
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

    </div>

  </main>
</template>

<script>
import styles from '../styles/views/_Login.module.scss';

export default {
  name: 'Login',
  data() {
    return {
      styles,
      email: '',
      password: '',
    };
  },
};
</script>
