function Responses({ result }) {
  return (
    <div>
      {result.map((item) => (
        <h2 className="response">{item.topic}</h2>
      ))}
    </div>
  );
}

export default Responses;
