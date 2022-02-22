import { useEffect, useState } from 'react'
import {ReactComponent as PlusSvg} from '../img/plus-round.svg';
import {ReactComponent as MinSvg} from '../img/minus-round.svg';
import './Item.css'

interface Props {
  title: string,
  img: string,
  prijs: number,
  onItemClicked: (quantity: number) => void,
}

const Item: React.FC<Props> = ({ title, img, prijs, onItemClicked }) => {
  const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    onItemClicked(quantity)
  }, [quantity, onItemClicked])

  return (
    <div className='box' onClick={() => setQuantity(quantity + 1)} >
      <img alt="" src={img} />
      <p>{title}, € {prijs}</p>
      <div className='buttonDiv'>
        <button className={'buttonMin'} onClick={() => setQuantity(quantity - 1)}>
          <MinSvg width={20} height={20} fill={'black'} />
        </button>
        <input type="number" onChange={event => setQuantity(Number(event.target.value) || 0)} value={quantity} />
        <button  className={'buttonPlus'} onClick={() => setQuantity(quantity + 1)}>
          <PlusSvg width={20} height={20} fill={'black'} />
        </button>
      </div>
    </div>
  )
}

export default Item
