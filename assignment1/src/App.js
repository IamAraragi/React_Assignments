import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const author = {
    avatarUrl:
      "https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-2.jpg",
    name: "Anna",
  };
  const text = "Anna is a good manager";
  const date = "2022/01/27";
  return (
    <div className="App">
      <Profile author={author} text={text} date={date} />
    </div>
  );
}

export default App;
