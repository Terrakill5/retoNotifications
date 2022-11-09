<template>
  <section class="d-flex flex-column mx-3 my-2 seccion" :class="{ fondo: mainProps.new }">
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <img
        :src="mainProps.imagen"
        :alt="'imagen de' + mainProps.name"
        class="mx-3 my-auto"
      />
      <div class="d-flex mt-3">
        <p>
          <a class="fw-bold nombre">{{ mainProps.name }} </a>
          <span class="color-text px-2"> {{ mainProps.text }}</span>
          <a class="fw-bold action" v-if="mainProps.actionName">{{
            mainProps.actionName
          }}</a>
          <br /><span class="color-text">{{ mainProps.time }}</span>
        </p>
      </div>
      </div>
      <div class="flex-grow-1 mt-3">
        <img
          v-if="mainProps.imagenDerecha"
          :src="mainProps.imagenDerecha"
          class=""
        />
      </div>
      
    </div>

    <div v-if="mainProps.message" class="border mensaje px-3">
      <p v-if="mainProps.message" class="color-text">{{ mainProps.message }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const mainProps = defineProps<{
  imagen: string;
  name: string;
  text: string;
  actionName?: string;
  time: string;
  message?: string;
  imagenDerecha?: string;
  new?: boolean;
}>();
</script>

<style scoped lang="scss">
$blue: hsl(219, 85%, 26%);
$verylightgrayishblue: hsl(210, 60%, 98%);
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

.mensaje {
  margin-left: 68px;
  width: 85%;
  padding-top: 1rem;
}

.seccion {
  max-width: 650px;
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
