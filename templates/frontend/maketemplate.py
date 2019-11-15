import re
with open("index.html", "r") as f:
	fdata = f.read()
fdata = re.sub(r'(href|src)=\"(\.\/)?([a-zA-Z0-9][^\"]+?)\"', r'\1="{% static "\3" %}"', fdata)
with open("index.html", "w") as f:
	f.write("{% load static %}")
	f.write(fdata)