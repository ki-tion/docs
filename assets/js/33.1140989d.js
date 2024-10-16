(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{317:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cadvisor-prometheus-grafana监控容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cadvisor-prometheus-grafana监控容器"}},[t._v("#")]),t._v(" "),a("center",[t._v("cadvisor+prometheus+grafana监控容器")])],1),t._v(" "),a("p",[t._v("使用cadvisor采集容器数据，prometheus存储，grafana展示")]),t._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("h3",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull bitnami/prometheus:2.52.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull google/cadvisor:v0.33.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull grafana/grafana:11.0.0\n")])])]),a("h3",{attrs:{id:"创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[t._v("#")]),t._v(" 创建目录")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /docker/listen/prometheus\n")])])]),a("h3",{attrs:{id:"拷贝prometheus配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝prometheus配置文件"}},[t._v("#")]),t._v(" 拷贝prometheus配置文件")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" prometheus bitnami/prometheus\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" prometheus:/etc/prometheus/prometheus.yml /docker/listen/prometheus\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" stop prometheus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" prometheus\n")])])]),a("h3",{attrs:{id:"编写docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写docker-compose"}},[t._v("#")]),t._v(" 编写docker-compose")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /docker/listen/docker-compose.yml\n")])])]),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bitnami/prometheus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.52.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prometheus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prometheus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9090"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /docker/listen/prometheus/prometheus.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/prometheus/prometheus.yml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cadvisor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" google/cadvisor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v0.33.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cadvisor\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cadvisor\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("privileged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/rootfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/lib/docker/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /dev/disk/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/dev/disk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("devices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /dev/kmsg\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("grafana")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grafana/grafana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("11.0.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grafana\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grafana\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 3333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n")])])]),a("h3",{attrs:{id:"修改prometheus配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改prometheus配置文件"}},[t._v("#")]),t._v(" 修改prometheus配置文件")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /docker/listen/prometheus/prometheus.yml\n")])])]),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my global config")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the scrape interval to every 15 seconds. Default is every 1 minute.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("evaluation_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Evaluate rules every 15 seconds. The default is every 1 minute.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# scrape_timeout is set to the global default (10s).")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Alertmanager configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alerting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alertmanagers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - alertmanager:9093")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rule_files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# - "first_rules.yml"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# - "second_rules.yml"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A scrape configuration containing exactly one endpoint to scrape:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Here it's Prometheus itself.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prometheus"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# metrics_path defaults to '/metrics'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# scheme defaults to 'http'.")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:9090"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加入cadvisor")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.200:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /docker/listen/docker-compose.yml up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("浏览器访问"),a("code",[t._v("http://192.168.1.200:3333")]),t._v(",默认用户"),a("code",[t._v("admin")]),t._v("，默认密码"),a("code",[t._v("admin")]),t._v("，首次进入需要修改密码")]),t._v(" "),a("h3",{attrs:{id:"添加数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加数据源"}},[t._v("#")]),t._v(" 添加数据源")]),t._v(" "),a("p",[t._v("侧边菜单:"),a("code",[t._v("Connections")]),t._v(" -> "),a("code",[t._v("Data sources")]),t._v(",点击"),a("code",[t._v("Add data sources")]),t._v(",选择"),a("code",[t._v("prometheus")]),t._v(",在"),a("code",[t._v("Prometheus server URL")]),t._v("输入框中写入"),a("code",[t._v("prometheus")]),t._v("地址,我的是"),a("code",[t._v("http://192.168.1.200:9090")])]),t._v(" "),a("h3",{attrs:{id:"添加面板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加面板"}},[t._v("#")]),t._v(" 添加面板")]),t._v(" "),a("p",[a("code",[t._v("Dashboards")]),t._v(" -> "),a("code",[t._v("New dashboard")]),t._v(" 点击 "),a("code",[t._v("Create dashboard")]),t._v(", 点击"),a("code",[t._v("Import a dashboard")]),t._v("直接在"),a("code",[t._v("grafana")]),t._v("官网导入一个，输入框填写id为"),a("code",[t._v("193")]),t._v("，选择数据源为"),a("code",[t._v("prometheus")]),t._v(",点击"),a("code",[t._v("import")]),t._v("即可")]),t._v(" "),a("h2",{attrs:{id:"效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/imgs/grafana效果.jpg"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);