import './item.css'

interface Props {
  title: string
  img: string
  prijs: number
}

const item: React.FC<Props> = ({ title, img }) => {
  return (
    <div  className='box'>
      <img alt="" src={img} />
      <p>{title}</p>
    </div>
  )
}

export default item