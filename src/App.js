import React from "react";
import "./App.sass";
import { useState, useEffect } from "react";
import { marked } from "marked";
import markdownExample from "./markdownExample";

const App = () => {
	const [darkMode, setDarkMode] = React.useState(false);

	React.useEffect(() => {
		const json = localStorage.getItem("site-dark-mode");
		const currentMode = JSON.parse(json);
		if (currentMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	React.useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div>
			<div id="App-header">
				<h1>Markdown Previewer</h1>
				<button
					className="dark-mode-toggle"
					onClick={() => {
						setDarkMode(!darkMode);
					}}
				>
					{darkMode ? (
						<img
							alt="moon icon"
							width="20vw"
							src="https://cdn-icons-png.flaticon.com/512/4489/4489231.png"
						></img>
					) : (
						<img
							alt="moon icon"
							width="20vw"
							src="https://cdn-icons-png.flaticon.com/512/4623/4623236.png"
						></img>
					)}
				</button>
			</div>
			<div>
				<EditorAndPreview />
			</div>
		</div>
	);
};

const EditorAndPreview = () => {
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
			<div className="editor">
				<h1 className="editor-title">Editor</h1>
				<textarea
					id="editor"
					value={editorText}
					onChange={updateEditorText}
				></textarea>
			</div>
			<div className="preview">
				<h1 className="preview-title">Previewer</h1>
				<div
					id="preview"
					dangerouslySetInnerHTML={{ __html: marked.parse(editorText) }}
				></div>
			</div>
		</div>
	);
};

export default App;
