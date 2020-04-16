(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{357:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"远程连接配置-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程连接配置-ssh"}},[s._v("#")]),s._v(" 远程连接配置 SSH")]),s._v(" "),a("h2",{attrs:{id:"通过网页登陆镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过网页登陆镜像"}},[s._v("#")]),s._v(" 通过网页登陆镜像")]),s._v(" "),a("p",[s._v("通过点击 SSH 按钮，连接服务器。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/35051245/63220633-a81e0f00-c1be-11e9-91e6-206e9f515f14.png",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"切换-root-角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换-root-角色"}},[s._v("#")]),s._v(" 切换 root 角色")]),s._v(" "),a("p",[a("code",[s._v("sudo -i")]),s._v("\n通过上面的命令，将权限切换到 root")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gxxxxxxxxxxx@learn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ sudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@learn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("#\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"修改-ssh-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-ssh-配置文件"}},[s._v("#")]),s._v(" 修改 SSH 配置文件")]),s._v(" "),a("h3",{attrs:{id:"打开编辑-sshd-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开编辑-sshd-config"}},[s._v("#")]),s._v(" 打开编辑 sshd_config")]),s._v(" "),a("p",[a("code",[s._v("vi /etc/ssh/sshd_config")])]),s._v(" "),a("h3",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),a("p",[s._v("PermitRootLogin yes //默认为 no，需要开启 root 用户访问改为 yes")]),s._v(" "),a("p",[s._v("PasswordAuthentication yes //默认为 no，改为 yes 开启密码登陆")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("strong",[s._v("i")]),s._v(" 进入编辑模式 "),a("strong",[s._v("esc")]),s._v(" 退出编辑")]),s._v(" "),a("p",[a("strong",[s._v("shift + :")]),s._v(" 输入 "),a("strong",[s._v("wq")]),s._v(" 保存退出")])]),s._v(" "),a("h2",{attrs:{id:"修改-root-密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-root-密码"}},[s._v("#")]),s._v(" 修改 root 密码")]),s._v(" "),a("p",[a("code",[s._v("passwd root")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@learn ~]# passwd root\nChanging password for user root.\nNew password:\nRetype new password:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"重启-ssh-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启-ssh-服务"}},[s._v("#")]),s._v(" 重启 SSH 服务")]),s._v(" "),a("p",[a("code",[s._v("service sshd start")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@learn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# service sshd start\nRedirecting to "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("systemctl start sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"通过软件远程连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过软件远程连接"}},[s._v("#")]),s._v(" 通过软件远程连接")])])}),[],!1,null,null,null);t.default=e.exports}}]);