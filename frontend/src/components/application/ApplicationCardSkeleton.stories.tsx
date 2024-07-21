import { ApplicationCardSkeleton } from "./ApplicationCard"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ApplicationCardSkeleton> = {
  component: ApplicationCardSkeleton,
}

export default meta
type Story = StoryObj<typeof ApplicationCardSkeleton>

export const Primary: Story = {
  args: {},
}

export const InACard: Story = {
  args: {
    inACard: true,
  },
}
