import React from 'react';
import Header from '../../components/Header/Header';
import cellphoneHandImg from '../../assets/cellphoneHand.png';
import './HomePage.css';
import ButtonAlpha from '../../components/ButtonAlpha/ButtonAlpha';
import cellphoneImg from '../../assets/cellphone.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePage = () => {

  const handleButton = () => {
    //todo: function to put on button
  }
  return <>
    <Header classHeader='header' />
    <section className='open-account-adv'>
      <div className='first-section-text bg-emerald-600'>
        <h2 className='text-neutral-50 font-bold text-2xl lg:text-4xl'>The bank you'll love</h2>
        <span className='paragraf text-md lg:text-lg text-neutral-50'>Alpha Bank is The Mobile Bank, helping you manage your bank account on-the-go, track your expenses and set aside money in real-time. Open yours in minutes right from your smartphone, and start spending before your physical card arrives.
        </span>
        <div className='buttons'>
          <ButtonAlpha classButton='button-alpha font-bold text-emerald-600 bg-emerald-100 hover:bg-emerald-300 hover:text-neutral-50 rounded p-2 mx-2' text='Open Bank Account' handleClick={handleButton} />
          <ButtonAlpha classButton='button-alpha-none border rounded p-2 mx-2' text='Open Bank Account' handleClick={handleButton} />
        </div>
      </div>
      <div className='div-img'>
        <img src={cellphoneHandImg} alt="hand With Cellphone" />
      </div>
    </section>
    <section className='free-account'>
      <div className='div-img'>
        <img src={cellphoneImg} alt="cellphone" />
      </div>
      <div className='second-section-text'>
        <h2 className='second-section-title font-bold text-2xl lg:text-4xl text-slate-900'>Your FREE Alpha bank account</h2>
        <span className='second-section-text-span text-md lg:text-lg mt-10 text-slate-900'>Get your free bank account in just 8 minutes and manage your money right from your smartphone. Discover smart features that give you more control over your finances. Get a virtual Mastercard right after opening your account—and connect it with Apple Pay or Google Pay to start spending right away.
        </span>
        <br />
        <p>Prefer a physical bank card? Order it for a one-time delivery fee.</p>
        <a className='second-section-button mt-10 ext-md font-bold lg:text-lg mt-10 text-slate-900' href="/">Open your free bank account <ArrowForwardIosIcon /></a>
      </div>
    </section>
  </>
}

export default HomePage