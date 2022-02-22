import './section.css'
import Item from "./item"

type ItemData = {
  title: string
  img: string
  prijs: number
  //img: ImgHTMLAttributes<HTMLImageElement>
}

interface Props {
  sectionTitle: string
  data: ItemData[]
}

const section: React.FC<Props> = ({ sectionTitle, data }) => {
  const items = data.map(item => <Item key={data.indexOf(item)} title={item.title} img={item.img} prijs={item.prijs} />)

  return (
    <div className='wrapper'>
      <h2 className='h2'>{sectionTitle}</h2>
      <div className='innerWrapper'>
        {items}
      </div>
    </div>
  )
}

export default section