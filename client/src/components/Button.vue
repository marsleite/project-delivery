<template>
  <button :id='id'>
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
