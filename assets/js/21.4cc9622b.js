(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{339:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("hr"),s._v(" "),a("h1",{attrs:{id:"安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 Nginx")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("docker 安装 1.16.1 稳定版本的 Nginx")])]),s._v(" "),a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[s._v("步骤如安装 Mysql 一样")]),s._v(" "),a("h2",{attrs:{id:"了解镜像配置文件的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解镜像配置文件的位置"}},[s._v("#")]),s._v(" 了解镜像配置文件的位置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("日志文件位置：/var/log/nginx\n配置文件位置: /etc/nginx\n资源存放的位置: /usr/share/nginx/html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"启动-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-nginx"}},[s._v("#")]),s._v(" 启动 Nginx")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run --name nginx -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 -d nginx:1.16.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时通过访问 ip 地址,即可看到下图页面")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Houttuyniae/Image/master/blog/server/nginx/result.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[s._v("#")]),s._v(" 进入容器")]),s._v(" "),a("h3",{attrs:{id:"查看-nginx-容器中-conf-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-nginx-容器中-conf-文件"}},[s._v("#")]),s._v(" 查看 Nginx 容器中 conf 文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" nginx "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://github.com/Houttuyniae/Image/blob/master/blog/server/docker/nginx/nginxConfig.png?raw=true",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"复制配置文件到宿主机上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制配置文件到宿主机上"}},[s._v("#")]),s._v(" 复制配置文件到宿主机上")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -a nginx:/etc/nginx/ /home/docker/nginx/conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("相关知识点 -> "),a("router-link",{attrs:{to:"/views/server/docker/base/5-point.html#在-docker-容器内外互相拷贝数据"}},[s._v("传送门")])],1),s._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/Houttuyniae/Image/blob/master/blog/server/docker/nginx/copyConfig.png?raw=true",alt:""}})]),s._v(" "),a("p",[s._v("看起来有多个 Nginx 目录,\n所有我们把配置文件都移动"),a("code",[s._v("/home/docker/nginx/conf")]),s._v("下,\n并且删除 "),a("code",[s._v("/home/docker/nginx/conf/nginx")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/Houttuyniae/Image/blob/master/blog/server/docker/nginx/moveConfig.png?raw=true",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"停止-nginx-容器并删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止-nginx-容器并删除"}},[s._v("#")]),s._v(" 停止 Nginx 容器并删除")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker stop nginx\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"挂载配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载配置文件"}},[s._v("#")]),s._v(" 挂载配置文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/docker/nginx/conf:/etc/nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/docker/nginx/html:/usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/docker/nginx/logs:/var/log/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -d nginx:1.16.1  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("挂载参数相关配置"),a("router-link",{attrs:{to:"/views/server/docker/base/4-syntax.html#启动容器"}},[s._v("传送门")])],1),s._v(" "),a("h2",{attrs:{id:"访问-ip-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-ip-地址"}},[s._v("#")]),s._v(" 访问 ip 地址")]),s._v(" "),a("h3",{attrs:{id:"_40x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_40x"}},[s._v("#")]),s._v(" 40X")]),s._v(" "),a("p",[s._v("此时通过 ip 地址访问正常会出现 40X 错误")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/Houttuyniae/Image/blob/master/blog/server/docker/nginx/403.png?raw=true",alt:""}})]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[s._v("因为在/home/docker/nginx/html 目录下还未有静态资源")])]),s._v(" "),a("h3",{attrs:{id:"创建-index-html-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-index-html-文件"}},[s._v("#")]),s._v(" 创建 index.html 文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/Houttuyniae/Image/blob/master/blog/server/docker/nginx/403.html?raw=true",alt:""}})]),s._v(" "),a("p",[s._v("内容如下")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[s._v("<!DOCTYPE html>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Welcome to Docker!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 35em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Tahoma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Verdana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Arial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Hello Docker!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);