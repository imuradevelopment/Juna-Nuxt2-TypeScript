<template>
  <div class="container px-4">
    <form action="" method="post">
      <div  class="grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-21 md:grid-rows-7 gap-4 py-8">
        <t-button type="submit">送信</t-button>
        <div>
          <t-input v-model="tInputValue" type="text" :maxlength="30" pattern="^@.*" placeholder="@ニックネーム" :required="true" />
          <div class="text-subTextColor dark:text-subTextColorDark">{{ tInputValue }}</div>
        </div>
        <t-textarea rows="3"></t-textarea>
        <t-select placeholder="Select an option" :options="['Option A', 'Option B', 'Option C']" variant=""></t-select>
        <t-radio></t-radio>
        <t-checkbox></t-checkbox>
        <t-button>test</t-button>
        <t-input-group label="Password" feedback="Password must be at least 6 characters long">
          <t-input variant="error" value="password" type="password"/>
        </t-input-group>
        <t-rich-select></t-rich-select>
        <t-datepicker></t-datepicker>
        <div>
          <t-tag tag-name="h1" variant="h3">This is my title
            <t-tag tag-name="span" variant="badge">new</t-tag>
          </t-tag>
          <t-tag tag-name="p" variant="body">This is the body of my content</t-tag>
        </div>
        <t-toggle id="mode" v-model="$colorMode.preference" checked value="dark" uncheckedValue="light" />
        <t-toggle id="mode" />
        <t-alert variant="error" show>Something goes wrong
        </t-alert>
        <t-card header="Title of the card">Content of the card.
          <template #footer>
            <div class="flex justify-between">
              <t-button type="button">Cancel</t-button>
              <t-button type="button">Ok</t-button>
            </div>
          </template>
        </t-card>
        <t-modal header="Title of the modal">Content of the modal.
          <template #footer>
            <div class="flex justify-between">
              <t-button type="button">Cancel</t-button>
              <t-button type="button">Ok</t-button>
            </div>
          </template>
        </t-modal>
        <t-dialog></t-dialog>
        <t-table :headers="['Name', 'Email', 'Age', 'Sales']"
          :data="[
            ['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
            ['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
          ]"
        ></t-table>
        <t-pagination></t-pagination>
        <t-dropdown></t-dropdown>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    // layout: 'ignore',
    setup() {
        const tInputValue:Ref<string> = ref('t-input')
        const test = ()=>{alert('sdvds')}
        return {
            tInputValue,
            test
        }
    },
})
</script>
