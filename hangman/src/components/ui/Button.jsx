const skins = {
  primary:
    'bg-blue-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-blue-700',
  primaryInverted:
    'border border-blue-500 text-blue-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-blue-700 hover:text-white',
};

export const Button = ({
  skin,
  children,
  element = 'button',
  className = '',
  ...props
}) => {
  let cssClasses = skins[skin || 'primary'];
  const Element = element;

  if (className.length > 0) {
    cssClasses = `${cssClasses} ${className}`;
  }

  return (
    <Element className={cssClasses} {...props}>
      {children}
    </Element>
  );
};

export default Button;
