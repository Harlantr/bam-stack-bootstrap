# BAM Stack Bootstrap
A tiny RESFful web app built using Bottle.py, AngularJS, and Mongo DB.

### Setting up the server
#### _Inside 'server' folder_
```bash
mongod                          # start mongodb
```
```bash
pip install virtualenv          # install virtualvenv globally
vitrualenv venv                 # create new virtual python environment/folder
source venv/bin/activate        # activate virtual environment
python server.py                # start the server
```

### Setting up the client
#### _Inside 'client' folder_
```bash
npm install                     # install npm modules
bower install                   # install bower modules
grunt serve                     # run tasks defined in gruntfile.js and start server
```