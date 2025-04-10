<template>
  <PrimeButton
    @click="handleClick"
    :size="size"
    :severity="severity"
    :label="isClicked ? 'Clicked!' : label"
    :disabled="isClicked || disabled"
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

const isClicked = ref(false)

const handleClick = () => {
  isClicked.value = true
  if (callback) {
    callback()
  }
}

watch(isClicked, (value: boolean) => {
  if (value) {
    setTimeout(() => {
      isClicked.value = false
    }, 500)
  }
})
</script>
