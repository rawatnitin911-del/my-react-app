import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {

  return (
    <div className="container my-3">
      <h3 className="text-center">DAILY ROUTINE</h3>

      {todos.length === 0 ? (
        <p>EMPTY MESSAGE </p> 
      ) : (
        todos.map((todo) => (
          <div 
            key={todo.sno}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "10px auto"
            }}
          >
            {/* Image Added */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByBdJDQihtV41mKbZ4CiQrXTc8ptphn968A&s"
              alt="partner"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                marginRight: "15px",
                objectFit: "cover"
              }}
            />

            {/* Todo Item */}
            <TodoItem todo={todo} onDelete={onDelete} />
          </div>
        ))
      )}
    </div>
  );
};

