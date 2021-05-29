#用于提交到npm
rm -rf dist &&
rollup -c &&
npm publish &&
echo 'preview: https://www.npmjs.com/package/vue3-wheel-ui-1'