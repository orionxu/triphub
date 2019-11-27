build:
	rm -rf ./static
	rm -f ./templates/frontend/index.html
	cd travel-web&&npm install --save-dev&&npm run build
	mv ./travel-web/build ./static
	mv ./static/index.html ./templates/frontend/
	cd ./templates/frontend&&python maketemplate.py
	cp -r ./static/static/media ./static/media
run:
	python manage.py runserver