import { createApp } from 'vue';
import App from './App.vue';
import MensajeNotificacion from "./components/MensajeNotificacion.vue";

const app = createApp(App);

app.component('mensaje-notificacion', MensajeNotificacion);

app.mount('#app');
