let todos = [
   { id: 1, text: 'Todo 1' },
   { id: 2, text: 'Todo 2' },
   { id: 3, text: 'Todo 3' },
 ];
 
 export default function handler(req, res) {
   if (req.method === 'GET') {
     res.status(200).json(todos);
   } else if (req.method === 'POST') {
     const newTodo = { id: Date.now(), text: req.body.text };
     todos.push(newTodo);
     res.status(201).json(newTodo);
   } else if (req.method === 'DELETE') {
     const id = parseInt(req.query.id, 10);
     todos = todos.filter((todo) => todo.id !== id);
     res.status(200).end();
   } else {
     res.status(405).end(); // Method Not Allowed
   }
 }
 