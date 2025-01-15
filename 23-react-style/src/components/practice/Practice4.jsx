import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
`;

const appLogoSpinAnimation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${appLogoSpinAnimation} 20s linear infinite;
`;

const MyA = styled.a`
  color: #61dafb;
`;

function Practice4() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt='app' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
export default Practice4;
