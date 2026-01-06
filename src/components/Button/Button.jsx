import "./button.css"

const Button = ({
  variant = "default",
  children = "Button",
  ...props
}) => {
  const resolvedVariant = ["variant2", "variant3"].includes(variant)
    ? variant
    : "default"

  return (
    <button
      type="button"
      className={`button button--${resolvedVariant}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
