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

<p><span class="badge bg-warning text-dark">Work in Progress</span></p>

# (1) My backup script
I use to run this script as a routine to backup some essential part of my work in case I get any issues with my computer. It's avoid heavy files and any files related with sensitive data (like ssh key). I also run it using crontab I case I forget to run it for a long time.

```
#!/bin/zsh
set -e
echo "====== Démarrage du Backup ======\n"
#---------------------------------------------------------------
echo "(1) Setup..."
# Dossier destination
DEST_PATH="/Users/hmirault/Backup"

EXCLUDE_FILE="$HOME/.bin/backup_exclude_list.txt"
mkdir -p "$DEST_PATH/Config_Files"
mkdir -p "$DEST_PATH/Work_Files"

#---------------------------------------------------------------

echo "(2) Sauvegarde des listes de logiciels et paquets..."

APP_LIST_FILE="$DEST_PATH/App_list.txt"
APP_PACK_FILE="$DEST_PATH/App_package.txt"
{
    echo "=== Applications de /Applications ==="; ls /Applications | sed 's/\.app$//'; echo "";
    echo "=== Applications de Homebrew (Casks) ==="; brew list --cask; echo "";
    echo "=== Outils de Homebrew (Formulas) ==="; brew list --formula
} > "$APP_LIST_FILE" # Fichier App_list.txt

pip3 freeze > "$APP_PACK_FILE"

#---------------------------------------------------------------

echo "(3) Synchronisation des configurations..."
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

echo "(4) Synchronisation des Fichiers de Travail..."
rsync -a --delete --exclude-from="$EXCLUDE_FILE" \
    "$HOME/Documents" \
    "$HOME/Desktop" \
    "$DEST_PATH/Work_Files/"

#---------------------------------------------------------------
echo "(5) Synchronisation avec le dépôt GitHub..."
cd "$DEST_PATH"
git add .
if ! git diff-index --quiet HEAD; then
    git commit -m "Sauvegarde automatique du $(date +'%Y-%m-%d %H:%M')" --quiet
    git push --quiet
    echo "(6) Synchronisation GitHub Reussie..."
else
    echo "(6) Rien a Synchroniser..."
fi

echo "\n====== Backup Terminé ======"

# --- NOTIFICATION DE BUREAU ---
osascript -e "display notification \"Fin du backup et de son envoi sur GitHub\" with title \"Backup uploaded\" sound name \"Submarine\""
#osascript -e "display notification \"La synchronisation de vos fichiers est terminée\" with title \" Sauvegarde à Jour\""
```

# (2) My update script
Just a little script to make sure most of my software are kept up to date. This is not part of any routine, yet.

```
#!/bin/zsh
echo "====== Démarrage de la maintenance ======\n"

echo "(1) Mise à jour de Homebrew et des paquets..."
brew update > /dev/null 2>&1 && brew upgrade > /dev/null && brew upgrade --cask > /dev/null

echo "(2) Nettoyage du cache Homebrew..."
brew cleanup -s > /dev/null

echo "(3) Vidage des caches..."
setopt local_options EXTENDED_GLOB > /dev/null
rm -rf ~/Library/Caches/^(Google|Homebrew|pip|com.apple.Safari) 2>/dev/null

echo "(4) Vidage de la corbeille..."
rm -rf ~/.Trash/*(N) > /dev/null


echo "\n ====== Maintenance terminée ====== !"
```
