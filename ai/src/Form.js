function Form({ setNewPrompt, newPrompt, onSubmit }) {
  return (
    <form className="addForm" onSubmit={onSubmit}>
      <label htmlFor="prompt">
        Enter prompt <em>* </em>
      </label>
      <textarea
        autoFocus
        required
        id="prompt"
        type="text"
        placeholder="Add Item"
        required
        rows="10"
        value={newPrompt}
        onChange={(e) => setNewPrompt(e.target.value)}
        placeholder="Enter an prompt"
      ></textarea>

      <button className="submit" type="submit" aria-label="submit prompt">
        Submit
      </button>
    </form>
  );
}

export default Form;
