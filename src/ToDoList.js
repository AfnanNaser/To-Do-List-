import React, {component} from"react";

class ToDoList extends Component {
    constructor(props){
      super(props);

      this.AddItem = this.AddItem.bind(this);

    }
    AddItem(e){
      
    }
  
  render()
    return (
        <div className="ToDoListMAin">
          <div className="header">
          <form onSubmit={this.AddItem}>
          <input placeholder="enter task">
          </input>
          <button type="
          submit">add</button>
          </form>
        </div>
        </div>
    );
}
}
export default ToDoList;

