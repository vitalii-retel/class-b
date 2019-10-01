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
          <div>8.30 - 9.05</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>2</div>
          <div>9.15 - 9.50</div>
          <div>20 хв.</div>
        </div>
        <div className="Bells-row">
          <div>3</div>
          <div>10.10 - 10.45</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>4</div>
          <div>10.55 - 11.30</div>
          <div>30 хв.</div>
        </div>
        <div className="Bells-row">
          <div>5</div>
          <div>12.00 - 12.35</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>6</div>
          <div>12.45 - 13.20</div>
          <div>10 хв.</div>
        </div>
        <div className="Bells-row">
          <div>7</div>
          <div>13.30 - 14.05</div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Bells;
