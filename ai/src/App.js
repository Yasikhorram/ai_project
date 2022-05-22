import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [newPrompt, setNewPrompt] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    console.log("clicked");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: newPrompt }),
    });
    const data = await response.json();
    console.log("data", data);
    console.log("data.result: -->", data.result);

    setResult(data.result);

    setNewPrompt("");
  }

  return (
    <div className="App">
      <Header />
      <Form
        setNewPrompt={setNewPrompt}
        newPrompt={newPrompt}
        onSubmit={onSubmit}
      />
      <div>{result}</div>
    </div>
  );
}

export default App;
