import { useState } from "react";
import "./button.css"

const Button = ({
  children = "Button",
  className = "",
  ...props
}) => {
  const [variant, setVariant] = useState("default");

	const handleMouseEnter = () => {
		setVariant("variant2");
	};

	const handleMouseLeave = () => {
		setVariant("default");
	};

	const handleMouseDown = () => {
		setVariant("variant3");
	};

	const handleMouseUp = () => {
		setVariant("variant2");
	};

  return (
		<button
			type="button"
			className={`button button--${variant} ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button
