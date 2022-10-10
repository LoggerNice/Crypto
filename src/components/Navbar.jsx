import React from 'react'
import { Link } from "react-router-dom";

import s from './Navbar.module.css'

function Navbar() {
  return (
    <div className='py-12'>
      <ul className={s.block__inner}>
        <Link to="/permutation" className={s.link}>Метод шифрующих таблиц с перестановкой</Link>
        <Link to="/square" className={s.link}>Метод магического квадрата</Link>
        <Link to="/trisemus" className={s.link}>Метод шифрующей таблицы Трисемуса</Link>
      </ul>
    </div>
)
}

export default Navbar