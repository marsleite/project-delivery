<template>
  <header :class=[styles.container]>
    <router-link to="/">
      <div :class=[styles.logo]>
        <img src="/lo.png" height="20" />
        Delivery
      </div>
    </router-link>

    <nav>
    <router-link to="/">
        <h3>Home</h3>
    </router-link>
            <router-link to="/entrar">
        <h3>Sugestões</h3>
    </router-link>
            <router-link to="/entrar">
        <h3>Explorar</h3>
    </router-link>
    </nav>

    <router-link to="/entrar">
      <button>
        Entrar
      </button>
    </router-link>
  </header>
</template>

<script>
import styles from '@/styles/components/Header.module.scss';

export default {
  name: 'Header',
  data() {
    return {
      styles,
    };
  },
};
</script>
