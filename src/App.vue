<template>
  <main class="d-flex justify-content-center align-items-center vh-100 vw-100">
    <div class="fondo">
      <header class="d-flex flex-row justify-content-between m-4">
        <div class="d-flex flex-row">
          <h1 class="fw-bold px-2">Notifications</h1>
          <button class="number_notification rounded-3">
            {{ number_notification }}
          </button>
        </div>

        <button class="mark" @click.once="readed">Mark all as read</button>
      </header>

      <mensaje-notificacion
        :imagen="'https://imgur.com/wXwOouR.jpg'"
        name="Mark Webber"
        text="reacted to your recent post"
        time="1m ago"
        actionName="My first tournament today!"
        :new="nuevo"
      ></mensaje-notificacion>
      <mensaje-notificacion
        :imagen="'https://imgur.com/CEyrLJc.jpg'"
        name="Angela Gray"
        text="followed you"
        time="5m ago"
        :new="nuevo"
      ></mensaje-notificacion>
      <mensaje-notificacion
        :imagen="'https://imgur.com/1CuQYMl.jpg'"
        name="Jacob Thompson"
        text="has joined your group"
        time="1 day ago"
        actionName="Chess Club"
        :new="nuevo"
      ></mensaje-notificacion>

      <mensaje-notificacion
        :imagen="'https://imgur.com/VqZ073J.jpg'"
        name="Rizky Hasanuddin"
        text="sent you a private message"
        time="5 days ago"
        :message="messageText"
      ></mensaje-notificacion>
      <mensaje-notificacion
        :imagen="'https://imgur.com/XwvL6M6.jpg'"
        name="Kimberly Smith"
        text="commented on your picture"
        time="1 week ago"
        :imagenDerecha="'https://imgur.com/R5RQgwq.jpg'"
      ></mensaje-notificacion>
      <mensaje-notificacion
        :imagen="'https://imgur.com/5heoqEf.jpg'"
        name="Nathan Peterson"
        text="reacted to your recent post"
        time="2 weeks ago"
        actionName="5 end-game strategies to increase your win rate"
      ></mensaje-notificacion>
      <mensaje-notificacion
        :imagen="'https://imgur.com/NJjxyzY.jpg'"
        name="Anna Kim"
        text="left the group"
        time="2 weeks ago"
        actionName="Chess Club"
      ></mensaje-notificacion>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
let number_notification = ref(3);
let messageText =
  "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.";
let nuevo = ref(true);
const readed = () => {
  nuevo.value = false;
  number_notification.value = 0;
};
</script>

<style lang="scss">
$rojo: hsl(1, 90%, 64%);
$blue: hsl(219, 85%, 26%);
$verylightgrayishblue: hsl(210, 60%, 98%);
$lightgrayishblue1: hsl(211, 68%, 94%);
$lightgrayishblue2: hsl(205, 33%, 90%);
$Grayishblue: hsl(219, 14%, 63%);
$Darkgrayishblue: hsl(219, 12%, 42%);
$Verydarkblue: hsl(224, 21%, 14%);

main {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: $verylightgrayishblue;
}

.fondo {
  background-color: white;
}

h1 {
  font-size: 1.4rem;
}

.mark {
  border: none;
  background-color: transparent;
  color: $Darkgrayishblue;
  &:active {
    color: $blue;
  }
}

.number_notification {
  background-color: $blue;
  color: white;
  padding: 1px 10px !important;
}
</style>
