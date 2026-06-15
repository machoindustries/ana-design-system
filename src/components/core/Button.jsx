const variantClasses = {
  primary: 'ds-button-primary',
  secondary: 'ds-button-secondary',
  accent: 'ds-button-accent',
  disabled: 'ds-button-disabled',
}

export function Button({ children, href, variant = 'primary', disabled = false, className = '', ...props }) {
  const classes = `ds-button ${disabled ? variantClasses.disabled : variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={disabled ? undefined : href} aria-disabled={disabled || undefined} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" disabled={disabled} {...props}>
      {children}
    </button>
  )
}
