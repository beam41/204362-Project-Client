<template>
  <div class = "HomeAdmin">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <sider><Navbar></Navbar></sider>
        <Layout>
        <Header class="layout-header-bar"></Header>
        <Conyent  :style="{margin: '5px 5px 0',background: '#fff',minHeight: '100vh'}">
            <div class="layout-nav">
              <router-view/>
            </div>
        </Conyent>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';


export default Vue.extend({
  name: 'HomeAdmin',
  components: {
    Navbar,

  },
});
</script>

<style>
.layout-nav{
  width: auto;
  margin: 50px 50px auto;
  margin-right: 20px;
}
</style>
