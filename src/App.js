import React from "react";
import injectSheet from "react-jss";

const App = ({ classes }) => {
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.inner}>1</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>2</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>3</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>4</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>5</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  row: {
    display: 'flex',
  },
  box: {
    background: 'purple',
    margin: 5,
    fontWeight: 'bold',
    color: 'white',
    flex: '1 0 auto',
    position: 'relative',
    '&:after': {
      content: "''",
      float: 'left',
      display: 'block',
      paddingTop: '100%',
    }
  },
  inner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
export default injectSheet(styles)(App);
