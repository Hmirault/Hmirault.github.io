---
layout: page
title: My personalized scripts
description: Some small scripts a like to use
img: assets/img/script.png
importance: 2
category: work
related_publications: false
---

<div class="row">
    <div class="col-sm-12">
        <div class="header-bar">
            <h1>My personalized scripts</h1>
            <p><i>Some small scripts a like to use.</I></p>
        </div>
    </div>
</div>

<br>

# (1) My backup script

I use to run this script as a routine to backup some essential part of my work in case I get any issues with my computer. It's avoid heavy files and any files related with sensitive data (like ssh key). I also run it using crontab in case I forget to run it for a long time.
I also use a variation of this script to tar the outputed directory and copy it on another hard drive.

```
#!/bin/zsh
set -e
echo "====== Backup Startup ======\n"
#---------------------------------------------------------------
echo "(1) Setup..."
DEST_PATH="<user>/Backup"
EXCLUDE_FILE="$HOME/.bin/backup_exclude_list.txt"
mkdir -p "$DEST_PATH/Config_Files"
mkdir -p "$DEST_PATH/Work_Files"

#---------------------------------------------------------------

echo "(2) Save software list and packets..."
APP_LIST_FILE="$DEST_PATH/App_list.txt"
APP_PACK_FILE="$DEST_PATH/App_package.txt"
{
    echo "=== Applications from /Applications ==="; ls /Applications | sed 's/\.app$//'; echo "";
    echo "=== Applications from Homebrew (Casks) ==="; brew list --cask; echo "";
    echo "=== Outils from Homebrew (Formulas) ==="; brew list --formula
} > "$APP_LIST_FILE" # Fichier App_list.txt

pip3 freeze > "$APP_PACK_FILE"

#---------------------------------------------------------------

echo "(3) Save config files..."
rsync -a --delete --exclude-from="$EXCLUDE_FILE" \
    "$HOME/.emacs.d" \
    "$HOME/.zshrc" \
    "$HOME/.zprofile" \
    "$HOME/.zsh_history" \
    "$HOME/.oh-my-zsh/custom" \
    "$HOME/.gitconfig" \
    "$HOME/.config/iterm2" \
    "$HOME/.spyder-py3" \
    "$HOME/.ipython" \
    "$HOME/.config" \
    "$HOME/.bin" \
    "$DEST_PATH/Config_Files/"

#---------------------------------------------------------------

echo "(4) Save work files..."
rsync -a --delete --exclude-from="$EXCLUDE_FILE" \
    "$HOME/Documents" \
    "$HOME/Desktop" \
    "$DEST_PATH/Work_Files/"

#---------------------------------------------------------------
echo "(5) Push with git..."
cd "$DEST_PATH"
git add .
if ! git diff-index --quiet HEAD; then
    git commit -m "Auto save from $(date +'%Y-%m-%d %H:%M')" --quiet
    git push --quiet
    echo "(6) Git push succesful..."
else
    echo "(6) Nothing to push..."
fi

echo "\n====== Backup Termine ======"

# --- NOTIFICATION ON DESKTOP ---
# /!\ Specific to macos
osascript -e "display notification \"Backup done and uploaded\" with title \"Backup uploaded\" sound name \"Submarine\""
```

# (2) My update script

Just a little script to make sure most of my software are kept up to date. This is not part of any routine, yet.

```
#!/bin/zsh
echo "====== Start update ======\n"

echo "(1) Update Homebrew..."
brew update > /dev/null 2>&1 && brew upgrade > /dev/null && brew upgrade --cask > /dev/null

echo "(2) Clean Homebrew cache..."
brew cleanup -s > /dev/null

echo "(3) Empty caches..."
setopt local_options EXTENDED_GLOB > /dev/null
rm -rf ~/Library/Caches/^(Google|Homebrew|pip|com.apple.Safari) 2>/dev/null

echo "(4) Empty trash..."
rm -rf ~/.Trash/*(N) > /dev/null

echo "\n ====== Update done ====== !"
```
