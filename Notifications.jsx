import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

// Context is primarily used when some data needs to be accessible by many components at different nesting levels.

import { SocketContext } from '../Context';

// Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
