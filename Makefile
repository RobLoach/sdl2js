SDL_VERSION=2.0.2

build: lib
	echo "Built"

node_modules:
	npm i

deps:
	mkdir -p deps

deps/sdl: deps
	git clone --branch=release-$(SDL_VERSION) git@github.com:spurious/SDL-mirror.git deps/sdl

lib: deps/sdl node_modules
	./build.sh

clean:
	rm -rf deps lib node_modules
