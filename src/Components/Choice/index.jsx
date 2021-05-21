import "./styles.css";

function Choice({ onClick, image, alt }) {
  return (
    <div onClick={onClick}>
      <img className="images" src={image} alt={alt} />
    </div>
  );
}
export default Choice;
