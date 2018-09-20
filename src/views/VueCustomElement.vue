<template>
  <chat-vue-custom-element :id="id" :name="name" :prefix="prefix" :thread.prop="thread" :msg.prop="msg" @sendMessage="sent"/>
</template>

<script>
export default {
  name: 'VueCustomElement',
  data () {
    return {
      thread: {
        img: 'https://vignette.wikia.nocookie.net/line/images/b/b7/1511.png/revision/latest?cb=20150809133444'
      },
      id: 99271,
      prefix: 'Mr.',
      name: 'Brown',
      msg: [
        { sender: 'user', message: 'Hello :)' },
        { sender: 'user', message: 'How are you ?' }
      ]
    }
  },
  methods: {
    sent (e) {
      const value = e.detail[0]
      console.log(value)
    }
  }
}
</script>
