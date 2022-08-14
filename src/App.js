import Button from './components/Button';

function App() {
	const Colors = ["red", "green", "orange", "blue"];
	return (
		<div className="App">
			<h2>
				Click the button to change the button background colour!
			</h2>
			<Button Colors={Colors} />
		</div>
	);
}

export default App;
