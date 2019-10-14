import React from "react";
import "./Bells.css";

class Bells extends React.Component {
  render() {
    return (
      <div className="Bells">
        <div className="Bells-row Bells-header">
          <div>Урок</div>
          <div>Час</div>
          <div>Перерва</div>
        </div>
        <div className="Bells-row">
          <div>1</div>
          <div>8.30 - 9.15</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>2</div>
          <div>9.25 - 10.10</div>
          <div>20 хв.</div>
        </div>
        <div className="Bells-row">
          <div>3</div>
          <div>10.30 - 11.15</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>4</div>
          <div>11.25 - 12.10</div>
          <div>20 хв.</div>
        </div>
        <div className="Bells-row">
          <div>5</div>
          <div>12.30 - 13.15</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>6</div>
          <div>13.25 - 14.10</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>7</div>
          <div>14.20 - 15.05</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>8</div>
          <div>15.15 - 16.00</div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Bells;
