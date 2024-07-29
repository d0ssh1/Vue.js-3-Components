const app = Vue.createApp({})
    .component('notification-message', {
        template: '#notification-message-template',
        props: {
            type: {type: String, default: 'Info'},
            header: {type: String, default: 'Info'}
        },
        data() {
            return {
                show: true
            }
        }
    })
    .mount('#app')