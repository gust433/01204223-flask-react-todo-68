// ทำในไฟล์ TodoItem.jsx ในไดเร็กทอรี frontent/src/
import './App.css'
import { useState } from 'react'

function TodoItem({todo, toggleDone, deleteTodo, addNewComment}) {
    const [newComment, setNewComment] = useState("");      // เพิ่ม state newComment
    return (
    <li>
        <span className={todo.done ? "done" : ""}>{todo.title}</span>
        <button onClick={() => {toggleDone(todo.id)}}>Toggle</button>
        <button onClick={() => {deleteTodo(todo.id)}}>❌</button>
            {(todo.comments) && (todo.comments.length > 0) && (
              <>
                <b>Comments:</b>
                <ul>
                  {todo.comments.map(comment => (
                    <li key={comment.id}>{comment.message}</li>
                  ))}
                </ul>
              </>
            )}
            {(todo.comments.length > 0) && (
                <span>{todo.comments.length}</span>
            )}
        {(todo.comments.length == 0) && (
            <span>No comments</span>
        )}
        <div className="new-comment-forms">
          <input 
            type="text" 
            value={newComment}     // ของเก่าเป็น value={newComments[todo.id] || ""} 
                onChange={(e) => {
                const value = e.target.value;
                setNewComment(value);
              }} />
            <button onClick={() => 
            {addNewComment(todo.id, newComment);
            setNewComment("");
            }}>Add Comment</button>
        </div>
    </li>
    )
}

export default TodoItem