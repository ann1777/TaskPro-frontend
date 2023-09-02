import Welcome from "../../shared/components/Welcome/Welcome";
import Navigation from "../../shared/components/Navigation/Navigation";
import { GlobalStyles } from "../../shared/components/styles/GlobalStyles.styled";

const WelcomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Welcome />
      <Navigation />
    </>
  );
};

export default WelcomePage;
