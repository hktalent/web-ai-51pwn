yarn build

# for ii in {0..11}  
# do  
#     wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/${ii}.js
# done
wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/8.js
#  https://www.yiibai.com/bash/bash-for-loop.html

# https://unpkg.com/web-ai-51pwn@latest/dist/index.bundle.js
npm publish

