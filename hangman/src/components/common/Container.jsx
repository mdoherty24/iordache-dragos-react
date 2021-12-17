export const Container = ({ children, className }) => {
  if (!className) {
    className = 'container mx-auto p-4';
  }

  return <div className={className}>{children}</div>;
};

export default Container;
