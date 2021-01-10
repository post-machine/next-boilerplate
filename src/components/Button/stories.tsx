import { Meta, Story } from '@storybook/react/types-6-0';

import Button from '.';

export default {
    title: 'Button',
    component: Button,
    args: {
        title: 'title asd',
    }
} as Meta;

export const Basic: Story = (args) => <Button { ...args } />