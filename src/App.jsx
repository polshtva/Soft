import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import "./App.css";
import UserList from "./components/UserList/UserList";
import WindowSize from "./components/WindowSize/WindowSize";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Первое задание</h1>
      <CountdownTimer />
      <h1 className="title">Второе задание</h1>
      <UserList/>
      <h1 className="title">Третье задание</h1>
      <WindowSize/>
    </div>
  );
}
