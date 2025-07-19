const variantClasses = {
  primary: "bg-primary text-white hover:bg-blue-600",
  secondary: "bg-white text-primary outline",
  black: "bg-black text-white hover:bg-red-600",
};

function Button({ type = "", variant = "primary", children, className = "" }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 z-10 rounded-md ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
