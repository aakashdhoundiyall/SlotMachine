import React from 'react';

export const StartButton = (props) => (
    <button className="StartButton" id="submit" onClick={props.clicked}>Start Slot</button>
)

export const StopButton = (props) => (
  <button className="StopButton" onClick={props.clicked}>Stop Slot</button>
)
