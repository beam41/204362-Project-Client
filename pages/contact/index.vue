<template>
  <div class="contactbox">
    <div class="content"><h1>Mhean-maa</h1></div>
    <div class="content lowpad"><h3>About Us</h3></div>
    <div class="content lowpad">
      <p class="ph">
        Two border following algorithms are propose d for the topological analysis of digitized
        binary images. The first one determines the surrou ndness relations among the borders of a
        binary image. Since the outer borders and the hole bo most borders .e., the outer borders
        which are not surrounded by holes. These algorithms can be effectively used in compon nt
        counting, shrinking, and topological structural analysis of binary images, when a sequential
        digital computer is used
      </p>
    </div>
    <div class="content lowpad"><h3>Contact</h3></div>
    <div class="content lowpad">
      <pre class="ph">
Tell : 126-548-6454
pak wi cha computer
some where in this world
why want to know?
sww that map
      </pre>
    </div>
    <div class="content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.8735056090427!2d98.95033161544146!3d18.80378978724467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6986a44d33%3A0x26567f48ad5789ee!2sDepartment%20Of%20Computer%20Science!5e0!3m2!1sen!2sth!4v1587033272717!5m2!1sen!2sth"
        width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'visitor',
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.contactbox {
  display: block;
  justify-content: center;
}
.content {
  display: flex;
  justify-content: center;
}
.lowpad {
  padding-top: 30px;
  padding-bottom: 30px;
}
.ph {
  max-width: 70%;
  text-align: center;
}
</style>
