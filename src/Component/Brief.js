// 1. How did you handle inline editing in the table?

// Inline editing was handled using the Tabulator library. In the TaskTable component, each cell in the table has an editor. The editor for the "Title" and "Description" columns is an input field, while the "Status" column uses a select dropdown. When a user edits a cell, the cellEdited event is triggered, which calls the handleOnChange function. This function updates the corresponding task in the state by mapping over the existing data and changing the relevant field (e.g., title, description, or status) based on the task's id.

// 2. Explain how you fetched and processed the data from the dummy API.

// In this implementation, the data is not fetched from an actual API since the API is not working. However, the data is supposed to be populated in the useEffect hook, where setData(Data) is called. Here, Data represents the static data or the data from the dummy API (which is assumed to be available). This is typically how you would fetch data from an API and store it in the component's state using the useState hook.

// 3. What approach did you use to filter tasks based on status?

// While filtering tasks based on status isn't explicitly shown in the code you provided, you can easily implement it by adding a filter option in the App component. For example, you could add a dropdown or buttons to allow users to select a status (e.g., "To Do", "In Progress", "Done"). Then, you could filter the data state based on the selected status and display only the tasks that match the chosen status. Here's a quick example of how you might add that functionality:


// How did you manage the state of tasks when adding or editing them?

// The state of tasks is managed using React's useState hook. There are two key state variables: data (an array of tasks) and formValues (an object that holds the values for the form inputs). When a user adds a task, the handleFormSubmit function creates a new task object with the formValues and appends it to the data array using setData. When a user edits a task inline, the handleOnChange function is triggered, which updates the corresponding task in the data state.

// 5. What challenges did you face during development, and how did you overcome them?

// API not working: Since the API was not functioning as expected, I simulated the data fetching by using static data (Data) instead of making actual API calls. This allowed me to continue the development without being blocked by the issue.

// Inline editing complexity: Implementing inline editing using Tabulator required some learning and adaptation of its API. However, by reading the documentation and experimenting with the settings, I was able to integrate the editor and update the state on cell edits successfully.

// Form state management: Keeping track of both the individual form values (formValues) and the task list (data) in sync while adding and editing tasks was a challenge. This was overcome by using controlled components and ensuring the correct values were passed to and updated by the setFormValues function and the handleOnChange function.