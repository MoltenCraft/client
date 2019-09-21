<script>
export default {
  name: 'NotFound'
}
</script>

<template>
    <div class="notfound">
        <h1 class="numbers">{{ $t('notFound.number') }}</h1>
        <p class="description">{{ $t('notFound.message') }}</p>
    </div>
</template>

<style lang="less" scoped>
.notfound {
    & h1 {
        &.numbers {
            font-size: 8em;
            text-align: center;
            margin-top: 18%;
        }
    }

    & p {
        &.description {
            font-size: 3em;
            text-align: center;
        }
    }
}
</style>
