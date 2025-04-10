export enum ButtonSizeEnum {
    small = 'small',
    medium = 'medium',
    large = 'large'
  }

export enum ButtonSeverityEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  light = 'light',
  dark = 'dark'
}

export enum ButtonIconEnum {
  check = 'pi-check',
  close = 'pi-times',
  search = 'pi-search',
  plus = 'pi-plus',
  minus = 'pi-minus'
}

export type ButtonProps = {
  size?: ButtonSizeEnum
  severity?: ButtonSeverityEnum
  label?: string
  disabled?: boolean
  icon?: ButtonIconEnum
  callback?: () => void
}