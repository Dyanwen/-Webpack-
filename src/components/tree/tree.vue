<template>
    <div class="wrap">
        <div class="menu-wrap">
            <div class="menu-item" v-for="menuItem in treeList" :key="menuItem.id">
                {{menuItem.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import treeList from './index.js'
    export default {
        data(){
            return{
                treeList:treeList
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>