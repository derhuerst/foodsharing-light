<template>
  <main-layout>
    <h6>
      Deine Betriebe
    </h6>
    <div class="card">
      <div class="card-content">
        <loading v-if="isLoading"/>
        <template v-else-if="stores.length > 0">
          <div class="list no-border">
            <router-link :to="'/store/' + store.id" tag="div" class="item two-lines item-link" v-for="store in stores" :key="store.id">
              <div class="item-primary">
                <i>store</i>
              </div>
              <div class="item-content">
                <div>{{ store.name }}</div>
                <div>{{ formatAddress(store) }}</div>
              </div>
            </router-link>
            <hr class="inset">
          </div>
        </template>
        <template v-else-if="stores">
          Du bist in keinem Betrieb. Verwende die Desktop Version, um einem Betrieb beizutreten.
        </template>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import { Toast } from 'quasar'

  import api from 'services/api'

  export default {
    data () {
      return {
        isLoading: false,
        stores: []
      }
    },
    methods: {
      formatAddress (store) {
        return [store.street, store.streetNumber, store.zip, store.city]
          .filter(v => v).join(' ')
      }
    },
    created () {
      this.isLoading = true
      api.getStoreList().then(stores => {
        this.stores = stores
      }).catch(() => {
        // TODO: translate to German
        Toast.create.negative('Could not load stores')
      }).then(() => {
        this.isLoading = false
      })
    }
  }
</script>
