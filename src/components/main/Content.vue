<script>
import axios from 'axios'

export default {
  name: 'Main',
  mounted () {
    axios.get('https://raw.githubusercontent.com/MoltenCraft/client/master/package.json').then(response => {
      this.$refs.version.innerText = response.data.version
    })
  }
}
</script>

<template>
  <div class="uk-section-primary">
    <div class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center" uk-height-viewport="offset-top: true; offset-bottom: true">
      <div class="uk-width-1-1">
        <div class="uk-container">
          <p>
            <img src="../../assets/images/logo2.png" height="150" width="150" alt="MoltenCraft">
          </p>
          <p class="uk-margin-medium uk-text-lead">{{ $t('main.promotion.text1') }}<br>{{ $t('main.promotion.text2') }}<br>{{ $t('main.promotion.text3') }}</p>
          <div class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center" uk-grid>
            <div>
              <a class="uk-button uk-button-default uk-button-large uk-visible@s" href="https://github.com/uikit/uikit"><i class="fas fa-angle-double-down" style="margin-right: 7px"></i>{{ $t('main.download') }}</a>
              <a class="uk-button uk-button-default uk-hidden@s" href="https://github.com/uikit/uikit"><i class="fas fa-angle-double-down" style="margin-right: 7px"></i>{{ $t('main.download') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-small">
      <div class="uk-container uk-container-expand uk-text-center uk-position-relative">
        <ul class="uk-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom" uk-margin>
          <li>
            <router-link to="/api"><span><i class="fas fa-code" style="margin-right: 7px"></i>{{ $t('main.api') }}</span></router-link>
          </li>
          <li>
            <span><i class="fas fa-code-branch" style="margin-right: 7px"></i>{{ $t('main.version') }}<span ref="version"></span></span>
          </li>
          <li>
            <router-link to="/changelog"><i class="fas fa-tasks" style="margin-right: 7px"></i>{{ $t('main.changelogs') }}</router-link>
          </li>
          <li>
            <a href="https://discordapp.com/"><i class="fab fa-discord" style="margin-right: 7px"></i>{{ $t('main.community') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
