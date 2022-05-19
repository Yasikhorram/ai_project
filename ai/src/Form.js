function Form({ setNewPrompt, newPrompt }) {
  return (
    <form className="addForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="prompt">
        Enter prompt <em>* </em>
      </label>
      <textarea
        autoFocus
        id="prompt"
        type="text"
        placeholder="Add Item"
        required
        rows="10"
        value={newPrompt}
        onChange={(e) => setNewPrompt(e.target.value)}
        placeholder="Enter your prompt"
      ></textarea>

      <button type="submit" aria-label="submit prompt">
        Submit
      </button>
    </form>
  );
}

export default Form;
