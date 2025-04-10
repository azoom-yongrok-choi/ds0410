<template>
  <PrimeButton
    @click="handleClick"
    :size="size"
    :severity="severity"
    :label="label"
    :disabled="disabled"
    :icon="icon ? `pi ${icon}` : undefined"
  />
</template>

<script setup lang="ts">
import { ButtonSizeEnum, ButtonSeverityEnum } from './Button.type'
import type { ButtonProps } from './Button.type'
import PrimeButton from 'primevue/button'

const {
  size = ButtonSizeEnum.medium,
  severity = ButtonSeverityEnum.primary,
  label = 'Button',
  disabled = false,
  icon,
  callback
} = defineProps<ButtonProps>()


const handleClick = () => {
  if (callback) {
    callback()
  }
}

</script>
