<template>
  <div>
    <h1>Logs</h1>
    <ul>
      <li v-for="(l, i) in logs" :key="i">
        Send by: {{ l.sender }}, Message: {{ l.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChatLog',
  props: ['logs']
}
</script>
