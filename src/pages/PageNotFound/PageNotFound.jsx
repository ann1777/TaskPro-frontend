import NotFound from '../../shared/components/PageNotFound/PageNotFound';
import Navigation from '../../shared/components/Navigation/Navigation';
import { GlobalStyles } from '../../shared/components/styles/GlobalStyles.styled';

const PageNotFound = () => {
  return (
    <>
      <GlobalStyles />
      <NotFound />
      <Navigation />
    </>
  );
};

export default PageNotFound;
