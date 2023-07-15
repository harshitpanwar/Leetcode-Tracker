import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logoutUser } from '../../Actions/User'
import { useDispatch } from 'react-redux'
import { Menu, X } from 'lucide-react'
import gitHubLogo from '../../assets/github-mark.svg'

// import leetCodeLogo from '../../../public/leetcode-logo.webp'
const Header = (props) => {

  const Navigate = useNavigate();
  const selector = useSelector((state) => state.user);
  const { user, loading, isAuthenticated } = selector;
  const dispatch = useDispatch();
  const menuItems = [
    {
      name: 'Home',
      href: '#',
      navigate: '/',
    },
    {
      name: 'About',
      href: '#',
      navigate: '/about',
    },
    {
      name: 'Contribute',
      href: 'https://www.github.com/harshitpanwar/LeetCode-Tracker',
      navigate: 'https://www.github.com/harshitpanwar/LeetCode-Tracker',
    },
  ];

  const styles = {
    container: 'relative w-full bg-white',
    innerContainer: 'mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8',
    logoContainer: 'inline-flex items-center space-x-2',
    logo: 'w-30 h-30',
    logoText: 'font-bold',
    menuContainer: 'hidden grow items-start lg:flex',
    menuItem: 'ml-12 inline-flex space-x-8',
    menuItemLink: 'flex items-center justify-center flex-row rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    //make item in list centered vertically and horizontally and flex direction row
    githubLogo: 'ml-5',
    buttonSignIn: 'mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    buttonLogIn: 'rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    mobileMenuButton: 'h-6 w-6 cursor-pointer',
    mobileMenu: 'absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden',
    mobileMenuContainer: 'divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5',
    mobileMenuContent: 'px-5 pb-6 pt-5',
    mobileMenuHeader: 'flex items-center justify-between',
    mobileMenuLogoContainer: 'inline-flex items-center space-x-2',
    mobileMenuCloseButton: 'inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    mobileMenuNavigation: 'mt-6',
    mobileMenuItem: '-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50',
    mobileMenuLink: 'flex items-center justify-center flex-row ml-3 text-base font-medium text-gray-900',
    mobileMenuIcon: 'ml-3 h-4 w-4',
    mobileMenuButtons: 'mt-2 space-y-2',
    mobileMenuSignInButton: 'w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    mobileMenuLogInButton: 'w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const handleLogout = () => {
    
    //dispatch logout
    dispatch(logoutUser());

    alert("Logged out successfully");
    
    //redirect to home page
    Navigate('/');

  }

  const handleNavigate = (event) =>{

    console.log(event.target.value );
    if(event.target.value === 'Home'){
      Navigate('/');
    }
    else if(event.target.value === 'About'){
      Navigate('/about');
    }
    else if(event.target.value === 'Contribute'){
      
      //navigate to github repo
      window.location.href = 'https://www.github.com/harshitpanwar/LeetCode-Tracker';
      
    }
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <span>
          
          </span>
          <span className={styles.logoText}>Code Tracker</span>
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.menuItem}>
            {menuItems.map((item) => (
              <li key={item.name} className={styles.listItem}>
                <button
                  className={styles.menuItemLink}
                  value={item.name}
                  onClick={handleNavigate}
                >
                  {item.name}
                  {item.name === 'Contribute'?<img src={gitHubLogo} className={styles.githubLogo} height='20px' width='20px' alt="GitHub Logo" />:null}

                </button>
                <span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
              
          {
            loading?
            null:
            !isAuthenticated?          
            <button
              type="button"
              className={styles.buttonSignIn}
              onClick={(e) => { e.preventDefault(); Navigate('/login')}}
            >
              Admin Sign In
            </button>:
            <button
              type="button"
              className={styles.buttonSignIn}
              onClick={handleLogout}
            >
              Logout
            </button>
  

          }

        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className={styles.mobileMenuButton} />
        </div>
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContainer}>
              <div className={styles.mobileMenuContent}>
                <div className={styles.mobileMenuHeader}>
                  <div className={styles.mobileMenuLogoContainer}>
                    <span>
                      <svg
                        className={styles.logo}
                        width="30"
                        height="30"
                        viewBox="0 0 50 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG path */}
                      </svg>
                    </span>
                    <span className={styles.logoText}>DevUI</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className={styles.mobileMenuCloseButton}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className={styles.mobileMenuNavigation}>
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.name}
                        href={item?.href}
                        onClick={(e) => { e.preventDefault(); console.log(item); Navigate(item?.navigate)}}
                        className={styles.mobileMenuItem}
                      >
                        <span className={styles.mobileMenuLink}>
                          {item.name}
                          {item.name === 'Contribute'?<img src={gitHubLogo} className={styles.githubLogo} height='20px' width='20px' alt="GitHub Logo" />:null}
                        </span>
           
                      </button>
                    ))}
                  </nav>
                </div>
                <div className={styles.mobileMenuButtons}>
                  <button
                    type="button"
                    className={styles.mobileMenuSignInButton}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className={styles.mobileMenuLogInButton}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  }

export default Header