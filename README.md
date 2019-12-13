# triphub
## About Project
Triphub is designed to make plan for travelers. Instead of just listing famous tourist attractions like many other travel websites, trip planner could design an optimized travel route with detailed time schedule. 


## Build and run on Linux/MacOS
```
make install        # install dependencies
make build			# build the frond-end project
make run			# run django servers
```
## Run on Windows
```
python manage.py runserver
```
## Note
The api key and api code of here map api are not included. Change the initialization of the following:
```
in ./travel-web/src/Component/Plan.js

this.state.appId
this.state.appCode
```