import React, { useState } from 'react';
import './App.css';

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  if (quarter > 4) {
    setQuarter(1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">3</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button
            onClick={() => setLionsScore(lionsScore + 7)}
            className="homeButtons__touchdown"
          >
            Lions Touchdown
          </button>
          <button
            onClick={() => setLionsScore(lionsScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="gameButtons">
          <button
            onClick={() => setQuarter(quarter + 1)}
            className="gameButtons__changeQuarter"
          >
            Change Quarter
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setTigersScore(tigersScore + 7)}
            className="awayButtons__touchdown"
          >
            Tigers Touchdown
          </button>
          <button
            onClick={() => setTigersScore(tigersScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
