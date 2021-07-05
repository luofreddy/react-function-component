/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import React from 'react';

const JumpWindow = ({jumpDisplay, setJumpDisplay}) => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top:0;    
    left: 0;
    display: ${jumpDisplay};
  `
  const KeyInPage = styled.div`
    display: ${jumpDisplay};
    width: 20%;
    height: 50%;
    background-color: #ddf;
    z-index: 3;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  `


  const closeJump = () =>{
    setJumpDisplay('none')
  }
  return (
    <div>
      <KeyInPage/>
      <Container onClick={ closeJump }>  
    </Container>
    </div>
    
  );
};

export default JumpWindow;