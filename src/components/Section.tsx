import './Section.css'
import Item from "./Item"

type ItemData = {
  title: string,
  img: string,
  price: number,
  id: number,
  
}

interface Props {
  sectionTitle: string,
  data: ItemData[],
  clear: boolean,
  onItemClicked: (id: number, newNumber: number) => void,
}

const section: React.FC<Props> = ({ sectionTitle, data, clear, onItemClicked }) => {
  const items = data.map(item => (
    <Item
      key={data.indexOf(item)}
      title={item.title}
      img={item.img}
      price={item.price}
      id={item.id}
      clear={clear}
      onItemClicked={onItemClicked} />
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