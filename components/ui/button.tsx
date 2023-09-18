import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center  justify-center rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800',
    {
        variants: {
            variant: {
                default: 'bg-[#F5F5DC] text-black hover:[#F5F5DC]/80',
                destructive: 'bg-red-500 text-slate-50 hover:bg-red-500/90',
                outline:
                    'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800',
                secondary:
                    'bg-slate-100 text-slate-900 hover:bg-slate-100/80 border border-black hover-shadow-neobrutalist transition-all duration-250',
                ghost: 'hover:bg-slate-100 hover:text-slate-900',
                link: 'text-slate-900 underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-full px-3',
                lg: 'h-11 rounded-full px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    // eslint-disable-next-line react/require-default-props
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
