import React from "react";
import "./App.sass";
import { useState, useEffect } from "react";
// import { marked } from "marked";

let marked = require("marked");

function App() {
	return (
		<div>
			<div id="App-header">
				<h1>Markdown Previewer</h1>
			</div>
			<div id="App-content">
				<Editor />
			</div>
		</div>
	);
}

const Editor = (props) => {
	const [editorText, setEditorText] = useState("");

	const updateEditorText = (event) => {
		setEditorText(event.target.value);
	};

	useEffect(() => {
		setEditorText("Markdown example ## hi");
	});
	return (
		<div>
			<div>
				<textarea
					id="editor"
					type="text-area"
					value={editorText}
					onChange={updateEditorText}
					rows="5"
				></textarea>
			</div>

			<div dangerouslySetInnerHTML={{ __html: marked.parse(editorText) }}></div>
		</div>
	);
};

export default App;
