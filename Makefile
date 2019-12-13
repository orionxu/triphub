build:
	rm -rf ./static
	rm -f ./templates/frontend/index.html
	cd travel-web&&npm install --save-dev&&npm run build
	mv ./travel-web/build ./static
	mv ./static/index.html ./templates/frontend/
	cd ./templates/frontend&&python maketemplate.py
	cp -r ./static/static/media ./static/media
run:
	python3 manage.py runserver
install:
	pip3 install mlrose
	pip3 install django
	pip3 install djangorestframework
	pip3 install django-taggit
	pip3 install django-taggit-serializer