function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 focus-visible:ring-brand-500',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
