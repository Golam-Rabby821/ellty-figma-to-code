import { useReducer, useRef } from "react";
import "./AllPagesRow.css";
import HomeCheckBox from "./HomeCheckBox";

const transitions = {
	default: { hover: "variant2" },

	variant2: {
		press: "variant3",
		leave: "default",
	},

	variant3: {
		click: "variant4",
	},

	variant4: {
		leave: "variant5",
	},

	variant5: {
		hover: "variant6",
	},

	variant6: {
		press: "variant7",
		leave: "variant5",
	},

	variant7: {
		hover: "variant8",
	},
	variant8: {
		leave: "default",
	},
};

function reducer(state, action) {
	return transitions[state]?.[action] ?? state;
}

export default function AllPagesRow() {
	const [state, dispatch] = useReducer(reducer, "default");
	const isHovering = useRef(false);

	const handleMouseEnter = () => {
		isHovering.current = true;
		dispatch("hover");
	};

	const handleMouseLeave = () => {
		isHovering.current = false;
		dispatch("leave");
	};

	const handlePress = () => {
		dispatch("press");

		if (isHovering.current) {
			dispatch("hover");
		}
	};

	const handleClick = () => {
		dispatch("click");

		if (isHovering.current) {
			dispatch("hover");
		}
	}

	return (
		<div
			className="all-pages-row"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handlePress}
			onTouchStart={handlePress}
			onClick={handleClick}
		>
			<div className="all-pages-text">All pages</div>
			<div className="checkbox-frame">
				<HomeCheckBox variant={state} />
			</div>
		</div>
	);
}
