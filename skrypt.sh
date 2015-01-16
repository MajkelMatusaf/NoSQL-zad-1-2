#/bin/bash
if [ "$#" -ne 2 ]; then
    echo "Musza byc dwa parametry: plik zrodlowy i wynikowy"
fi


cat $1 | tr "\n" " " | tr "\r" "\n" | head -n 6034196 > $2
