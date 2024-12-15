import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskTable from "./Component/TaskTable";
import InputTable from "./Component/InputTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState([{
    title:"",
    description:"",
    status:"",
    id:""
  }]);

  useEffect(() => {
    setData(Data);
  }, []);

  const handledeleteItem = (id) => {
    const ab = data.filter(item => item.id !== id);
    setData(ab);
    toast.success("Task deleted successfully!");
  };
  const handleOnChange = (id, field, value) => {
    const updatedData = data.map((item) => {
      if (id === item.id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setData(updatedData);
    toast.info("Task updated successfully!");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...formValues,
      id: Date.now().toString()
    };

    setData([...data, newTask]);

    setFormValues({
      title: "",
      description: "",
      status: "",
      id: ""
    });

    
    toast.success("Task added successfully!");
  };

  return (
    <>
      <div style={{ paddingTop: "2rem" }}>
        <InputTable setFormValues={setFormValues} task={formValues} handleFormsubmit={handleFormSubmit} />
        <TaskTable data={data} handledeleteItem={handledeleteItem} handleOnChange={handleOnChange} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;





// import React, { useState, useEffect } from "react";

// import { Data } from "./Data";
// import "bootstrap/dist/css/bootstrap.min.css";
// import TaskTable from "./Component/TaskTable";
// import InputTable from "./Component/InputTable";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [formValues, setFormValues] = useState([{
//     title:"",
//     description:"",
//     status:"",
//     id:""
//   }]);
//   useEffect(() => {
//     setData(Data);
//   }, []);

//  const handledeleteItem =(id)=>{
//   const ab = data.filter(item=>item.id !==id)
//   setData(ab)
//  }

//  const handleOnChange = (id, field, value) => {
//   const updatedData = data.map((item) => {
//     if (id === item.id) {
//       return { ...item, [field]: value };
//     }
//     return item;
//   });
//   setData(updatedData);
// };


// //  const handleOnChange = (id) => {
// //   console.log("id",id)
// //    const updatedData= data?.map((item)=>{
// //       if(id === item.id){
// //         console.log("da",setData([item,item.description]=value))
// //       }
    
// //    })


// //   console.log("ab", updatedData)
  
// // };

// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   const newTask = {
//     ...formValues,
//     id: Date.now().toString() 
//   };

//   setData([...data, newTask]);

//   setFormValues({
//     title: "",
//     description: "",
//     status: "",
//     id: ""
//   });
// };




//   return (
//     <>
//       <div style={{ paddingTop: "2rem" }}>
//         <InputTable setFormValues={setFormValues} task={formValues} handleFormsubmit={handleFormSubmit }/>
//         <TaskTable data={data} handledeleteItem={handledeleteItem} handleOnChange={handleOnChange}/>
//       </div>
//     </>
//   );
// }

// export default App;





// import React, { useState, useEffect } from "react";

// import { Data } from "./Data";
// import "bootstrap/dist/css/bootstrap.min.css";
// import TaskTable from "./Component/TaskTable";
// import InputTable from "./Component/InputTable";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [formValues, setFormValues] = useState([{
//     title:"",
//     description:"",
//     status:"",
//     id:""
//   }]);
//   useEffect(() => {
//     setData(Data);
//   }, []);

//  const handledeleteItem =(id)=>{
//   const ab = data.filter(item=>item.id !==id)
//   setData(ab)
//  }

//  const handleOnChange = (id, field, value) => {
//   const updatedData = data.map((item) => {
//     if (id === item.id) {
//       return { ...item, [field]: value };
//     }
//     return item;
//   });
//   setData(updatedData);
// };


// //  const handleOnChange = (id) => {
// //   console.log("id",id)
// //    const updatedData= data?.map((item)=>{
// //       if(id === item.id){
// //         console.log("da",setData([item,item.description]=value))
// //       }
    
// //    })


// //   console.log("ab", updatedData)
  
// // };

// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   const newTask = {
//     ...formValues,
//     id: Date.now().toString() 
//   };

//   setData([...data, newTask]);

//   setFormValues({
//     title: "",
//     description: "",
//     status: "",
//     id: ""
//   });
// };




//   return (
//     <>
//       <div style={{ paddingTop: "2rem" }}>
//         <InputTable setFormValues={setFormValues} task={formValues} handleFormsubmit={handleFormSubmit }/>
//         <TaskTable data={data} handledeleteItem={handledeleteItem} handleOnChange={handleOnChange}/>
//       </div>
//     </>
//   );
// }

// export default App;
