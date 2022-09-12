import React from 'react';
import './Header.css';
import alphaLogo from '../../assets/alphabankLogo1.png'
import ButtonAlpha from '../ButtonAlpha/ButtonAlpha';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const contentButtonMiddle = [
    'Accounts',
    'Manage',
    'Financial Products',
    'Pay',
    'More',
    'Blog'
  ];

  const handleButton = (): void => {

  }

  const activateMenuMobile = (): void => {
    const menuMobile = document.querySelector('#menu-mobile-template');
    menuMobile?.classList.toggle('activate');
  }

  return (
    <header className='menu-header'>
      <nav className='menu-nav mx-6 my-2'>
        <div className='menu-content icons'>
          <div className='menu-icon-mobile'>
            <MenuIcon onClick={activateMenuMobile} />
          </div>
          <div className='div-logo'>
            <img src={alphaLogo} alt="logo" className='logo-alpha cursor-pointer' />
          </div>
        </div>
        <div className='menu-content middle'>
          {contentButtonMiddle.map((text, index) => (
            <>
              <ButtonAlpha classButton='rounded hover:bg-neutral-100 hover:text-emerald-600 p-2 mx-2' handleClick={handleButton} text={text} key={index} />
            </>
          ))}
        </div>
        <div className='menu-content mx-8'>
          <ButtonAlpha classButton='online-bank-button rounded hover:bg-neutral-100 text-emerald-600 p-2 mx-2' text='Online Banking' handleClick={handleButton} />
          <ButtonAlpha classButton='open-bank-account-button rounded hover:text-neutral-100 hover:drop-shadow-md bg-emerald-600 text-white p-2 mx-2' text='Open Bank Account' handleClick={handleButton} />
        </div>
      </nav>
      <nav id='menu-mobile-template' className='bg-emerald-700 text-neutral-100 '>
        <ul className='list-items-mobile'>
          {contentButtonMiddle.map((item, index) => (
            <li className='py-2 px-4 cursor-pointer hover:bg-emerald-800' key={index}>{item}</li>
          ))}
        </ul>
        <p className='py-2 px-4 cursor-pointer hover:bg-emerald-800'>Online Banking</p>
      </nav>
    </header>
  )
}

export default Header