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

    <button class="btn-default" href="#">Button</button>
    <button class="btn-success" href="#">Button</button>
    <button class="btn-warn" href="#">Button</button>

    <a href="#">link</a>

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
        <input type="text" placeholder="Input Text" />
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
        <span class="select">
          <Select />
        </span>
      </div>

      <div class="form-control">
        <CheckBox>Checkbox</CheckBox>
      </div>

      <div class="form-control">
        <label>Textarea</label>
        <textarea></textarea>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckBox from './CheckBox.vue';
import Select from './Select.vue';

export default Vue.extend({
  name: 'Test',
  components: {
    CheckBox,
    Select,
  },
});
</script>

<style scoped>
.test-component {
  width: 100vw;
}
</style>
