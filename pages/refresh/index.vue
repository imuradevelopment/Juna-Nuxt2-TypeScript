<template>
  <div class="container px-4">
      <div>
          <form @submit.prevent="userLogin">
              <div>
                  <label>Username</label>
                  <input v-model="login.user_id" type="text" />
              </div>
              <div>
                  <label>Password</label>
                  <input v-model="login.password" type="text" />
              </div>
              <div>
                  <button type="submit">Submit</button>
              </div>
              <t-input value="Hello world" name="my-input" />
          </form>
          <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 py-8 bg-white">
            <div class="bg-cpbg">cpbg：プライマリーバックグラウンド</div>
            <div class="bg-csbg">csbg：セカンダリーバックグラウンド</div>
            <div class="bg-cplayer">cplayer：プライマリーレイヤー</div>
            <div class="bg-chlayer">chlayer：ハイライトレイヤー</div>
            <div class="bg-cslayer">cslayer：セカンダリーレイヤー</div>
            <div class="bg-cptext text-white">cptext：プライマリーテキスト</div>
            <div class="bg-cstext text-white">cstext：セカンダリーテキスト</div>
            <div class="bg-white"></div>
            <div class="bg-white"></div>
          </div>
          <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 py-8 bg-black">
            <div class="bg-dpbg text-white">dpbg：プライマリーバックグラウンド</div>
            <div class="bg-dsbg text-white">dsbg：セカンダリーバックグラウンド</div>
            <div class="bg-dplayer text-white">dplayer：プライマリーレイヤー</div>
            <div class="bg-dhlayer text-white">dhlayer：ハイライトレイヤー</div>
            <div class="bg-dslayer text-white">dslayer：セカンダリーレイヤー</div>
            <div class="bg-dptext text-black">dptext：プライマリーテキスト</div>
            <div class="bg-dstext text-black">dstext：セカンダリーテキスト</div>
            <div class="bg-black"></div>
            <div class="bg-black"></div>
          </div>
          <div  class="grid grid-flow-col grid-cols-3 grid-rows-6 gap-4 py-8">
            <t-input id="test"/>
            <t-textarea rows="1"></t-textarea>
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
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // layout: 'ignore',
    data() {
        return {
            login: {
                user_id: '',
                password: '',
            },
            mode: 'light',
        }
    },
    watch:{
        mode(newName) {
            localStorage.mode = newName
        }
    },
    mounted() {
        if(localStorage.mode) {
            this.mode = localStorage.mode
        }
    },
    methods: {
        async userLogin() {
            try {
                console.log(await this.$api.v1.users.get())
                // console.log(await this.$auth.refreshTokens());
                this.$toasted.global.defaultSuccess({
                    msg: 'ユーザーの認証に成功',
                })
            } catch (err) {
                // console.log(err);
                this.$toasted.global.defaultError({
                    msg: 'ユーザー名またはパスワードが無効です。',
                })
            }
        }
    },
})
</script>
