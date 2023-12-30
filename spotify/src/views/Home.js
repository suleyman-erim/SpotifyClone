/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */

import Section from "components/Section"
import songs from "data/songs"
import {Switch, Route} from 'react-router-dom';
function Home() {
  
  return (
    <div className=" grid gap-y-4">
      <Section title="Recently Played" more="/blabla" items={songs}></Section>
      <Section title="Show to Try" more="/blabla" items={songs}></Section>
      <Section title="Made for Süleyman Erim" more="/blabla" items={songs}></Section>
    </div>
  )
}

export default Home
