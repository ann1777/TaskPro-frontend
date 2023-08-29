import { Header } from "../../shared/components/Header/Header";
import { Sidebar } from "../../shared/components/Sidebar/Sidebar";
import { GlobalStylesHome } from "../../shared/components/styles/GlobalStyles.styled";

export const HomePage = () => {
  return (
    <>
      <GlobalStylesHome />
      <Sidebar />
      <Header />
    </>
  );
};
