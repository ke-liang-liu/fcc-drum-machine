import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';

const DrumPad = (props) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  function handleKeyPress(e) {
    if (e.keyCode === props.keyObj.keyNum) {
      onClickHandler();
    }
  }

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

export default DrumPad;