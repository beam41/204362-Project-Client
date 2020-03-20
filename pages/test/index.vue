<template>
  <div class="test-component">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>Paragraph</p>
    <p>
      ParagraphParagraphParagraph ParagraphParagraphParagraph ParagraphParagraphParagraph
      ParagraphParagraphParagraph ParagraphParagraphParagraph ParagraphParagraphParagraph
      ParagraphParagraphParagraph ParagraphParagraphParagraph ParagraphParagraphParagraph
      ParagraphParagraphParagraph ParagraphParagraphParagraph
    </p>

    <button class="btn-default" nuxt-link to="/listdog">Button</button>
    <button class="btn-success" href="#">Button</button>
    <button class="btn-warn" href="#">Button</button>

    <a href="#" class="link">link</a>
    <br />
    <button class="btn-default" href="#" disabled>Button</button>
    <button class="btn-success" href="#" disabled>Button</button>
    <button class="btn-warn" href="#" disabled>Button</button>

    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>

    <form>
      <div class="form-control">
        <label>Text</label>
        <input type="text" placeholder="Input Text" @change="log($event)" />
        <input type="text" placeholder="Input Text" class="error" @change="log($event)" />
      </div>

      <div class="form-control">
        <div class="input-group">
          <label>Text with Compound btn</label>
          <input type="text" placeholder="Search" />
          <button class="btn-default" href="#">Button</button>
        </div>
      </div>

      <div class="form-control">
        <label>Select</label>
        <span class="select" style="width: 200px">
          <Select
            ref="hi"
            custom-text="Select Your Mee:"
            :options="['Mee', 'Moo', 'Maa']"
            @change="log($event)"
          />
          <Select
            ref="hi"
            custom-text="Select Your Mee:"
            :options="['Mee', 'Moo', 'Maa']"
            :default-option="'Mee'"
            @change="log($event)"
          />
          <Select
            ref="hiw"
            custom-text="Select Your Mee:"
            :options="['Mee', 'Moo', 'Maa']"
            :error="true"
            @change="log($event)"
          />
        </span>
      </div>

      <div class="form-control">
        <CheckBox @change="log($event)">Checkbox</CheckBox>
      </div>

      <div class="form-control">
        <label>Textarea</label>
        <textarea></textarea>
        <textarea class="error"></textarea>
      </div>
    </form>
    <div class="form-control">
      <label>Sorter</label>
      <span class="Sorter">
        <!-- <Sorter /> -->
      </span>
    </div>
    <div class="spinner"></div>
    <button class="btn-success" @click="showing()">Yea</button>
    <button class="btn-success" @click="toTop()">Totop</button>
    <Modal :show="show">
      <div class="m-top">
        <h5>Title Top</h5>
      </div>
      <div class="m-mid">
        <p>Do you want to deneeed</p>
      </div>
      <div class="m-bot">
        <button class="btn-success" @click="showing()">Yea</button>
        <button class="btn-warn" @click="hide()">Nay</button>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Select from '@/components/Shared/Select.vue';
import CheckBox from '@/components/Shared/CheckBox.vue';
// import Sorter from './Sorter.vue';
import Modal from '@/components/Shared/Modal.vue';

export default Vue.extend({
  name: 'Test',
  components: {
    CheckBox,
    Select,
    // Sorter,
    Modal,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    log(me: any) {
      console.log(me);
    },
    showing() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
    toTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style scoped>
.test-component {
  height: 200vh;
}
</style>
