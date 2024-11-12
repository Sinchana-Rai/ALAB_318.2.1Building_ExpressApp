// const express = require("express")

// const app = express()
// const port = 3000


// // serve static files from the styles directory
// app.use(express.static("./styles"));

// // require the filesystem module
// const fs = require("fs");
// // define the template engine
// app.engine("gettingStarted", (filePath, options, callback) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err);

//     // Here, we take the content of the template file,
//     // convert it to a string, and replace sections of
//     // it with the values being passed to the engine.
//     const rendered = content
//       .toString()
//       .replaceAll("#title#", `${options.title}`)
//       .replace("#content#", `${options.content}`);
//     return callback(null, rendered);
//   });
// });

// app.set("views", "./views"); // specify the views directory
// app.set("view engine", "gettingStarted"); // register the template engine

// app.get("/", (req, res) => {
//   const options = {
//     title: "Getting Started",
//     content:
//       "Overview</code> \
//       The general rendering process of Pug is simple\
//       <code>pug.compile()</code>  will compile the Pug source code into a JavaScript \
//       function that takes a data object (called “ <code> locals </code>\
//       as an argument.<br><br> \
//       Call that resultant function with your data, and voilà!, it will return a string of HTML rendered with your data. \
//       The compiled function can be re-used, and called with different sets of data.<br>\
//       For a look at some popular view engines, check out the documentation for \
//       <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
//       <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
//       <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
//       More complete front-end libraries like React, Angular, and Vue \
//       also have Express integrations.",
    
//   };

//   res.render("index", options);
// });

// app.listen(port, () => {
//   console.log(`Server listening on port: ${port}.`);
// });

// ===================================================
const express = require('express')

const app = express()
const port = 3000


// serve static files from the styles directory
app.use(express.static("./styles"));

// require the filesystem module
const fs = require("fs");
// define the template engine
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

app.set("views", "./views"); // specify the views directory
app.set("view engine", "gettingStarted"); // register the template engine

app.get("/", (req, res) => {
  const options = {
    title: "Getting Started",
    content:
      "This is the Home page, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br>",
  };

  res.render("index", options);
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
  
  app.set("views", "./views"); // specify the views directory
  app.set("view engine", "ExpressIntegration"); // register the template engine
  
  app.get("/ExpressIntegration", (req, res) => {
    const options = {
      title: "Express Integration",
      content:
        "This is the Express Integration page<br>",
    };
  
    res.render("index2", options);
  });

  //==============================================================
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
  app.set("view engine", "reference"); // register the template engine
  
  app.get("/reference", (req, res) => {
    const options = {
      title: "API Reference",
      content:
        "This is the API references page<br>",
    };
  
    res.render("index3", options);
  });

  //==============================================================

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});


