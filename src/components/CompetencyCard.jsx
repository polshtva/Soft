/* eslint-disable react/prop-types */

export default function CompetenceCard({ id, title, description, proficiency, onDelete }) {
  return (
    <div className="competence-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Уровень освоения: {proficiency}%</p>
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
}