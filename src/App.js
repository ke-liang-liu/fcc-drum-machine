import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Container } from '@material-ui/core/';
import keys from './components/Keys';

const DrumPad = (props) => {
  const onClickHandler = () => {
    props.updateDisplayAndSound(props.keyObj.id, props.keyObj.keyLetter);
  }
  return (
    <Button
      style={{ height: 90 }}
      variant='contained'
      onClick={onClickHandler}
      fullWidth
    >
      {props.keyObj.keyLetter}
    </Button>
  );
}

function App() {
  const [display, setDisplay] = useState(String.fromCharCode(160));
  useEffect(() => {
    function handleKeyPress(e) {
      const key = keys.find(ele => ele.keyNum === e.keyCode)
      if (key) {
        updateDisplayAndSound(key.id, key.keyLetter);
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const updateDisplayAndSound = (str, clipLetterId) => {
    setDisplay(str);
    const sound = document.getElementById(clipLetterId);
    sound.currentTime = 0;
    sound.play();
  }

  return (
    <Container maxWidth='sm'>
      <Grid id='drum-machine' container justify='center' spacing={1}>
        <Grid item xs={12}>
          <Typography id="display" variant="h3" align='center' gutterBottom>
            {/* <div id="display" > */}
            {display}
            {/* </div> */}
          </Typography>
        </Grid>

        {keys.map(keyObj => {
          return (
            <Grid item xs={4} key={keyObj.keyNum}>
              <span className='drum-pad' id={keyObj.id}>
                <DrumPad keyObj={keyObj} updateDisplayAndSound={updateDisplayAndSound} />
                <audio className='clip' id={keyObj.keyLetter} src={keyObj.url}></audio>
              </span>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}

export default App;
