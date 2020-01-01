import React from 'react';
import { Button } from '@material-ui/core';

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

export default DrumPad;