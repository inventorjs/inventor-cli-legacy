#!/bin/bash

project_name="project"
base_path="/data/release/$project_name"
target_file="$base_path/package-lock.json"
md5_file="$base_path/.package-lock.json.md5"

cd "$base_path"

if [ ! -f "$md5_file" ]; then
    touch "$md5_file"
fi

pre_md5=`cat "$md5_file"`
cur_md5=`md5sum "$target_file" | awk '{print $1}'`

if [ "$pre_md5" != "$cur_md5" ]; then
    docker-compose run --rm node npm install --production
fi

if [ $? -eq 0 ]; then
    printf "$cur_md5" > "$md5_file"

    sleep 1s

    docker-compose stop ${project_name}

    sleep 1s

    docker-compose up -d ${project_name}
fi
