function Spinner({ show }) {
  return (
    <div
      id="spinner"
      className={`bg-white position-fixed top-0 start-0 w-100 vh-100 d-flex align-items-center justify-content-center 
      ${show ? "show" : ""}`}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
