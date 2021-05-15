import moment from 'moment';
import { fraction, add, format } from 'mathjs';

import logo from './logo.svg';
import './App.css';

function App() {
  // this exact moment
  const right_now = moment();
  console.log(right_now);

  // format date for printing
  const right_now_format = right_now.format('dddd, MMM Do YYYY, h:mm:ss a');
  // eg: Saturday, May 15th 21, 1:18:59 pm

  // add 7 days to a date:
  const sevenDaysFromNow = right_now
    .add(7, 'days')
    .format('dddd, MMM Do YYYY, h:mm:ss a');

  // Lets do some math with mathjs
  const f1 = fraction(4, 7); // the fraction 4/7
  const f2 = fraction(3, 8); // the fraction 3/8
  const f3 = add(f1, f2); // the fraction 53/56
  const formatted_fraction = format(f3, { fraction: 'ratio' });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Problem. Reaction. Solution.</p>
        <p>This moment is {right_now_format}</p>
        <p>Seven days from now is: {sevenDaysFromNow}</p>

        <h2>Math is fun</h2>
        <p>4/7 + 3/8 = {formatted_fraction}</p>
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
