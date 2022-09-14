import React from 'react'
import { api } from '../../api/api'
import './ExchangeRate.css'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


type dollarPriceResponse = {
  USDBRL: Record<string, string>
};

type euroPriceResponse = {
  EURBRL: Record<string, string>
};

type bitcoinPriceResponse = {
  BTCBRL: Record<string, string>
};

type ethereumPriceResponse = {
  ETHBRL: Record<string, string>
}

type Props = {
  classExchange?: string,
}

const ExchangeRate = ({ classExchange }: Props) => {

  const [dollarPrice, setDollarPrice] = React.useState<dollarPriceResponse>({ USDBRL: {} });

  const [euroPrice, setEuroPrice] = React.useState<euroPriceResponse>({ EURBRL: {} });

  const [bitcoinPrice, setBitcoinPrice] = React.useState<bitcoinPriceResponse>({ BTCBRL: {} });

  const [ethereumPrice, setEthereumPrice] = React.useState<ethereumPriceResponse>({ ETHBRL: {} })

  React.useEffect(() => {
    (async () => {
      await getDollarPrice();
      await getEuroPrice();
      await getBitcointPrice();
      await getEthereumPrice();
    })()
  }, []);

  const getDollarPrice = async () => {
    try {
      const response = await api.dollarPrice();
      return setDollarPrice(response);
    } catch (error) {
      console.error(error);
    }
  }

  const getEuroPrice = async () => {
    try {
      const response = await api.euroPrice();
      return setEuroPrice(response);
    } catch (error) {
      console.error(error);
    }
  }

  const getBitcointPrice = async () => {
    try {
      const response = await api.bitCoinPrice();
      return setBitcoinPrice(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getEthereumPrice = async () => {
    try {
      const response = await api.ethereumPrice();
      return setEthereumPrice(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classExchange}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>{`${dollarPrice.USDBRL.code} / ${dollarPrice.USDBRL.codein}: R$${dollarPrice.USDBRL.bid} | `}
          <p className='text-green-600'> {` | high: ${dollarPrice.USDBRL.high} | `}</p>
          <p className='text-red-600'> {` | low: ${dollarPrice.USDBRL.low}`}</p>
        </SwiperSlide>
        <SwiperSlide>{`${euroPrice.EURBRL.code} / ${euroPrice.EURBRL.codein}: R$${euroPrice.EURBRL.bid} | `}
          <p className='text-green-600'> {` | high: ${euroPrice.EURBRL.high} | `}</p>
          <p className='text-red-600'> {` | low: ${euroPrice.EURBRL.low}`}</p>
        </SwiperSlide>
        <SwiperSlide>{`${bitcoinPrice.BTCBRL.code} / ${bitcoinPrice.BTCBRL.codein}: R$${bitcoinPrice.BTCBRL.bid} | `}
          <p className='text-green-600'> {` | high: ${bitcoinPrice.BTCBRL.high} | `}</p>
          <p className='text-red-600'> {` | low: ${bitcoinPrice.BTCBRL.low}`}</p>
        </SwiperSlide>
        <SwiperSlide>{`${ethereumPrice.ETHBRL.code} / ${ethereumPrice.ETHBRL.codein}: R$${ethereumPrice.ETHBRL.bid} | `}
          <p className='text-green-600'> {` | high: ${ethereumPrice.ETHBRL.high} | `}</p>
          <p className='text-red-600'> {` | low: ${ethereumPrice.ETHBRL.low}`}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExchangeRate