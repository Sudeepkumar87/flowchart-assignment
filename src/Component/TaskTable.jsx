import React, { useEffect, useRef } from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

const TaskTable = ({ data, handledeleteItem, handleOnChange }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const table = new Tabulator(tableRef.current, {
        data,
        layout: 'fitColumns',
        pagination: 'local',
        paginationSize: 5,
        paginationSizeSelector: [5, 10, 15, 20],
        columns: [
          {
            title: 'Title',
            field: 'title',
            editor: 'input',
            cellEdited: (cell) => handleOnChange(cell.getData().id, 'title', cell.getValue())
          },
          {
            title: 'Description',
            field: 'description',
            editor: 'input',
            cellEdited: (cell) => handleOnChange(cell.getData().id, 'description', cell.getValue())
          },
          {
            title: 'Status',
            field: 'status',
            editor: 'select',
            editorParams: {
              values: ["To Do", "In Progress", "Done"]
            },
            cellEdited: (cell) => handleOnChange(cell.getData().id, 'status', cell.getValue())
          },
          {
            title: 'Actions',
            formatter: () => '<button class="btn btn-danger">Delete</button>',
            cellClick: (e, cell) => handledeleteItem(cell.getData().id),
          },
        ],
      });

      return () => {
        table.destroy();
      };
    }
  }, [data, handledeleteItem, handleOnChange]);

  return <div ref={tableRef} />;
};

export default TaskTable;
