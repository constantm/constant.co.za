#!/bin/sh
git push origin `git subtree split --prefix dist master`:gh-pages --force
echo "\n\n!!! Remember to add custom domain back at https://github.com/constantm/constant.co.za/settings"