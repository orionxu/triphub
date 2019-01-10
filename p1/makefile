CC = gcc
WARNING_FLAGS = -Wall -Wextra
EXE = 537ps

all: main.o optproc.o opendir.o readfile.o
	$(CC) -o $(EXE) main.o optproc.o opendir.o readfile.o

main.o: main.c optproc.h opendir.h readfile.h
	$(CC) $(WARNING_FLAGS) -c main.c

optproc.o: optproc.c optproc.h
	$(CC) $(WARNING_FLAGS) -c optproc.c

opendir.o: opendir.c opendir.h
	$(CC) $(WARNING_FLAGS) -c opendir.c

readfile.o: readfile.c readfile.h
	$(CC) $(WARNING_FLAGS) -c readfile.c

clean:
	rm $(EXE) *.o
