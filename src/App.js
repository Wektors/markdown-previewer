import React from "react";
import "./App.sass";
import { useState, useEffect } from "react";
import { marked } from "marked";
import markdownExample from "./markdownExample";

function App() {
	return (
		<div>
			<div id="App-header">
				<h1>Markdown Previewer</h1>
			</div>
			<div>
				<EditorAndPreview />
			</div>
		</div>
	);
}

const EditorAndPreview = (props) => {
	const [editorText, setEditorText] = useState("");

	const updateEditorText = (event) => {
		setEditorText(event.target.value);
	};

	let [count] = useState(0);

	useEffect(() => {
		setEditorText(markdownExample);
		count++;
	}, [count]);

	return (
		<div id="App-content">
			<div id="editor">
				<textarea
					type="text-area"
					value={editorText}
					onChange={updateEditorText}
					rows="5"
				></textarea>
			</div>
			<div
				id="preview"
				dangerouslySetInnerHTML={{ __html: marked.parse(editorText) }}
			></div>
		</div>
	);
};

export default App;
