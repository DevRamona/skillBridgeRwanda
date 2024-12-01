import spinner from "../utils/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "150px", margin: "auto", display: "hidden" }}
    />
  );
}

export default Spinner;
