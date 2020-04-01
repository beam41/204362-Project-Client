<template>
  <div class="container">
    <div class="content">
      <h2>About</h2>
      <h5>we are mheanmaa</h5>
      <section class="animated-grid">
        <div class="card">a</div>
        <div class="card">b</div>
        <div class="card">c</div>
        <div class="card">d</div>
        <div class="card">e</div>
        <div class="card">f</div>
        <div class="card">main</div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'visitor',
  name: 'Home',
});
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 5% 80px 5%;
  width: 100%;
}
.animated-grid {
  height: 100vh;
  width: 100%;
  margin: 50px 0px 0px 0px;

  display: grid;
  gap: 1rem;

  /* Explicit grid */
  grid-template-areas:
    'a  a  b  b'
    'a  a  c  d'
    '🌟 🌟 f  e';

  grid-template-rows: repeat(4, 25%);
  grid-template-columns: 25% auto auto 25%;

  --stagger-delay: 100ms;
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: scale(0.3);
    filter: hue-rotate(180deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
}

.card {
  background-color: rgb(36, 243, 147);
  animation: cardEntrance 700ms ease-out;
  animation-fill-mode: backwards;
}

.card:nth-child(1) {
  grid-area: a;
  animation-delay: calc(1 * var(--stagger-delay));
}
.card:nth-child(2) {
  grid-area: b;
  animation-delay: calc(2 * var(--stagger-delay));
}
.card:nth-child(3) {
  grid-area: c;
  animation-delay: calc(3 * var(--stagger-delay));
}
.card:nth-child(4) {
  grid-area: d;
  animation-delay: calc(4 * var(--stagger-delay));
}
.card:nth-child(5) {
  grid-area: e;
  animation-delay: calc(5 * var(--stagger-delay));
}
.card:nth-child(6) {
  grid-area: f;
  animation-delay: calc(6 * var(--stagger-delay));
}
.card:last-child {
  grid-area: 🌟;
  animation-delay: calc(7 * var(--stagger-delay));
}
</style>
