import Section from './components/Section';
import './App.css';

import frisdranken from './img/frisdranken.png'
import groot from './img/groot.png'
import ijs from './img/ijs.png'
import klein from './img/klein.png'
import klein2 from './img/klein2.png'
import koffieThee from './img/koffie_thee.png'
import lichteBieren from './img/lichte_bieren.png'
import totaal from './img/totaal.png'
import vraagteken from './img/vraagteken.png'
import wijn from './img/wijn.png'
import zwareBieren from './img/zware_bieren.png'

const DATA = [
  {
    sectionTitle: 'Eten', data: [
      { title: 'Kaasschotel', img:frisdranken, prijs: 15 },
      { title: 'Croque met groentjes', img: frisdranken, prijs: 8 },
      { title: 'Croque uit het vuistje', img: frisdranken, prijs: 3 },
      { title: 'Potje ijs', img: frisdranken, prijs: 2 },
    ]
  },
  {
    sectionTitle: 'Frisdranken', data: [
      { title: 'Water Plat/Bruis', img: frisdranken, prijs: 2.2 },
      { title: 'Cola (zero)', img: frisdranken, prijs: 2.2 },
      { title: 'Limonade', img: frisdranken, prijs: 2.2 },
      { title: 'Ice Tea', img: frisdranken, prijs: 2.2 },
      { title: 'Fruitsap', img: frisdranken, prijs: 2.2 },
    ]
  },
  {
    sectionTitle: 'Wijnen', data: [
      { title: 'Water Plat/Bruis', img: frisdranken, prijs: 2.2 },
      { title: 'Cola (zero)', img: frisdranken, prijs: 2.2 },
      { title: 'Limonade', img: frisdranken, prijs: 2.2 },
    ]
  },
]

function App() {
  const onItemClicked = () => {

  }

  const sections = DATA.map(item => (
    <Section key={DATA.indexOf(item)} sectionTitle={item.sectionTitle} data={item.data} onItemClicked={onItemClicked} />
  ))

  return (
    <div className="App">
      <header className="header">
        <h1>Kassaprogramma Kaas- en Wijn</h1>
      </header>
      <main className="main">
        {sections}
      </main>
    </div>
  );
}

export default App;
