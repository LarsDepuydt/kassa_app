import './Section.css'
import Item from "./Item"

type ItemData = {
  title: string,
  img: string,
  prijs: number,
}

interface Props {
  sectionTitle: string
  data: ItemData[]
  onItemClicked: (newNumber: number, sectionNumber: number) => void,
}

const section: React.FC<Props> = ({ sectionTitle, data, onItemClicked }) => {
  const items = data.map(item => (
    <Item
      key={data.indexOf(item)}
      title={item.title}
      img={item.img}
      prijs={item.prijs}
      onItemClicked={(newNumber: number) => onItemClicked(newNumber, data.indexOf(item))} />
  ))

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