const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;