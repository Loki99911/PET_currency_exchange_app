import { ContainerComp } from 'components/ContainerComp/ContainerComp';
import ReqForm from 'components/ReqForm/ReqForm';
import { FormTitle, FormWraper } from './FormBlock.styled';

export const FormBlock = () => {
  return (
    <ContainerComp>
      <FormWraper id="formBlock">
        <>
          <FormTitle>Currency exchange</FormTitle>
          <ReqForm />
        </>
      </FormWraper>
    </ContainerComp>
  );
};
