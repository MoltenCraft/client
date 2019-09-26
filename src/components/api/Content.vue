<script>
/* eslint-disable */
export default {
  name: 'API'
}
</script>

<template>
  <div>
      <h1 class="uk-margin-medium uk-text-center">{{ $t('api.header') }}</h1>
      <p>Endpoints for MoltenCraft database content.</p>
      <p>The MoltenCraft API host name follows the format: <code>https://moltencraft.com/api/</code></p>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body">
        <p class="uk-card-title"><span class="uk-label">GET</span><code style="font-size: 16.5px"> materials/</code></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
            <li><a href="#">Request</a></li>
            <li><a href="#">Response</a></li>
        </ul>
        <ul class="uk-switcher uk-margin">
            <li>
              <table class="uk-table uk-table-divider">
                  <thead>
                      <tr>
                          <th>Parameters</th>
                          <th>Type</th>
                          <th>Description</th>
                      </tr>
                  </thead>
                  <tfoot>
                      <tr>
                          <td>Table Footer</td>
                          <td>Table Footer</td>
                          <td>Table Footer</td>
                      </tr>
                  </tfoot>
                  <tbody>
                      <tr>
                          <td>Table Data</td>
                          <td>Table Data</td>
                          <td>Table Data</td>
                      </tr>
                      <tr>
                          <td>Table Data</td>
                          <td>Table Data</td>
                          <td>Table Data</td>
                      </tr>
                  </tbody>
              </table>
            </li>
            <li>
              <pre v-highlightjs><code class="json">{
  "naber": "iyidir"
}</code></pre>
            </li>
        </ul>
      </div>
  </div>
</template>

<style>

</style>
