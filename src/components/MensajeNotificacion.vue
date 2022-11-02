<template>
<div class="d-flex fondo mx-3 my-2">
    <img :src="mainProps.imagen" :alt="'imagen de '+ mainProps.name" />
    <a class="fw-bold nombre">{{mainProps.name}} </a>  <p class="color-text px-2"> {{mainProps.text}}</p> <a class="fw-bold action" v-if="mainProps.actionName">{{mainProps.actionName}}</a>
    <p><br>{{mainProps.time}}</p>
    <p v-if="mainProps.message">{{mainProps.message}}</p>
    <img v-if="mainProps.imagenDerecha" :src="mainProps.imagenDerecha" />
</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
const mainProps = defineProps<{
  imagen: string,
  name: string,
  text: string,
  actionName?: string,
  time: string,
  message?: string,
  imagenDerecha?: string,
}>();
</script>

<style scoped lang="scss">
$blue: hsl(219, 85%, 26%);
$verylightgrayishblue:hsl(210, 60%, 98%);
$Grayishblue: hsl(219, 14%, 63%);
img {
  width: 32px;
  height: 32px;
}

p {
  font-size: 1rem;
}

.fondo {
  background-color: $verylightgrayishblue;
}

.color-text {
  color: $Grayishblue;
}

a {
  text-decoration: none;
}

.nombre {
  color: black;
}

.action {
  color: $blue;
}

a:link {
  color: $blue;
}
a:visited {
  color: $Grayishblue;
}
a:hover {
  color: red;
}
a:active {
  color: $blue;
}
</style>