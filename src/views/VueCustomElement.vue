<template>
  <div>
    <div class="left" v-if="isReady">
      <chat-vue-custom-element :id="id" :name="name" :prefix="prefix" :thread.prop="thread" :msg.prop="msg" @sendMessage="sent"/>
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
  name: 'VueCustomElement',
  data () {
    return {
      isReady: false,
      thread: {
        img: 'https://vignette.wikia.nocookie.net/line/images/b/b7/1511.png/revision/latest?cb=20150809133444'
      },
      id: 99271,
      prefix: 'Mr.',
      name: 'Brown (vue-custom-element)',
      msg: [
        { sender: 'user', message: 'Hello :)' },
        { sender: 'user', message: 'How are you ?' }
      ],
      logs: []
    }
  },
  async created () {
    await SystemJS.import('../script/chat-vue-custom-element.js')
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

