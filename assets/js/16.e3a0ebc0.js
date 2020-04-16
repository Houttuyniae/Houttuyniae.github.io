(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{356:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"自定义镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义镜像"}},[s._v("#")]),s._v(" 自定义镜像")]),s._v(" "),n("h2",{attrs:{id:"使用-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerfile"}},[s._v("#")]),s._v(" 使用 Dockerfile")]),s._v(" "),n("p",[s._v("首先先来看一段名为"),n("em",[s._v("Dockerfile")]),s._v("脚本,在根据这个脚本来相关说明。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[n("em",[s._v("Dockerfile")]),s._v(" 名字不能改变")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Base images 基础镜像")]),s._v("\nFROM centos\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#MAINTAINER 维护者信息")]),s._v("\nMAINTAINER lorenwe\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ENV 设置环境变量")]),s._v("\nENV "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" /usr/local/nginx/sbin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ADD  文件放在当前目录下，拷过去会自动解压")]),s._v("\nADD nginx-1.13.7.tar.gz /tmp/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RUN 执行以下命令")]),s._v("\nRUN  yum update -y "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" gcc automake autoconf libtool "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gcc-c++ zlib zlib-devel openssl openssl-devel perl perl-devel pcre pcre-devel libxslt libxslt-devel "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum clean all "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/src/*\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -s /sbin/nologin -M www\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#WORKDIR 相当于cd")]),s._v("\nWORKDIR /tmp/nginx-1.13.7\n\nRUN ./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("www --group"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("www --with-http_ssl_module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--with-http_gzip_static_module\n--with-pcre "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\nRUN "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" / "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /tmp/\n\nCOPY nginx.conf /usr/local/nginx/conf/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#EXPOSE 映射端口")]),s._v("\nEXPOSE "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自动挂载为匿名卷 (开启时启动容器会出错,需要查看日志,因为匿名卷下没有nginx.conf文件)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#VOLUME /usr/local/nginx/conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当定义了entrypoint以后，CMD只能够作为参数进行传递")]),s._v("\nENTRYPOINT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#相当于在容器执行：nginx -g "daemon off;"')]),s._v("\nCMD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-g"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("h3",{attrs:{id:"from-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#from-指令"}},[s._v("#")]),s._v(" FROM 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Base images 基础镜像")]),s._v("\nFROM centos\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("em",[s._v("FROM")]),s._v(" 命令类似"),n("em",[s._v("Java")]),s._v("中"),n("em",[s._v("extend")]),s._v("一样,继承某一个镜像，已这个镜像为基础在进行操作，所以"),n("em",[s._v("FROM 指令必须放在第一条指令的位置")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("如果不需要基础镜像 Docker 提供了 scratch 这个虚拟镜像,通过"),n("em",[s._v("FROM scratch")])])]),s._v(" "),n("p",[s._v("RUN useradd -s /sbin/nologin -M www")]),s._v(" "),n("p",[s._v("-s 表示指定用户所用的 shell，此处为/sbin/nologin，表示不登录。\n-M 表示不创建用户主目录")]),s._v(" "),n("h3",{attrs:{id:"maintainer-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maintainer-指令"}},[s._v("#")]),s._v(" MAINTAINER 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#MAINTAINER 维护者信息")]),s._v("\nMAINTAINER author\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("em",[s._v("MAINTAINER")]),s._v(" 作者相关信息")]),s._v(" "),n("h3",{attrs:{id:"env-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#env-指令"}},[s._v("#")]),s._v(" ENV 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ENV 设置环境变量")]),s._v("\nENV "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" /usr/local/nginx/sbin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("$PATH 表示之前设置过的环境变量，而 : 分隔")])]),s._v(" "),n("p",[s._v("设置环境变量，有两种设置方式")]),s._v(" "),n("ol",[n("li",[s._v("ENV key value")]),s._v(" "),n("li",[s._v("ENV key1=value1 key2=value2")])]),s._v(" "),n("h3",{attrs:{id:"add-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-指令"}},[s._v("#")]),s._v(" ADD 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ADD  文件放在当前目录下，拷过去会自动解压")]),s._v("\nADD nginx-1.13.7.tar.gz /tmp/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("此指令会把目标文件,添加到指定文件目录下,如果目标文件是一个压缩包,则在构建镜像的时候自动解压文件。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("需要添加文件文件必须和 Dockerfile 文件同级")])]),s._v(" "),n("h3",{attrs:{id:"run-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-指令"}},[s._v("#")]),s._v(" RUN 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("RUN yum update -y "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" gcc automake autoconf libtool "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gcc-c++ zlib zlib-devel openssl openssl-devel perl perl-devel pcre pcre-devel libxslt libxslt-devel "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum clean all "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/src/*\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -s /sbin/nologin -M www\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("RUN 指令是用来执行命令行命令的")]),s._v(" "),n("h3",{attrs:{id:"workdir-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#workdir-指令"}},[s._v("#")]),s._v(" WORKDIR 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#WORKDIR 相当于cd")]),s._v("\nWORKDIR /tmp/nginx-1.13.7\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("设置指定工作目录,当启动容器时,并"),n("em",[s._v("进入容器内部")]),s._v("时会进入到这个目录下")]),s._v(" "),n("h3",{attrs:{id:"copy-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copy-指令"}},[s._v("#")]),s._v(" COPY 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("COPY nginx.conf /usr/local/nginx/conf/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("拷贝一份 nginx 配置文件，现在就在 dockerfile 所在目录创建这个文件到")]),s._v(" "),n("p",[s._v("容器内的"),n("code",[s._v("/usr/local/nginx/conf/")]),s._v("下")]),s._v(" "),n("h3",{attrs:{id:"expose-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#expose-指令"}},[s._v("#")]),s._v(" EXPOSE 指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#EXPOSE 映射端口")]),s._v("\nEXPOSE "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("EXPOSE 端口 1 端口 2")]),s._v(" "),n("p",[s._v("对外暴露端口\n"),n("a",{attrs:{href:"https://blog.csdn.net/qq_17639365/article/details/86655177",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关文章"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"entrypoint-与-cmd-指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-与-cmd-指令"}},[s._v("#")]),s._v(" ENTRYPOINT 与 CMD 指令")]),s._v(" "),n("p",[s._v("ENTRYPOINT 与 CMD 具有相同的功能，在容器启动后，执行命令，唯一差别在于")]),s._v(" "),n("p",[n("strong",[s._v("ENTRYPOINT")]),s._v(" 在 docker run 运行容器之后的参数会被当做参数传递给 ENTRYPOINT,之后形成新的命令组合。")]),s._v(" "),n("p",[n("strong",[s._v("CMD")]),s._v(" 则会被覆盖改。")]),s._v(" "),n("p",[n("strong",[s._v("entrypoint")]),s._v(" 的作用是，把整个 container 变成了一个可执行的文件，这样不能够通过替换 "),n("strong",[s._v("CMD")]),s._v(" 的方法来改变创建 container 的方式。 #但是可以通过参数传递的方法影响到 container 内部,每个 Dockerfile 只能够包含一个 entrypoint #当定义了 entrypoint 以后，CMD 只能够作为参数进行传递")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("Dockfile 中可以有多个 CMD 与 ENTRYPOINT 指令，但只有最后一个生效。")])]),s._v(" "),n("p",[n("a",{attrs:{href:"http://blog.itpub.net/28916011/viewspace-2213396/",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关文章"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"制作镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#制作镜像"}},[s._v("#")]),s._v(" 制作镜像")]),s._v(" "),n("p",[n("code",[s._v("docker build [OPTIONS] PATH | URL | -")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("docker build -t nginx:1.0.0 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);