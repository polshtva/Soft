/* eslint-disable react/prop-types */

export default function TechnologyCard({technology_title, technology_desc }){
    return (
        <div className="card card_tech">
          <h4 className="technology_title">{technology_title}</h4>
          <p className="technology_desc">{technology_desc}</p>
        </div>
      );
}