import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core/';
import DrumPad from './components/DrumPad';
import keys from './components/Keys';
import Container from '@material-ui/core/Container';

function App() {
  const [display, setDisplay] = useState(String.fromCharCode(160));

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
