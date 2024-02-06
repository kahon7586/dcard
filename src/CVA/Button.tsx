import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(["transition-colors", "text-white"], {
  variants: {
    variant: {
      default: ["bg-dcard-light", "hover:bg-dcard-light-hover"],
      ghost: ["bg-transparent"],
      category: ["w-full", "text-dcard-text", "bg-transparent", "hover:bg-dcard-hover"],
    },
    size: {
      default: ["text-center", "rounded-lg", "py-1", "px-3"],
      icon: ["flex", "justify-center", "items-center", "aspect-square", "w-8"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonStyles({ variant, size }), className)}
      {...props}></button>
  )
}

export default Button
