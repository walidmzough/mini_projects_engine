import { arrayMove } from 'react-movable';
import { useState } from 'react';
import SortableList, { SortableItem} from 'react-easy-sort'


function ProjectSorter(props) {
  const [todoState, setTodoState] = useState(props.items);


  function swap(oldIndex,newIndex) {
    let swappedTodos = arrayMove(todoState, oldIndex, newIndex);

    setTodoState([...swappedTodos]); 
    console.log(todoState.map((item)=>item.id));   
  }

  return (
    <SortableList onSortEnd={swap} className="list" draggedItemClassName="dragged">
    {todoState.map((item) => (
      <SortableItem key={item.id}>
      <div className="item">
          <div>{item.title}</div>
      </div>
    </SortableItem>
    ))}
  </SortableList>
  );
}

export default ProjectSorter;
