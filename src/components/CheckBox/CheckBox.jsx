import "./checkbox.css";

const variants = [
	"default",
	"variant2",
	"variant4",
	"variant5",
	"variant6",
	"variant7",
	"variant8",
    "variant9",
];

const CheckBox = ({ variant = "default", ...props }) => {
	const resolvedVariant = variants.includes(variant) ? variant : "default";

	return (
		<input
			id={variant}
			type="checkbox"
			className={`checkbox checkbox--${resolvedVariant}`}
			{...props}
		></input>
	);
};

export default CheckBox;
