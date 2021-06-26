import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'

import 'vuetify/dist/vuetify.css'

const app = createApp(App)

const vuetify = createVuetify() 
app.use(vuetify)

app.mount('#app')
