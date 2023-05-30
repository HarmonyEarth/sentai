import styled from 'styled-components';
import LazyImage from '../../components/Loading/LazyImage';
import { Grid } from '@mui/material';

interface Props {
  mobile: boolean;
}

export const TeamBioContainer = styled(Grid)<Props>`
  align-items: ${(props) => props.mobile && 'center'};
  justify-content: ${(props) => props.mobile && 'center'};
`;

export const TeamBioImage = styled(LazyImage)<Props>`
  /* height: 10rem; */
  max-width: ${(props) => (props.mobile ? '10rem' : '17rem')};
  max-height: 8rem;
`;

export const TeamBioNameEN = styled.h1<Props>`
  line-height: 0.5;
  font-size: ${(props) => (props.mobile ? '1.5rem' : '2.5rem')};
`;

export const TeamBioNameJP = styled(TeamBioNameEN)``;

export const TeamBioYear = styled(TeamBioNameEN)``;
