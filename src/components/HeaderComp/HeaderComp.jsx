import { ContainerComp } from '../ContainerComp/ContainerComp';
import { Header, HeaderLink } from './HeaderComp.styled';
import logo from '../../Img/logo.svg';

export const HeaderComp = () => {
  return (
    <Header>
      <ContainerComp>
        <HeaderLink href="https://privatbank.ua/udalenniy-banking/privat24">
          <img src={logo} alt="logo" />
        </HeaderLink>
      </ContainerComp>
    </Header>
  );
};
