import React from 'react';
import Header from '../../components/Header/Header';
import cellphoneHandImg from '../../assets/cellphoneHand.png';
import './HomePage.css';
import ButtonAlpha from '../../components/ButtonAlpha/ButtonAlpha';

const HomePage = () => {

  const handleButton = () => {

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
  </>
}

export default HomePage