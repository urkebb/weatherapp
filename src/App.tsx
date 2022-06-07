import React from 'react';
import Layout from './components/layout/main-layout';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Layout>
        <Search></Search>
      </Layout>
    </div>
  );
}

export default App;
