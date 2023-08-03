yarn build
find . -name ".DS_Store" -delete
# for ii in {0..11}  
# do  
#     wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/${ii}.js
# done
wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/socket.io/socket.io.js
xxf=dist/socket.io.js;uglifyjs $xxf -c -m -o $xxf
wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/8.js
xxf=dist/8.js;uglifyjs $xxf -c -m -o $xxf

wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/,.js
xxf=dist/,.js;uglifyjs $xxf -c -m -o $xxf

wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/v,.js
xxf=dist/v,.js;uglifyjs $xxf -c -m -o $xxf

wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/sw.js
xxf=dist/sw.js;uglifyjs $xxf -c -m -o $xxf


wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/css/,.css

# mv -f dist/v,.js ../E2E_chat/app/static/v8.js
# mv -f dist/,.js ../E2E_chat/app/static/js.js

#  https://www.yiibai.com/bash/bash-for-loop.html

# https://unpkg.com/web-ai-51pwn@latest/dist/index.bundle.js
npm publish

