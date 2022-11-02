import { useState } from "react";



export function TodoListPage() {
  return (
      <div className="container-fluid">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h1>Todo-list!</h1>
                      <p>WIP</p>
                  </div>
              </div>
              <div className="row">
                <TodoList />
              </div>
          </div>
      </div>
  );
}


function TodoList() {
    const [items, setItems] = useState([]);
    return (
        <div className="todoCon mt-50">
            <h3>List of things to do</h3>

            <form action="">
                <input type="text" />
                <button type="submit">Add item</button>
            </form>
        </div>
    )
}