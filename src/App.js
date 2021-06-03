import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {NewsProvider} from './context/NewsProvider'
import NewsListing from './components/NewsListing'
function App() {
  return (
    
      <Router>
        <NewsProvider>
        <Switch>
          <Route exact path="/" component={NewsListing}/>
          </Switch>
          </NewsProvider>
        </Router>

    
  );
}

export default App;
