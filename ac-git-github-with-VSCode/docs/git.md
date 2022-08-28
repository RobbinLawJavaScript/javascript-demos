https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

//open a terminal
git –-version
gh –-version
//if one is missing you have to download the msi and try again until a version shows.
git clone https://github.com/git/git

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
NOTE: Use the user name and email from when you set up your github account!!

NOTE: If you have more than one user registered at github you must

git config --global  credential.usehttppath true

to allow you to authenticate and use different accounts.

mkdir project
cd project
code .
//visual studio code opens at the project directory.
//start a terminal in VSCode and from the terminal integrated in VSCode.
touch track.md
touch untrack.md
touch .gitignore
//within VSCode open the files and add some text then save.
//in the .gitignore add the line untrack.md
git status
//not a git repo yet so error.
ls -a
git init
ls -a
//see the hidden .git folder.
git status
git add .
git status
git commit -m 'commit message'
git status
git log
//change the file contents and do again.
gh repo create CPSC-1517/reponame
//go to github via browser and see newly created repo, but contains nothing.
git push -u origin main
//the -u means set upstream

//to see the remotes
git remote -v

//to sync our forked repo with the original repo (one way original to forked)
git pull upstream main

//refresh and repo is updated.
//change file again and save, add, and commit.
//now you only need to git push to sync.
git push

//from browser change file and save at githubs end.
//now back to the terminal in VSCode.
git pull
//now see the updated file in VSCode.
git log

//show how to clone the new repo created by classroom.


