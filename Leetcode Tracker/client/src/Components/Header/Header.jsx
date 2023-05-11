import React from 'react'
// import leetCodeLogo from '../../../public/leetcode-logo.webp'
const Header = (props) => {
  const styles={
    navDiv:`bg-slate-200 border-gray-200`,
    wrapper:`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`,
    logoWrapper:`flex items-center`,
    logoImg:`h-8 mr-3`,
    logoText:`self-center text-3xl font-bold whitespace-nowrap`,
    navUlWrapper:`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white `,
    navItem:"block py-2 pl-3 pr-4 text-stone-800 text-lg hover:text-xl hover:text-bold hover:text-amber-400",
    btnDesign:``,
    authBtnDesign:`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center type="button">Dropdown hover <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"`,
  }

  const auth = props.auth;
  return (
    <div>
      <nav className={styles.navDiv}>
  <div className={styles.wrapper}>
    <a href="/" className="flex items-center">
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarcello-dev.github.io%2Fimg%2Flc.png&f=1&nofb=1&ipt=bbd245babd1f55938f1cd1fdb9aeb17b758f5b75246170f8e5b41cad605c9852&ipo=images' className={styles.logoImg} alt=" Logo" />
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
        {
        //if authenticated then show logout button else show login button
        auth?
        <li>
          <a href="#" className={styles.navItem}><button className={styles.authBtnDesign}>Logout</button></a>
        </li>
        :<li>
          <a href="#" className={styles.navItem}><button className={styles.authBtnDesign}>Login</button></a>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header