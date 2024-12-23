const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '..', '/public')));
app.use('/styles', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));



app.get('/', (req, res) => {
    // Serve the index.html file from the 'public' directory
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
  });
  app.get('/t', (req, res) => {
    // Serve the index.html file from the 'public' directory
    res.sendFile(path.join(__dirname, '..', 'client', 'indexx.html'));
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})