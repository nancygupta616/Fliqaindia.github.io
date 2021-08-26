import React, {Component} from 'react';
import './App.scss';
import Navigation from './components/Navbar/Navigation';
import { Helmet } from 'react-helmet';

class App extends Component {
	render() {
	  return (
		<div id="App">
			 {/* <HelmetProvider> */}
      <div className="App">
        <Helmet>
          <title>FliqaIndia</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
      </div>
    {/* </HelmetProvider> */}
		  <Navigation />
		  
		</div>
	  );
	}
  }


export default App;


