export default function Player({ playerNames, onSetName, ref }) {
  return (
    <section id="player">
      <h2>Welcome {playerNames ?? "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={ref} />
        <button onClick={onSetName}>Set Name</button>
      </p>
    </section>
  );
}
