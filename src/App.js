import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ping from 'ping-monitor';

const monitors = [];
const urls = [];

function App() {

  var websites = [
    {
      url: "www.google.com",
      interval: 1
    }
  ];

  websites.forEach(function (website) {

    let monitor = new Ping ({
      website: website.url,
      interval: website.interval
    });

    monitor.on('up', function (res) {
        console.log('Yay!! ' + res.website + ' is up.');
    });


    monitor.on('down', function (res) {
      console.log('down \n' + 
       'time       : ' + res.time + '\n' + 
       'status code: ' + res.statusCode + '\n' +
       'latency    : ' + res.latency);
    });


    monitor.on('error', function (res) {
      console.log('error ' + res.website);
    });


    monitor.on('stop', function (website) {
        console.log(website + ' monitor has stopped.');
    });


    urls.push(website.url);
    monitors.push(monitor);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
