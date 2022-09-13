import React from 'react'
import { api } from '../../api/api'

type dollarPriceResponse = {
  USDBRL: Record<string, string>
}

const ExchangeRate = () => {

  const [dollarPrice, setDollarPrice] = React.useState<dollarPriceResponse>({USDBRL: {}});

  React.useEffect(() => {
    (async () => {
      await getDollarPrice();
    })()
  }, []);

  const getDollarPrice = async () => {
    const response = await api.dollarPrice();
    return setDollarPrice(response);
  }

  return (
    <div>
      <ul>
        {Object.keys(dollarPrice.USDBRL).map(item => (
          <li key={item}>{item}: {dollarPrice.USDBRL[item]}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExchangeRate