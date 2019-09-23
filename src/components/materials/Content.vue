<script>
import { molten } from '../../util/base'

export default {
  name: 'Content',
  data () {
    return {
      existItems: [],
      expansion: '',
      type: ''
    }
  },
  created () {
    molten.get('materials').then((resoponse) => { this.existItems = resoponse.data })
  },
  methods: {
    findItem () {
      let selections = {
        expansion: this.expansion || false,
        type: this.type || false
      }
      if (!selections.expansion && !selections.type) {
        molten.get('materials')
          .then((resoponse) => { this.existItems = resoponse.data })
          .then(this.expansion = '', this.type = '')
      } else if (!selections.expansion && selections.type) {
        molten.get(`materials/${selections.type}`)
          .then((resoponse) => { this.existItems = resoponse.data })
          .then(this.expansion = '', this.type = '')
      } else if (!selections.type && selections.expansion) {
        molten.get(`materials/${selections.expansion}`)
          .then((resoponse) => { this.existItems = resoponse.data })
          .then(this.expansion = '', this.type = '')
      } else {
        molten.get(`materials/${selections.expansion}/${selections.type}`)
          .then((resoponse) => { this.existItems = resoponse.data })
          .then(this.expansion = '', this.type = '')
      }
    }
  }
}
</script>

<template>
  <div class="uk-container">
    <form class="uk-margin uk-flex uk-flex-center uk-margin-large-top" method="post" @submit.prevent="findItem">
      <select class="uk-select uk-form-width-medium uk-margin-right" name="expansion" v-model="expansion">
        <option disabled value="">{{ $t('materials.bar.firstDisabled') }}</option>
        <option value="battleforazeroth">{{ $t('materials.bar.bfa') }}</option>
        <option value="legion">{{ $t('materials.bar.legion') }}</option>
        <option value="warlordsofdreanor">{{ $t('materials.bar.wod') }}</option>
        <option value="mistofpandaria">{{ $t('materials.bar.mop') }}</option>
        <option value="cataclysm">{{ $t('materials.bar.cataclysm') }}</option>
        <option value="wrathofthelichking">{{ $t('materials.bar.wotlk') }}</option>
        <option value="theburningcrusade">{{ $t('materials.bar.tbc') }}</option>
        <option value="classic">{{ $t('materials.bar.classic') }}</option>
        <option disabled value="vanilla">{{ $t('materials.bar.vanilla') }}</option>
      </select>
      <select class="uk-select uk-form-width-small uk-margin-right" name="type" v-model="type">
        <option disabled value="">{{ $t('materials.bar.secondDisabled') }}</option>
        <option value="herb">{{ $t('materials.bar.herb') }}</option>
        <option value="ore">{{ $t('materials.bar.ore') }}</option>
        <option value="leather">{{ $t('materials.bar.leather') }}</option>
        <option value="cloth">{{ $t('materials.bar.cloth') }}</option>
        <option value="disenchant">{{ $t('materials.bar.disenchant') }}</option>
        <option value="fish">{{ $t('materials.bar.fish') }}</option>
        <option value="meat">{{ $t('materials.bar.meat') }}</option>
      </select>
      <button class="uk-button uk-button-default" type="submit" name="button">{{ $t('materials.bar.find') }}</button>
    </form>
    <div :class="existItems.length > 0 ? 'uk-flex uk-flex-center uk-margin-top uk-text-success': 'uk-flex uk-flex-center uk-margin-top uk-text-warning'">
      <p>{{ $tc('materials.notice.text', existItems.length) }}</p>
    </div>
    <table class="uk-table uk-table-hover uk-table-divider" v-if="existItems.length > 0">
      <thead>
        <tr>
          <th>{{ $t('materials.content.id') }}</th>
          <th>{{ $t('materials.content.icon') }}</th>
          <th>{{ $t('materials.content.name') }}</th>
          <th>{{ $t('materials.content.type') }}</th>
          <th>{{ $t('materials.content.expansion') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in existItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td><img class="uk-border-pill" width="30" height="30" v-bind:src="`https://render-eu.worldofwarcraft.com/icons/36/${item.icon}.jpg`"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.type.name }}</td>
          <td>{{ item.content.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
