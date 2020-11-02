#!/bin/bash
# khoivc's commit script

read -p "Enter commit type (feat/fix/refactor/docs/chore/style/perf/vendor): " type
read -p "Enter commit scope (ex: authentication, upload), (optional): " scope
read -p "Enter commit description: " des

read -p "Enter BREAKING_CHANGE (optional): " BREAKING_CHANGE

git add .


echo "$scope $BREAKING_CHANGE"

if [ -z "$scope" && -z "$BREAKING_CHANGE" ]; then
	git commit -m "$type: $des"
elif [ -z "$scope" ]; then
	git commit -m "$type: $des" -m "BREAKING_CHANGE: $BREAKING_CHANGE"
elif [ -z "$BREAKING_CHANGE" ]; then
        git commit -m "$type($scope): $des"
else
	git commit -m "$type($scope): $des" -m "BREAKING_CHANGE: $BREAKING_CHANGE"
fi

printf '%s\n' "$fs"