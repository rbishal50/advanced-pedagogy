import React, { Component } from 'react';
import Layout from './Student/hoc/Layout/Layout';
import Dashboard from './Student/containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
		<Layout>
			<Dashboard />
		</Layout>
    );
  }
}

export default App;
