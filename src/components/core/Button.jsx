const variantClasses = {
  primary: 'ds-button-primary',
  secondary: 'ds-button-secondary',
  accent: 'ds-button-accent',
  disabled: 'ds-button-disabled',
}

export function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const classes = `ds-button ${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
