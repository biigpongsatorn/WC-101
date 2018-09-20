<template>
  <div>
    <div class="left">
      <chat-vue-web-component-wrapper :id="id" :name="name" :prefix="prefix" @sendMessage="sent"/>
    </div>
    <div class="right">
      <chat-log :logs="logs"/>
    </div>
  </div>
</template>

<script>
import ChatLog from '@/components/ChatLog.vue'

export default {
  name: 'VueWebComponentWrapper',
  data () {
    return {
      id: 99271,
      prefix: 'Mr.',
      name: 'Brown (vue-web-component-wrapper)',
      logs: []
    }
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
