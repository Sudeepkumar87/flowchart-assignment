import React from 'react'


const InputTable = ({setFormValues,task,handleFormsubmit}) => {
  return (
    <div>
        <form>
        <div className="form-container">
          <p style={{fontSize:"70px", fontWeight:"bold",textAlign:"center"}}>Task Table</p>
          <div className="form-grid">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                 value={task.title}
                 onChange={(e) =>
                    setFormValues({ ...task, title: e.target.value })
                  }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                 value={task.description}
                 onChange={(e) =>
                    setFormValues({ ...task, description: e.target.value })
                  }
                
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={task.status}
              
                onChange={(e) =>
                    setFormValues({ ...task, status: e.target.value })
                  }
                required
              >
                <option value="To "></option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
        </div>
        <button onClick={handleFormsubmit} className="btn btn-primary" style={{marginBottom:"3rem",}}>
          Add Task
        </button>
      </form>
    </div>
  )
}

export default InputTable
