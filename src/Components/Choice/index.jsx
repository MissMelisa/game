import "./styles.css";

function Choice({ onClick, src, alt }) {
  return (
    <div onClick={onClick}>
      <img className="images" src={src} alt={alt} />
    </div>
  );
}
export default Choice;
