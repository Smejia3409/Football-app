import Spinner from "react-bootstrap/Spinner";

export const LoadingScreen = () => {
  return (
    <div className="loading-screen  ">
      <div className="container d-flex justify-content-center align-items-center vw-100 vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};
