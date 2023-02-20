import { HeaderComp } from './HeaderComp/HeaderComp';
import { FormBlock } from './FormBlock/FormBlock';
import { Main } from './App.styled';


export const App = () => {
  return (
    <>
      <HeaderComp />
      <Main>
        <FormBlock />
      </Main>
    </>
  );
};
