#用于提交打包代码
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
# git branch -M main &&
# git remote add origin git@github.com:qianyuzzf/vue3-wheel-ui-1.git &&
# git push -f -u origin main &&
git remote add origin git@e.coding.net:xiaoqian001/vue3-wheel-ui-1/vue3-wheel-ui-1.git &&
git push -f -u origin master &&
cd .. &&
echo 'preview: https://qianyuzzf.github.io/vue3-wheel-ui-1/index.html#/'