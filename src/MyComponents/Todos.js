import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {

  return (
    <div className="container my-3">
      <h3 className="text-center">COUPLE LIST</h3>

      {todos.length === 0 ? (
        <p>No Couple Message</p>
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
              src="https://scontent.fdel46-1.fna.fbcdn.net/v/t39.30808-6/587759592_853047827196978_5502321170422938330_n.jpg?stp=cp6_dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yzEMkN5oV4wQ7kNvwFQEm85&_nc_oc=AdmlANI_BopIwQRQczcrZZ5EdPkXU5LNRsh3QFGn_gYtK5QfSJZlVb0gAvINkTC8Y_A&_nc_zt=23&_nc_ht=scontent.fdel46-1.fna&_nc_gid=KnWfeabJxkVy5487eibQ1w&oh=00_AfgPCqrSw1aJzUXbMKbDQti483Rgy0j8kevSce0tG4z16w&oe=6927E276"

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

