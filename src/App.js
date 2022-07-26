import ProjectSorter from './components/ProjectSorter';

let todos = [
  {id: 1, title: "Task 1",desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
  {id: 2, title: "Task 2",desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
  {id: 3, title: "Task 3",desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
]



const App = ()  =>{
  return <ProjectSorter items={todos}/>;
}

export default App;
