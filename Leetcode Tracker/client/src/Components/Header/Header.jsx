import React from 'react'
import leetCodeLogo from '../../../public/leetcode-logo.webp'
const Header = () => {
  const styles={
    navDiv:`bg-slate-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700`,
    wrapper:`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`,
    logoWrapper:`flex items-center`,
    logoImg:`h-8 mr-3`,
    logoText:`self-center text-3xl font-bold whitespace-nowrap dark:text-white`,
    navUlWrapper:`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 divide-x divide-amber-200`,
    navItem:"block py-2 pl-3 pr-4 text-stone-800 text-lg hover:text-xl hover:text-bold hover:text-amber-400",
    btnDesign:``
  }
  return (
    <div>
      <nav className={styles.navDiv}>
  <div className={styles.wrapper}>
    <a href="/" className="flex items-center">
        <img src={leetCodeLogo} className={styles.logoImg} alt=" Logo" />
        <span className={styles.logoText}>Leetcode Tracker</span>
    </a>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className={styles.navUlWrapper}>
        <li>
          <a href="/" className={styles.navItem} aria-current="page"><button className={styles.btnDesign}>Home</button></a>
        </li>
        
        <li>
          <a href="#" className={styles.navItem}><button className={styles.btnDesign}>About</button></a>
        </li>
        <li>
          <a href="https://github.com/harshitpanwar/Leetcode-Tracker" className={styles.navItem}><button className={styles.btnDesign}>Contribute</button></a>
        </li>
        <li>
          <a href="#" className={styles.navItem}><button className={styles.btnDesign}>Contact</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header