import CompetencyCard from "./components/CompetencyCard";
import Header from "./components/Header";
import MyPersonalCard from "./components/MyPersonalCard";
import TechnologyCard from "./components/TechnologyCard";
import myPhoto from "/myphoto.jpg";
import {data} from "./data.js"
const arrayComp = ["FrontendРазработка веб-приложений", "UI/UX дизайн", "Мобильный разработчик/Android Studio", "Аналитика данных"]

export default function App() {
  return (
    <div>
    <Header></Header>
      <div className="container">
        <p className="main_title">Information about me</p>
        <MyPersonalCard photo={myPhoto} fullName="Шестакова Полина Сергеевна"/>
        <p className="main_title">My skills</p>
        <CompetencyCard competency={arrayComp[0]}/>
        <CompetencyCard competency={arrayComp[1]}/>
        <CompetencyCard competency={arrayComp[2]}/>
        <CompetencyCard competency={arrayComp[3]}/>
        <p className="main_title">What I want to learn</p>
        <TechnologyCard technology_title={data[0].name}  technology_desc={data[0].description}/>
        <TechnologyCard technology_title={data[1].name}  technology_desc={data[1].description}/>
        <TechnologyCard technology_title={data[2].name}  technology_desc={data[2].description}/>
        <TechnologyCard technology_title={data[3].name}  technology_desc={data[3].description}/>
        <TechnologyCard technology_title={data[4].name}  technology_desc={data[4].description}/>
        <TechnologyCard technology_title={data[5].name}  technology_desc={data[5].description}/>
        <TechnologyCard technology_title={data[6].name}  technology_desc={data[6].description}/>
        <TechnologyCard technology_title={data[7].name}  technology_desc={data[7].description}/>
        <TechnologyCard technology_title={data[8].name}  technology_desc={data[8].description}/>
        <TechnologyCard technology_title={data[9].name}  technology_desc={data[9].description}/>

      </div>
    </div>
  )
}
