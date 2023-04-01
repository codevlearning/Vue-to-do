import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './registerServiceWorker'
import wb from "./registerServiceWorker";


const app = createApp(App)
app.config.globalProperties.$workbox = wb;

loadFonts()

app.use(vuetify)
  .mount('#app')
