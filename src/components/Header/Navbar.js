import { HashLink } from "react-router-hash-link"
import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="header__logo container">
        <span className="header__logo__logo">Лого</span>
      </div>

      <nav className="header__navbar">
        <div className="container">
          <ul className="header__navlist">
            <HashLink smooth to="/#aboutUs"><li className="nav-link">О нас </li></HashLink>
            <HashLink smooth to="/#advantages"><li className="nav-link">Как это работает</li></HashLink>
            <HashLink smooth to="/#feedbacks"><li className="nav-link">Отзывы</li></HashLink>
            <HashLink smooth to="/#contacts"><li className="nav-link disabled">Контакты</li></HashLink>
          </ul>
        </div>
      </nav>
    </>
  )
}