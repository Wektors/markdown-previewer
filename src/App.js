import "./App.sass";

function App() {
	return (
		<div>
			<div id="App-header">
				<h1>Markdown Previewer</h1>
			</div>
			<div id="App-content">
				<Editor />
				<Preview />
			</div>
		</div>
	);
}

function Editor() {
	return (
		<div>
			<textarea id="editor" type="text-area" rows="5"></textarea>
		</div>
	);
}

function Preview() {
	return (
		<div>
			<textarea id="preview" type="text-area" rows="5"></textarea>
		</div>
	);
}

export default App;
