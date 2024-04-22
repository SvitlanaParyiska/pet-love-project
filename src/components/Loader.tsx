import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Hearts
        height="100"
        width="100"
        color="#f6b83d"
        ariaLabel="hearts-loading"
        wrapperStyle={{
          display: "flex",
          position: "fixed",
          zIndex: "9999",
          top: "0",
          left: "0",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
