<template>
  <div>
    搜索
    <h1>{{$route.params}}</h1>
    <h1>{{$route.query}}</h1>
    {{keyword}}
    {{k}}
  </div>
</template>

<script>
export default {
  name:'search',
  props:['keyword','k']
}
</script>

<style>

</style>