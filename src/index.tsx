import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import Form from './form';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <header>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <h1>Hospital Map Search</h1>
          </Grid>
        </header>
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Form />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
