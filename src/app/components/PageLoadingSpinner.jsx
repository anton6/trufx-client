import styled from 'styled-components';
import Spinner from 'react-spinkit';

const StyledSpinner = styled(Spinner).attrs({
  name: 'circle',
})`
  transform: scale(2);
  margin: auto;
  width: 50%;
`;

export default StyledSpinner;
