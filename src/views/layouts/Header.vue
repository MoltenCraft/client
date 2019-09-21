<script>
export default {
  name: 'Header'
}
</script>

<template>
    <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 200">
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                    <li><router-link to="/">{{ $t('header.main') }}</router-link></li>
                    <li><router-link to="/materials">{{ $t('header.materials') }}</router-link></li>
                    <li><router-link to="/recipes">{{ $t('header.recipes') }}</router-link></li>
                    <li><router-link to="/toys">{{ $t('header.toys') }}</router-link></li>
                    <li><router-link to="/mounts">{{ $t('header.mounts') }}</router-link></li>
                    <li><router-link to="/changelog">{{ $t('header.changelog') }}</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
