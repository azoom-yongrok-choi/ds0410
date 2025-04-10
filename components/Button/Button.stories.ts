import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'
import { ButtonSizeEnum, ButtonSeverityEnum, ButtonIconEnum } from './Button.type'
import type { ButtonProps } from './Button.type'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Component: Story = {
  render: (args: ButtonProps) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" />'
  }),
  args: {
    label: 'Button',
    size: ButtonSizeEnum.medium,
    severity: ButtonSeverityEnum.primary,
    disabled: false,
    icon: undefined,
    callback: () => {
      console.log('callback')
    }
  },
  argTypes: {
    label: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSizeEnum)
    },
    severity: {
      control: 'select',
      options: Object.values(ButtonSeverityEnum)
    },
    disabled: {
      control: 'boolean'
    },
    icon: {
      control: 'select',
      options: [undefined, ...Object.values(ButtonIconEnum)]
    },
    callback: {
      action: 'callback',
      disableSaveFromUI: true
    }
  },
}
