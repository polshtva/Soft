/* eslint-disable react/prop-types */

export default function MyPersonalCard({photo,fullName}){
    return (
        <div className="card">
          <img className="card-img" src={photo} alt="My Photo" />
          <h2>{fullName}</h2> 
        </div>
      );
}