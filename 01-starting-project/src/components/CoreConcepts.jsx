export default function CoreConcept({ image, title, textDescription }) {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{textDescription}</p>
      </li>
    </>
  );
}
