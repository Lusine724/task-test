import React from 'react'
import cls from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.bottomLine}></div>
      <div className={cls.footerInfo}>
        <p>Поддержка</p>
        <div className={cls.versionMudule}>
          <p>Версия модуля CORE: v1.3.0 </p>
          <p>Версия модуля SOD: v1.3.0</p>
        </div>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer