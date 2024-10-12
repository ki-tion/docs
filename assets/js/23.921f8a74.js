(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{306:function(a,s,t){"use strict";t.r(s);var e=t(10),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"efk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#efk"}},[a._v("#")]),a._v(" "),s("center",[a._v("EFK")])],1),a._v(" "),s("h2",{attrs:{id:"拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull elasticsearch:7.7.1 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull kibana:7.7.1 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull elastic/filebeat:7.7.1\n")])])]),s("h2",{attrs:{id:"elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[a._v("#")]),a._v(" ElasticSearch")]),a._v(" "),s("p",[a._v("单节点的方式启动，指定堆内存为512m")]),a._v(" "),s("p",[a._v("不指定的话Es的初始内存很高,机器内存不够的话就OOM了")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ES_JAVA_POTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Xms512m -Xmx512m"')]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"discovery.type=single-node"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xpack.security.enabled=true"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v(":9200 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9300")]),a._v(":9300 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" elasticsearch elasticsearch:7.7.1\n")])])]),s("p",[a._v("进入容器设置密码")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" elasticsearch "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置一系列密码")]),a._v("\n./bin/elasticsearch-setup-passwords interactive\n")])])]),s("p",[a._v("账号：elastic")]),a._v(" "),s("h2",{attrs:{id:"kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kibana"}},[a._v("#")]),a._v(" Kibana")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" kibana "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v(":5601 kibana:7.7.1\n")])])]),s("p",[a._v("进入容器修改配置")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" kibana /bin/bash\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" config/kibana.yml\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ** THIS IS AN AUTO-GENERATED FILE **")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Default Kibana configuration for docker target")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kibana\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server.host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("elasticsearch.hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://192.168.2.201:9200"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("monitoring.ui.container.elasticsearch.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("i18n.locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zh-CN"')]),a._v("\n\n")])])]),s("p",[a._v("添加es的地址 [http://xxx:9200]")]),a._v(" "),s("p",[a._v("i18n.locale语言配置，kibana默认是英文界面，修改外为zh-CN就可以汉化。")]),a._v(" "),s("p",[a._v("退出，重启kibana容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart kibana\n")])])]),s("p",[a._v("访问看看：http://192.168.2.201:5601/")]),a._v(" "),s("p",[a._v("账号：elastic")]),a._v(" "),s("h2",{attrs:{id:"filebeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filebeat"}},[a._v("#")]),a._v(" FileBeat")]),a._v(" "),s("p",[a._v("启动FileBeat,这里用的镜像id，elastic/filebeat由斜杠识别有问题")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" filebeat a4c1bdadf04d \n")])])]),s("p",[a._v("拷贝出里面文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" filebeat:/usr/share/filebeat/filebeat.yml ./\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" filebeat:/usr/share/filebeat/logs ./\n")])])]),s("p",[a._v("停止并删除容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop filebeat "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" filebeat\n")])])]),s("p",[a._v("vim filebeat.yml")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#=========================== Filebeat inputs =============================")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filebeat.inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" log\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /usr/share/filebeat/logs/"),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("*.log")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个路径是filebeat容器内的路径，通过映射与宿主机相连")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##配置多行日志合并规则，已时间为准，一个时间发生的日志为一个事件")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("multiline.pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'^\\d{4}-\\d{2}-\\d{2}'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("multiline.negate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("multiline.match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" after\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 设置kibana的地址，开始filebeat的可视化")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("setup.kibana.host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://192.168.2.201:5601"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("setup.dashboards.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#=========================== Filebeat config =============================")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filebeat.config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("path.config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/modules.d/"),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("*.yml")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("reload.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#=========================== Filebeat 设置解析json格式日志的规则 =============================")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("processors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# - decode_json_fields:")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# fields: [""]')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# target: json")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("add_cloud_metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[a._v("~")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("add_docker_metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[a._v("~")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#=========================== Filebeat elasticsearch =============================")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("output.elasticsearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://192.168.2.201:9200"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"filebeat-%{+yyyy.MM.dd}"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"elastic"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 填写上面的es账号")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("setup.template.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-log"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("setup.template.pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-log-*"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("json.keys_under_root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("json.overwrite_keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),s("p",[a._v("重新运行filebeat")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" filebeat "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /docker-space/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /docker-space/filebeat/logs/:/usr/share/filebeat/logs a4c1bdadf04d\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("p",[a._v("安装elasticvue，google浏览器需要梯子")]),a._v(" "),s("p",[a._v("连接ElasticSearch(http://192.168.2.201:9200)即可")]),a._v(" "),s("h2",{attrs:{id:"设置密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[a._v("#")]),a._v(" 设置密码")]),a._v(" "),s("p",[a._v("进入elasticsearch容器修改配置")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" elasticsearch "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" config/elasticsearch.yml\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cluster.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-cluster"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("network.host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.0.0.0\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.cors.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.cors.allow-origin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加这句")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("xpack.security.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),s("p",[a._v("重新启动ES")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./bin/elasticsearch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])])]),s("p",[a._v("以交互的方式设置用户名和密码")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./bin/elasticsearch-setup-passwords interactive\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);