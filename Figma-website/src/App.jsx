import React from 'react';
import ProjectM from "./Components/ProjectM";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import Tasks from "./Components/Tasks";
import Members from "./Components/Members";
import Settings from "./Components/Settings";
import MyProjects from "./Components/MyProjects";
import SearchComponent from "./Components/SearchComp";
import ThoughtsTime from './Components/ThoughtsTime';
import LinksImgsExtra from "./Components/LinksImgsExtra";
import Boxes from "./Components/Boxes";

const App = () => {
  const data = [" ",];
  return (
    <>
    <ProjectM/>
    <div className="App">
    <SearchComponent data={data} />
    </div>
    <Home/>
    <Messages/>
    <Tasks/>
    <Members/>
    <Settings/>
    <MyProjects/>
    <ThoughtsTime/>
    <LinksImgsExtra/>
    <Boxes/>
    </>
  );
};

export default App;