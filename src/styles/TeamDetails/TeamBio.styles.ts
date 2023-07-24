import styled from 'styled-components';
import LazyImage from '../../components/Loading/LazyImage';
import Grid from '@mui/material/Grid/Grid';

interface Props {
  mobile: boolean;
}

export const TeamBioContainer = styled(Grid)<Props>`
  align-items: ${(props) => props.mobile && 'center'};
  justify-content: ${(props) => props.mobile && 'center'};
  text-align: center;
`;

export const TeamBioImage = styled(LazyImage)<Props>`
  max-width: ${(props) => (props.mobile ? '10rem' : '17rem')};
  height: ${(props) => (props.mobile ? '6rem' : '8rem')};
`;

export const TeamBioNameEN = styled.h1<Props>`
  line-height: ${(props) => (props.mobile ? 1 : 1)};
  font-size: ${(props) => (props.mobile ? '1.5rem' : '2rem')};
`;

export const TeamBioNameJP = styled(TeamBioNameEN)``;

export const TeamBioYear = styled(TeamBioNameEN)``;
