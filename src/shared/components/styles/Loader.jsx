import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
`;

const Loader = () => {
  return (
    <Spinner>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#bedbb0", "#1F1F1F", "#9DC888", "#1F1F1F", "#bedbb0"]}
      />
    </Spinner>
  );
};

export default Loader;
