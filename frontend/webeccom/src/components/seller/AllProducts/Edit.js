import React, { useState } from "react";

const Edit = () => {
    const [tableData, setTableData] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
        { id: 3, name: "Mark Johnson", email: "mark@example.com", age: 35 },
      ]);
      const [editingRowId, setEditingRowId] = useState(null); // Tracks the row being edited
    
      const handleEdit = (id) => {
        setEditingRowId(id); // Enter edit mode for the selected row
      };
    
      const handleSave = (id) => {
        setEditingRowId(null); // Exit edit mode
      };
    
      const handleChange = (id, field, value) => {
        const updatedData = tableData.map((row) =>
          row.id === id ? { ...row, [field]: value } : row
        );
        setTableData(updatedData);
      };
  return (
    <div>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id} onDoubleClick={() => handleEdit(row.id)}>
            {editingRowId === row.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) =>
                      handleChange(row.id, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={row.email}
                    onChange={(e) =>
                      handleChange(row.id, "email", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.age}
                    onChange={(e) =>
                      handleChange(row.id, "age", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button onClick={() => handleSave(row.id)}>Save</button>
                </td>
              </>
            ) : (
              <>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.age}</td>
                <td>
                  <button onClick={() => handleEdit(row.id)}>Edit</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Edit