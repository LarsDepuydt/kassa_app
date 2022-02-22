import React from 'react';
import Section from './components/section';
import './App.css';

// import frisdranken from './img/frisdranken.png'
// import groot from './img/groot.png'
// import ijs from './img/ijs.png'
// import klein from './img/klein.png'
// import klein2 from './img/klein2.png'
// import koffieThee from './img/koffie_thee.png'
// import lichteBieren from './img/lichte_bieren.png'
// import totaal from './img/totaal.png'
// import vraagteken from './img/vraagteken.png'
// import wijn from './img/wijn.png'
// import zwareBieren from './img/zware_bieren.png'

const DATA = [
  {
    sectionTitle: 'Eten', data: [
      { title: 'Kaasschotel', img: 'test', prijs: 15 },
      { title: 'Croque met groentjes', img: 'test', prijs: 8 },
      { title: 'Croque uit het vuistje', img: 'test', prijs: 3 },
      { title: 'Potje ijs', img: 'test', prijs: 2 },
    ]
  },
  // {
  //   sectionTitle: 'Frisdranken', data: [
  //     { title: 'Water Plat/Bruis', img: frisdranken },
  //     { title: 'Cola (zero)', img: frisdranken },
  //     { title: 'Limonade', img: frisdranken },
  //     { title: 'Ice Tea', img: frisdranken },
  //     { title: 'Fruitsap', img: frisdranken },
  //   ]
  // },
  // {
  //   sectionTitle: 'Wijnen', data: [
  //     { title: 'Water Plat/Bruis', img: frisdranken },
  //     { title: 'Cola (zero)', img: frisdranken },
  //     { title: 'Limonade', img: frisdranken },
  //   ]
  // },
]

function App() {
  const sections = DATA.map(item => <Section key={DATA.indexOf(item)}  sectionTitle={item.sectionTitle} data={item.data} />)

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <main>
        {sections}
      </main>
    </div>
  );
}

export default App;
