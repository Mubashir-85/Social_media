const Welcome = ({ handleOnclick }) => {
  return (
    <>
      <center className="items-center mt-5">
        <h1>Welcome To Social App</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnclick}
        >
          Fetch
        </button>
      </center>
    </>
  );
};
export default Welcome;
