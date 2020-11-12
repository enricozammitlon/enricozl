import React from 'react';
import FirebaseContext from './context';

function withFirebase(Child) {
  return () => {
    return (
      <FirebaseContext.Consumer>
        {(ref) => {
          return <Child firebaseRef={ref} />;
        }}
      </FirebaseContext.Consumer>
    );
  };
}
export default withFirebase;
