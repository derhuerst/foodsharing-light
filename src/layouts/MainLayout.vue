<template>
  <q-layout>
    <slot name="header">
      <div slot="header" class="toolbar">
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="1" class="toolbar-logo">
          <router-link :to="{ name: 'index' }">food<span>sharing {{ currentPage }}</span></router-link>
        </q-toolbar-title>
        <q-tabs slot="navigation">
          <q-tab icon="directions_bike" :route="{ name: 'pickups' }"></q-tab>
          <q-tab icon="chat" :route="{ name: 'chats' }"></q-tab>
          <q-tab icon="shopping_cart" :route="{ name: 'stores' }"></q-tab>
        </q-tabs>
      </div>
    </slot>

    <q-drawer ref="leftDrawer">
      <slot name="left-drawer">
        <div class="toolbar light">
          <q-toolbar-title :padding="1" v-if="user">
            {{ user.firstName }} {{ user.lastName }}
          </q-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="exit_to_app" :to="{ name: 'logout' }" exact>
            Logout
          </q-drawer-link>
        </div>

        <div class="absolute-bottom fs-contact-us">
          <div class="card-content">
            <p>Willkommen auf foodsharing light <strong>beta</strong>.</p>
            <p>Hier gibt's keine Garantie, dass alles funktioniert.</p>
            <p>Bitte gib uns Feedback über Fehler und Verbesserungsvorschlage!</p>

            <div class="list">
              <div class="item">
                <img src="../assets/GitHub-Mark-64px.png" class="item-primary" style="top: 10px; height: 25px; width: 25px;">
                <div class="item-content">
                  <a href="https://github.com/foodsharing-dev/foodsharing-light/issues" target="_blank" class="full-width">
                    Github
                  </a>
                </div>
              </div>

              <div class="item">
                <i class="item-primary">chat</i>
                <div class="item-content">
                  <a href="https://slackin.yunity.org" target="_blank" class="full-width">
                    <div>yunity Slack</div>
                    <div><small>#foodsharing-dev</small></div>
                  </a>
                </div>
              </div>

              <div class="item">
                <i class="item-primary">email</i>
                <div class="item-content">
                  <a href="mailto:fslight@matthias-larisch.de" target="_blank" class="full-width">
                    <div>Email Matthias</div>
                    <div><small>Deutsch / Englisch</small></div>
                  </a>
                </div>
              </div>

              <div class="item">
                <i class="item-primary">email</i>
                <div class="item-content">
                  <a href="mailto:fslight@nicksellen.co.uk" target="_blank" class="full-width">
                    <div>Email Nick</div>
                    <div><small>English</small></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </q-drawer>

    <div class="layout-view">
      <div class="layout-padding">
        <q-ajax-bar position="bottom"></q-ajax-bar>
        <slot></slot>
      </div>
    </div>

    <div slot="footer">
      <slot name="app-footer"></slot>
    </div>
  </q-layout>
</template>

<script>
  import auth from 'services/auth'
  export default {
    data () {
      return {
        currentPage: ''
      }
    },
    computed: {
      user () {
        return auth.state.user
      }
    }
  }
</script>

<style lang="stylus" scoped>
.fs-contact-us
  z-index:-1
  a
    display: block
</style>
