(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{393:function(t,n,a){"use strict";a.r(n);var s=a(10),r=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"算法-二分查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法-二分查找"}},[t._v("#")]),t._v(" "),n("center",[t._v("算法-二分查找")])],1),t._v(" "),n("p",[t._v("二分查找法（Binary Search），也称折半查找法（Half-interval Search），是一种在"),n("strong",[t._v("有序")]),t._v("数组中查找某一特定元素的搜索算法。")]),t._v(" "),n("p",[t._v("二分查找法的思想是：将数组从中间分成两部分，如果中间元素等于要查找的元素，则查找成功；如果中间元素小于要查找的元素，则将查找范围缩小到中间元素右边的部分；如果中间元素大于要查找的元素，则将查找范围缩小到中间元素左边的部分。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package main\n\nimport (\n\t"fmt"\n\t"math"\n\t"math/rand"\n\t"sort"\n\t"time"\n)\n\ntype Data struct {\n\tmax  int\n\tnum  int\n\tlist []int\n}\n\nfunc (d *Data) init() {\n\trand.Seed(time.Now().Unix())\n\td.list = make([]int, d.num)\n\tfor i := 0; i < d.num; i++ {\n\t\td.list[i] = rand.Intn(int(d.max))\n\t}\n\tsort.Sort(sort.IntSlice(d.list))\n}\n\n// 二分查找\nfunc (d *Data) half(num int, start int, end int) int {\n\tfor start <= end {\n\t\tmid := ((end - start) / 2) + start\n\t\tif num == d.list[mid] {\n\t\t\treturn mid\n\t\t} else if num < d.list[mid] {\n\t\t\tend = mid - 1\n\t\t} else {\n\t\t\tstart = mid + 1\n\t\t}\n\t}\n\treturn -1\n}\n\n/**\n* 按照百分比查找\n* 对于分布不叫均匀的数据，每次都折半效率不如按百分比查找\n*/\nfunc (d *Data) proportion(num int, start int, end int) int {\n\tfor start <= end {\n\t\tif start == end {\n\t\t\tif d.list[start] == num {\n\t\t\t\treturn start\n\t\t\t}\n\t\t\treturn -1\n\t\t}\n\t\tif num < d.list[start] || num > d.list[end] {\n\t\t\treturn -1\n\t\t}\n\t\tl := num - d.list[start]\n\t\tr := d.list[end] - d.list[start]\n\t\tmid := int(math.Floor(float64(l)/float64(r)*float64(end-start))) + start\n\t\tif num == d.list[mid] {\n\t\t\treturn mid\n\t\t} else if num < d.list[mid] {\n\t\t\tend = mid - 1\n\t\t} else {\n\t\t\tstart = mid + 1\n\t\t}\n\t}\n\treturn -1\n}\n\nfunc main() {\n\td := Data{\n\t\tmax: 10,\n\t\tnum: 10,\n\t}\n\td.init()\n\tfmt.Println(d.list)\n\tfmt.Println(d.half(5, 0, len(d.list)))\n\tfmt.Println(d.proportion(5, 0, len(d.list)-1))\n}\n\n')])])]),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("go run ."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("main.go\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[0 1 1 2 3 4 5 8 9 9]\n6\n6\n")])])]),n("p",[t._v("如果有重复的数据，二分查找和百分比查找结果可能会不一样，比如")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[0 3 4 5 5 6 6 7 9 9]\n3\n4\n")])])]),n("p",[t._v("另：百分比查找需要数据分布比较均匀否则效率可能不增反降")])])}),[],!1,null,null,null);n.default=r.exports}}]);