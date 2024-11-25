import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//   res.send("server is ready")
// })

app.get('/api/jokes',(req, res)=>{
  const jokes = [
    {
      id: 1,
      title: "Why don't skeletons fight each other?",
      content: "Because they don't have the guts!"
    },
    {
      id: 2,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems."
    },
    {
      id: 3,
      title: "Why was the computer cold?",
      content: "It left its Windows open!"
    },
    {
      id: 4,
      title: "Why can't your nose be 12 inches long?",
      content: "Because then it would be a foot!"
    },
    {
      id: 5,
      title: "What do you call fake spaghetti?",
      content: "An impasta!"
    }
  ];
  res.send(jokes)
 
  
})
 
const port = process.env.PORT || 3000;

app.listen(port , ()=>{
  console.log( `Serve at http://localhost:${port}`);
  
});