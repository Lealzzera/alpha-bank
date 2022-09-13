import React from 'react'
import { api } from '../../api/api'

const ExchangeRate = () => {

  const [dollarPrice, setDollarPrice] = React.useState([]);

  React.useEffect(() => {
    getDollarPrice();
  }, []);

  const getDollarPrice = async () => {
    let response = await api.dollarPrice();
    return setDollarPrice(response);
  }

  return (
    <div>
      {dollarPrice}
    </div>
  )
}

export default ExchangeRate