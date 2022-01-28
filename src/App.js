import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  .button{
    width: 200px;
    height: 100px;

    border: black 1px solid;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

`

function App() {

  const handleClick = e => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r}, ${g}, ${b})`
    console.log('event: ', e)
    console.log(rgb);
    console.log('herheh', e.target.parentElement.style.backgroundColor)
    e.target.parentElement.style = `background-color: ${rgb}`;
    
  }


  return (
    <div className="App">
      <StyledApp>
        <div className='button' onClick={handleClick}>Click here to change the background color</div>
      </StyledApp>
    </div>
  );
}

export default App;
