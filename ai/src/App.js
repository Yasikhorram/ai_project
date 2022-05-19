import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
function App() {
  const [newPrompt, setNewPrompt] = useState("");
  console.log("newPrompt is", newPrompt);

  return (
    <div className="App">
      <Header />
      <Form setNewPrompt={setNewPrompt} newPrompt={newPrompt} />
    </div>
  );
}

export default App;
