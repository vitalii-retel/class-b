import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Bells from './Bells/Bells';
import Schedule from './Schedule/Schedule';

const pages = [
  { label: 'Розклад', id: 'schedule'},
  { label: 'Розклад дзвінків', id: 'bells'},
]

class App extends React.Component {
  constructor() {
    super();
    this.state = pages[0];
    this.onChangePage = (page) => { this.setState(page); }
  }

  renderContent() {
    switch (this.state.id) {
      case 'schedule':
        return <Schedule />;
      case 'bells':
        return <Bells />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Старокостянтинівська школа №9, 1-Б клас
          </p>
        </header>
        <div className="App-blocks">
          <div className="App-menu">
            <Menu pages={pages} currentPage={this.state} onPageSelect={this.onChangePage} />
          </div>
          <div className="App-content">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
