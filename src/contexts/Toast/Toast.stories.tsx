import { Meta } from '@storybook/react'

import { Button, Stack } from '@mui/material'
import type { ReactNode } from 'react'

import useToast, { HandleToastArgs, ToastType } from 'hooks/useToast'
import { Toast } from './Toast'

const meta: Meta<HandleToastArgs> = {
  tags: ['autodocs'],
  title: 'Contexts/Toast',
  component: Toast,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: { summary: undefined },
      description: 'Toast message',
      type: { name: 'string', required: false },
    },
    options: {
      control: 'object',
      defaultValue: { summary: {} },
      description: 'Toast options',
      type: { name: 'other', value: '' },
    },
    type: {
      control: 'radio',
      defaultValue: { summary: 'default' },
      description: 'Toast color and icon type',
      options: ['default', 'error', 'info', 'success', 'warning'],
      type: { name: 'string', required: false },
    },
  },
}
export default meta

const Wrapper = ({ children }: { children: ReactNode }) => (
  <Stack
    alignItems="center"
    flexDirection="row"
    gap={1}
    height={256}
    justifyContent="center"
    width={424}
  >
    <Toast />
    {children}
  </Stack>
)

export const Sample = (args: HandleToastArgs) => {
  const { handleToast } = useToast()

  return (
    <Wrapper>
      <Button
        color={args.type === 'default' ? 'inherit' : args.type}
        onClick={() =>
          handleToast({
            ...args,
            message: args.message || args.type,
          })
        }
        variant="contained"
      >
        TOAST
      </Button>
    </Wrapper>
  )
}
Sample.args = {
  type: 'success',
}

export const Multiple = () => {
  const { handleToast } = useToast()

  const buttons: ToastType[] = [
    'default',
    'error',
    'info',
    'success',
    'warning',
  ]

  return (
    <Wrapper>
      {buttons.map(type => (
        <Button
          key={type}
          color={type === 'default' ? 'inherit' : type}
          onClick={() =>
            handleToast({
              message: type,
              type,
            })
          }
          variant="contained"
        >
          {type.toUpperCase()}
        </Button>
      ))}
    </Wrapper>
  )
}
