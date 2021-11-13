#!/bin/bash

addncommit(){
    git add .
    git commit -m "$msg"
}

#project (GitHub)
echo "Enter commit message:"
read msg
addncommit
git push
echo "\033[1;32mProject (GitHub) repo done \033[0m"

#client (cPanel)
echo "\033[1;32mworking on client...\033[0m"
npm run build
cd build
shopt -s extglob
# rm -rf !(.git) #delete all folders but .git | Update 13 Nov 2021: comment this line for now since delete everything including git on mac
addncommit
git push
echo "\033[1;32mClient (cPanel) repo done \033[0m"