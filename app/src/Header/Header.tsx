import * as React from 'react';
import './Header.css';

export default class Header extends React.Component {
  public render() {
    return (
      <div className="Header Section">
        <h1 id="App-Header">ffdraft.app</h1>
        <p>A fantasy football draft tool</p>
        <p>
          Pick players using their{' '}
          <a
            href="https://en.wikipedia.org/wiki/Value_over_replacement_player"
            target="_blank">
            value over replacement
          </a>{' '}
          from{' '}
          <a href="http://games.espn.com/ffl/tools/projections" target="_blank">
            expert
          </a>{' '}
          <a
            href="https://www.cbssports.com/fantasy/football/stats/weeklyprojections/QB"
            target="_blank">
            predictions
          </a>{' '}
          and{' '}
          <a
            href="https://www.easports.com/madden-nfl/player-ratings"
            target="_blank">
            Madden
          </a>
        </p>
        <p>
          <a href="https://github.com/JJTimmons/ff" target="_blank">
            Source code
          </a>
        </p>
      </div>
    );
  }
}
