import "./App.css";
import Button from "./components/Button/Button";
import PagesRow from "./components/CheckBox/PagesRow";

function App() {
	return (
		<>
			<div className="app-container">
				<div className="form-container">
					<PagesRow label="All Pages" />

					<div className="divider">
						<span className="divider-line"></span>
					</div>
					<div className="pages-section">
						<PagesRow label="Page 1" className="page-1 page-common" />
						<PagesRow label="Page 2" className="page-2 page-common" />
						<PagesRow label="Page 3" className="page-3 page-common" />
						<PagesRow label="Page 4" className="page-4 page-common" />
						<PagesRow label="Page 5" className="page-5 page-common" />
						<PagesRow label="Page 6" className="page-6 page-common" />
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
