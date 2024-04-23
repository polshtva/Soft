import CompetencyCard from "./components/CompetencyCard";
import { useState } from 'react';
import './App.css';


export default function App() {
  const [showCompetences, setShowCompetences] = useState(false);
  const [filter, setFilter] = useState(null);
  const [competences, setCompetences] = useState([
    { id: 1, title: 'React', description: 'Библиотека JavaScript для создания пользовательских интерфейсов.', proficiency: 30 },
    { id: 2, title: 'JavaScript', description: 'Язык программирования для веб-разработки.', proficiency: 80 },
    { id: 3, title: 'HTML', description: 'Язык разметки для создания веб-страниц.', proficiency: 100 },
    { id: 4, title: 'CSS', description: 'Язык стилей для оформления веб-страниц.', proficiency: 90 },
    { id: 5, title: 'Python', description: 'Мощный и простой в использовании язык программирования.', proficiency: 50 },
    { id: 6, title: 'Node.js', description: 'JavaScript на стороне сервера.', proficiency: 0 },
    { id: 7, title: 'SQL', description: 'Язык структурированных запросов для работы с базами данных.', proficiency: 90 },
    { id: 8, title: 'Git', description: 'Система контроля версий для отслеживания изменений в коде.', proficiency: 70 },
  ]);
  

  const [formData, setFormData] = useState({ title: '', description: '', proficiency: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateCompetence = () => {
    const newCompetence = {
      id: competences.length + 1,
      title: formData.title,
      description: formData.description,
      proficiency: parseInt(formData.proficiency),
    };
    setCompetences([...competences, newCompetence]);
    setFormData({ title: '', description: '', proficiency: '' });
  };

  const handleDeleteCompetence = (id) => {
    const updatedCompetences = competences.filter((competence) => competence.id !== id);
    setCompetences(updatedCompetences);
  };

  const filteredCompetences = filter
    ? competences.filter((competence) => {
        if (filter === 'high') {
          return competence.proficiency > 50;
        } else {
          return competence.proficiency < 50;
        }
      })
    : competences;

  return (
    <div className="App">
      <button onClick={() => setShowCompetences(!showCompetences)}>
        {showCompetences ? 'Убрать компетенции' : 'Показать компетенции'}
      </button>
      {showCompetences && (
        <div>
          <div className="btnTask">
          <button onClick={() => setFilter('high')}>Показать компетенции с уровнем изучения &gt;50%</button>
          <button onClick={() => setFilter('low')}>Показать компетенции с уровнем изучения &lt;50%</button>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Название"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Описание"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Уровень"
              name="proficiency"
              value={formData.proficiency}
              onChange={handleInputChange}
            />
            <button onClick={handleCreateCompetence}>Создать</button>
          </div>
          {filteredCompetences.map((competence) => (
            <CompetencyCard
              key={competence.id}
              id={competence.id}
              title={competence.title}
              description={competence.description}
              proficiency={competence.proficiency}
              onDelete={handleDeleteCompetence}
            />
          ))}
        </div>
      )}
    </div>
  );
}