/* eslint-disable import/no-unresolved */
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {
  Container,
  ContainerInfo,
  ContainerLogo,
  ContainerSocias,
  Image,
  Text,
  ContainerTop,
  ContainerBottom,
} from './styles';
import Logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContainerTop>
        <ContainerLogo>
          <Image src={Logo} alt="ImageFooter" width="200" height="200" />
        </ContainerLogo>
        <ContainerInfo>
          <div>
            <Text>loren loren</Text>
            <Text>loren loren</Text>
            <Text>loren loren</Text>
          </div>
          <div>
            <Text>loren loren</Text>
            <Text>loren loren</Text>
            <Text>loren loren</Text>
          </div>
          <div>
            <Text>loren loren</Text>
            <Text>loren loren</Text>
            <Text>loren loren</Text>
          </div>
        </ContainerInfo>
        <ContainerSocias>
          <TwitterIcon fontSize="large" style={{ color: '#fff' }} />
          <WhatsAppIcon fontSize="large" style={{ color: '#fff' }} />
          <InstagramIcon fontSize="large" style={{ color: '#fff' }} />
        </ContainerSocias>
      </ContainerTop>

      <ContainerBottom>
        <Text>@2021 Copyright - Devair Augusto da Silva</Text>
      </ContainerBottom>
    </Container>
  );
};

export default Footer;
