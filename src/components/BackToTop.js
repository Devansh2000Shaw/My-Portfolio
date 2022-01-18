import ScrollToTop from "react-scroll-to-top";

function BackToTop() {
  const myStyle = {
    background: "#24caac",
    borderRadius: "50px",
  };
  return (
    <div>
      <ScrollToTop smooth color="black" height="30px" style={myStyle} />{" "}
    </div>
  );
}
export default BackToTop;
