<template>
  <div>
    <div class="left" v-if="isReady">
      <chat-vue-web-component-wrapper :id="id" :name="name" :prefix="prefix" @sendMessage="sent"/>
    </div>
    <div class="left" v-else>
      loading...
    </div>
    <div class="right">
      <chat-log :logs="logs"/>
    </div>
  </div>
</template>

<script>
import ChatLog from '@/components/ChatLog.vue'
import SystemJS from 'systemjs/dist/system-production.js'

export default {
  name: 'VueWebComponentWrapper',
  data () {
    return {
      isReady: false,
      id: 99271,
      prefix: 'Mr.',
      name: 'Brown (vue-web-component-wrapper)',
      logs: []
    }
  },
  async mounted () {
    // await SystemJS.import('https://unpkg.com/vue@2.5.17/dist/vue.js')
    await SystemJS.import('../script/chat-vue-web-component-wrapper.js')
    this.isReady = true
  },
  methods: {
    sent (e) {
      this.logs.push(e.detail[0])
    }
  },
  components: {
    ChatLog
  }
}
</script>

<style scoped>
.left {
  float: left;
  width: calc(100% - 1px - 200px);
}
.right {
  float: left;
  width: 200px;
  border-left: 1px solid #ccc;
  height: 100vh;
}
</style>
