import React from "react";
import "./Schedule.css";

function Schedule() {
  return (
    <div className="Schedule">
      <div className="Schedule-days">
        <div className="Schedule-day">
          <p className="Schedule-day-title">Понеділок</p>
          <ul>
            <li>Математика</li>
            <li>Англійська мова</li>
            <li>Читання</li>
            <li>Українська мова</li>
            <li>Я пізнаю світ</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">Вівторок</p>
          <ul>
            <li>Я пізнаю світ</li>
            <li>Математика</li>
            <li>Я пізнаю світ</li>
            <li>Я пізнаю світ</li>
            <li>Фізична культура</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">Середа</p>
          <ul>
            <li>Музика</li>
            <li>Англійська мова</li>
            <li>Я пізнаю світ</li>
            <li>Українська мова</li>
            <li>Читання</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">Четвер</p>
          <ul>
            <li>Я пізнаю світ</li>
            <li>Математика</li>
            <li>Я пізнаю світ</li>
            <li>Я пізнаю світ</li>
            <li>ГТС (Вих.година 20 хв)</li>
          </ul>
        </div>
        <div className="Schedule-day">
          <p className="Schedule-day-title">П'ятниця</p>
          <ul>
            <li>Англійська мова</li>
            <li>Фізична культура</li>
            <li>Українська мова</li>
            <li>Читання</li>
          </ul>
        </div>
      </div>
      <div className="Schedule-day-notes">
        <p>Всі три зошити носіть разом</p>
        <p>Тоненький зошит у клітинку на англійську мову</p>
      </div>
    </div>
  );
}

export default Schedule;
