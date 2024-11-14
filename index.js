const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


// serve static files from the styles directory
app.use(express.static("./styles"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// require the filesystem module
const fs = require("fs");
// defining the template engine
app.engine("gettingStarted", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

//app.set("views", "./views"); // specify the views directory
app.set("view engine", "gettingStarted"); 

app.get("/gettingStarted", (req, res) => {
  const options = {
    title: "Getting Started",
    content:
      "This is the Home page, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br>",
  };

  res.render("index.gettingStarted", { ...options, engine: "gettingStarted" });
});

//=======================================================

  app.engine("ExpressIntegration", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      // Here, we take the content of the template file,
      // convert it to a string, and replace sections of
      // it with the values being passed to the engine.
      const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`);
      return callback(null, rendered);
    });
  });
  
  //app.set("views", "./views"); // specify the views directory
  //app.set("view engine", "ExpressIntegration"); // register the template engine
  
  app.get("/ExpressIntegration", (req, res) => {
    const options = {
      title: "Express Integration",
      content:
        "This is the Express Integration page<br>",
    };
  
    res.render("index2.ExpressIntegration", { ...options, engine: "ExpressIntegration" });
  })

  app.post('/submit-data', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    // Process the form data (e.g., save to a database)
    console.log('Received data:', { name, email });
    
    // Send a response
    res.send('Form submitted successfully!');
});

app.get('/download-image', (req, res) => {
    const filePath ='./styles/photo.jpg'; 
    res.download(filePath, 'sample.jpg', (err) => {
    });
  });
  

  //=======================================================

  app.engine("reference", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      // Here, we take the content of the template file,
      // convert it to a string, and replace sections of
      // it with the values being passed to the engine.
      const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`);
      return callback(null, rendered);
    });
  });
  
  app.set("views", "./views"); // specify the views directory
  //app.set("view engine", "reference"); // register the template engine
  
  app.get("/reference", (req, res) => {
    const options = {
      title: "API References",
      content:
        "This is the API References page<br>",
    };
  
    res.render("index3.reference", { ...options, engine: "reference" });
  });

  
  //==============================================================

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});