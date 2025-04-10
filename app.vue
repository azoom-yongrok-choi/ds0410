<template>
  <div>
    <Button label="Click" :icon="ButtonIconEnum.check" />
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue'
import { ButtonIconEnum } from './components/Button/Button.type'
</script>
