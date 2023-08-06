yarn build
find . -name ".DS_Store" -delete
# for ii in {0..11}  
# do  
#     wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/${ii}.js
# done

# wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/socket.io/socket.io.js
# xxf=dist/socket.io.js;uglifyjs $xxf -c -m -o $xxf
# wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/sw.js
# xxf=dist/sw.js;uglifyjs $xxf -c -m -o $xxf


rm -rf dist/8.js dist/,.js dist/v,.js
wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/8.js
wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/,.js
wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/js/v,.js
xxf=dist/8.js;uglifyjs $xxf -c -m -o $xxf
xxf=dist/v,.js;uglifyjs $xxf -c -m -o $xxf
xxf=dist/,.js;uglifyjs $xxf -c -m -o $xxf

shasum -b -a 384 dist/,.js | awk '{ print $1 }' | xxd -r -p | base64


mkdir tmp
wget --no-check-certificate -c -P tmp/ https://cdnjs.cloudflare.com/ajax/libs/ClientJS/0.2.1/client.min.js
shasum -b -a 384 tmp/client.min.js | awk '{ print $1 }' | xxd -r -p | base64

wget --no-check-certificate -c -P tmp/ https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js
shasum -b -a 384 tmp/jquery.min.js | awk '{ print $1 }' | xxd -r -p | base64

# https://www.srihash.org
# https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity
# cat myfile.js | openssl dgst -sha384 -binary | openssl base64 -A

function get_sha384(){
    wget --no-check-certificate -c -P tmp/ $1
    kk1=$(echo $1|grep -Eo '([^\\/]+$)')
    shasum -b -a 384 tmp/$kk1 | awk '{ print $1 }' | xxd -r -p | base64
}

get_sha384  https://cdnjs.cloudflare.com/ajax/libs/RecordRTC/5.6.2/RecordRTC.min.js
get_sha384 https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/8.2.3/adapter.min.js
get_sha384 https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js
get_sha384 "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.js"
get_sha384 https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js
get_sha384 https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
get_sha384 https://cdnjs.cloudflare.com/ajax/libs/tensorflow/4.10.0/tf.min.js

# shasum -b -a 384 dist/8.js | awk '{ print $1 }' | xxd -r -p | base64
# shasum -b -a 384 dist/,.js | awk '{ print $1 }' | xxd -r -p | base64
# shasum -b -a 384 dist/v,.js | awk '{ print $1 }' | xxd -r -p | base64


wget --no-check-certificate -c -P dist/ https://127.0.0.1:2083/css/,.css

# mv -f dist/v,.js ../E2E_chat/app/static/v8.js
# mv -f dist/,.js ../E2E_chat/app/static/js.js

#  https://www.yiibai.com/bash/bash-for-loop.html

# https://unpkg.com/web-ai-51pwn@latest/dist/index.bundle.js

# npm version minor
# npm version major

gitpush "up";npm version patch;npm publish --force
