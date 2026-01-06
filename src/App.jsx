import "./App.css";
import Button from "./components/Button/Button";
import AllPagesRow from "./components/CheckBox/AllPagesRow";
import CheckBox from "./components/CheckBox/CheckBox";

function App() {
	return (
		<>
			<div className="app-container">
				<div className="form-container">
					<AllPagesRow />

					<div className="divider">
						<span className="divider-line"></span>
					</div>
					<div className="pages-section">
						<div className="page-1 page-common">
							<div className="all-pages-text">Page 1</div>
							<div className="all-pages-checkbox-frame">
								<CheckBox variant="variant2" />
							</div>
						</div>
						<div className="page-2 page-common">
							<div className="all-pages-text">Page 2</div>
							<div className="all-pages-checkbox-frame">
								<CheckBox variant="variant2" />
							</div>
						</div>
						<div className="page-3 page-common">
							<div className="all-pages-text">Page 3</div>
							<div className="all-pages-checkbox-frame">
								<CheckBox variant="variant2" />
							</div>
						</div>
						<div className="page-4 page-common">
							<div className="all-pages-text">Page 4</div>
							<div className="all-pages-checkbox-frame">
								<CheckBox variant="variant2" />
							</div>
						</div>
						<div className="page-5 page-common">
							<div className="all-pages-text">Page 5</div>
							<div className="all-pages-checkbox-frame">
								<CheckBox variant="variant2" />
							</div>
						</div>
						<div className="page-6 page-common">
							<div className="all-pages-text">Page 6</div>
							<div className="all-pages-checkbox-frame">
								<CheckBox variant="variant2" />
							</div>
						</div>
					</div>
					<div className="divider">
						<span className="divider-line"></span>
					</div>
					<div className="done-button-section">
						<Button>Done</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
