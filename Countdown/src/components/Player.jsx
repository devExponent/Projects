export default function Player({ enterPlayerNames, onSetName, ref }) {
  return (
    <section id="player">
      <h2>Welcome {enterPlayerNames ? enterPlayerNames : "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={ref} />
        <button onClick={onSetName}>Set Name</button>
      </p>
    </section>
  );
}
