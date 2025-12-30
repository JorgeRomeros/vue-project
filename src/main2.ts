import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import Counter from './examples/CounterOptions.vue'
//import router from './router'

const app = createApp(Counter)

//app.use(createPinia())
//app.use(router)

app.mount('#app')
