import React from "react";
import "./Schedule.css";

function Schedule() {
  return (
    <div className="Schedule">
      <div className="Schedule-days">
        <div className="Schedule-day">
          <p className="Schedule-day-title">Понеділок</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">Вівторок</p>
          <ul>
            <li>Українська мова</li>
            <li>Я пізнаю світ</li>
            <li>Математика</li>
            <li>Фізична культура</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">Середа</p>
          <ul>
            <li>Українська мова</li>
            <li>Читання</li>
            <li>Англійська мова</li>
            <li>Математика</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">Четвер</p>
          <ul>
            <li>Я пізнаю світ</li>
            <li>Математика</li>
            <li>Англійська мова</li>
            <li>Мистецтво</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">П'ятниця</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="Schedule-day-notes">
        <p>Всі три зошити носіть разом</p>
      </div>
    </div>
  );
}

export default Schedule;
