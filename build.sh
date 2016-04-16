#!/usr/bin/env bash

rm -rf lib

mkdir -p lib/sdl
for file in sdl/include/*.h; do
  ffi-generate -x -f ${file} -l libSDL2 -m functions > lib/sdl/$(basename --suffix=.h ${file}).js
done
