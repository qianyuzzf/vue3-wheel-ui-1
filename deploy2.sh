git add . &&
git commit -m 'update' &&
git remote add origin2 git@github.com:qianyuzzf/vue3-wheel-ui-1.git &&
git push -f -u origin2 master:src &&
echo 'preview: https://github.com/qianyuzzf/vue3-wheel-ui-1/tree/src/src'