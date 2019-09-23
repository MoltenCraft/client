<script>
import marked from 'marked'
import axios from 'axios'

export default {
  name: 'Changelog',
  mounted () {
    axios.get('https://raw.githubusercontent.com/MoltenCraft/client/master/CHANGELOG.md')
      .then(response => { this.$refs.logs.innerHTML = this.parse(response.data) })
  },
  methods: {
    parse (markdown) {
      let section
      const renderer = new marked.Renderer()
      renderer.list = text => `<ul class="uk-list">${text}</ul>`
      renderer.listitem = function (text) {
        let label = ''
        switch (section) {
          case 'Added':
            label = 'uk-label-success'
            break
          case 'Fixed':
            label = 'uk-label-warning'
            break
          case 'Removed':
          case 'Security':
            label = 'uk-label-danger'
            break
          case 'Deprecated':
            label = 'uk-label-deprecated'
        }
        return `<li class="uk-flex uk-flex-top">
                  <span class="uk-label ${label} uk-margin-right uk-text-center uk-width-small tm-label-changelog uk-flex-none">${section}</span>
                    <div>${text}</div>
                </li>`
      }
      renderer.heading = (text, level) => {
        text = text.replace(/(\(.*?\))/, '<span class="uk-text-muted">$1</span>')
        if (level === 2) {
          return '<h' + level + ' class="uk-h3">' + text + '</h' + level + '>'
        }
        if (level === 3) {
          section = text
        }
        return ''
      }
      return marked(markdown, { renderer })
    }
  }
}
</script>

<template>
  <div class="uk-section tm-section-texture uk-preserve-color">
    <div class="uk-section" uk-height-viewport="expand: true">
      <div class="uk-container uk-container-small">
        <h1 class="uk-margin-medium uk-text-center">{{ $t('changelogs.header') }}</h1>
        <div ref="logs"></div>
      </div>
    </div>
  </div>
</template>
