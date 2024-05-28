import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/header/header';
import { Intro } from '../components/intro/intro';
import { Pose } from '../components/pose/pose';

const text = "Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem. Postupně se seznámíte se základními principy jógy, jak přístupovat k sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu svoje tělo, pocity a emoce."
const title = 'Jogíni'
const heading = 'Vítejte mezi Jogíny'


document.querySelector('#root').innerHTML = render(
  <div id="app" className="app container">
      <>
      <Header title = {title}/>
      <Intro heading = {heading}
             text = {text} />
      <Pose />
      </>
  </div>
);
