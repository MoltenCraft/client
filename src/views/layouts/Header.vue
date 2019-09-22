<script>
export default {
  name: 'Header'
}
</script>

<template>
    <div>
        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 200">
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-center uk-visible@m">
                    <ul class="uk-navbar-nav">
                        <li><router-link to="/">{{ $t('header.main') }}</router-link></li>
                        <li><router-link to="/materials">{{ $t('header.materials') }}</router-link></li>
                        <li><router-link to="/recipes">{{ $t('header.recipes') }}</router-link></li>
                        <li><router-link to="/toys">{{ $t('header.toys') }}</router-link></li>
                        <li><router-link to="/mounts">{{ $t('header.mounts') }}</router-link></li>
                    </ul>
                </div>
                <div class="uk-navbar-right uk-margin-right uk-visible@m">
                    <ul class="uk-navbar-nav">
                        <li><router-link to="/downloads">{{ $t('header.downloads') }}</router-link></li>
                        <li><router-link to="/changelog">{{ $t('header.changelog') }}</router-link></li>
                    </ul>
                </div>
                <a uk-navbar-toggle-icon href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-navbar-right uk-hidden@m uk-icon uk-navbar-toggle-icon"></a>
            </nav>
        </div>
        <div>
            <div id="offcanvas" uk-offcanvas="overlay: true">
                <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        <li><router-link to="/">{{ $t('header.main') }}</router-link></li>
                        <li><router-link to="/materials">{{ $t('header.materials') }}</router-link></li>
                        <li><router-link to="/recipes">{{ $t('header.recipes') }}</router-link></li>
                        <li><router-link to="/toys">{{ $t('header.toys') }}</router-link></li>
                        <li><router-link to="/mounts">{{ $t('header.mounts') }}</router-link></li>
                        <li class="uk-nav-divider"></li>
                        <li><router-link to="/downloads">{{ $t('header.downloads') }}</router-link></li>
                        <li><router-link to="/changelog">{{ $t('header.changelog') }}</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
