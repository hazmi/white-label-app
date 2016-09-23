let fs = require('fs');
let app = process.env.app;

if(app){
  let path = `${__dirname}/${app}/config.js`;
  try {
    let configPath = `${__dirname}/index.js`;
    let configContent = `export * from './${app}/config';`;
    fs.accessSync(path, fs.F_OK);
    fs.writeFile(configPath, configContent, function(err) {
      if(err) {
        console.error(`Error: cannot write config file.`);
        process.exit(1);
      }
      console.log("Config file updated successfully!");
      console.log(`Running react-native iOS for "${app}"...`);
    });
  } catch (e) {
    console.error(`Error: config not found for "${app}".`);
    process.exit(1);
  }
}else{
  console.error('You need to specify your app name, try running `app=app_name npm start`.')
  process.exit(1);
}

