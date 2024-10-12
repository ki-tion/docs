(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{372:function(t,s,a){"use strict";a.r(s);var n=a(10),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用视口尺寸和计算属性做响应式开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用视口尺寸和计算属性做响应式开发"}},[t._v("#")]),t._v(" "),s("center",[t._v("使用视口尺寸和计算属性做响应式开发")])],1),t._v(" "),s("p",[t._v("响应式开发是前端开发中一个很常见的需求，比如根据屏幕尺寸来调整布局，根据屏幕宽度来调整字体大小等等。")]),t._v(" "),s("p",[t._v("实现方式有很多，我提供一种思路，使用视口尺寸和计算属性。")]),t._v(" "),s("p",[t._v("通常设计师给的设计图，pc端是1920"),s("em",[t._v("1080，移动端是375")]),t._v("667。将屏幕分割成不同(按设计图)等分，再利用计算属性"),s("code",[t._v("calc")]),t._v("计算不同等分下的布局或字体大小可以有效地减少适配工作。")]),t._v(" "),s("h2",{attrs:{id:"定义等分大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义等分大小"}},[t._v("#")]),t._v(" 定义等分大小")]),t._v(" "),s("p",[t._v("以1920*1080举例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--dw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" / 1920"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--dh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" / 1080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html, body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--dw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("*800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--dh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("*800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("不要直接"),s("code",[t._v("--dw: 100vw / 1080")]),t._v("，没用，CSS变量不支持直接的数学运算,但是，可以使用calc()函数来进行计算，这样一来尺寸变化，计算属性也会自动更新。为什么不直接使用vw呢？因为需要自己计算设计图到视口的比例，这个是自动计算的。比如设计图的宽度是100px，这里就直接写"),s("code",[t._v("calc(var(--dw)*100)")]),t._v("即可,注意记得除掉html和body的内外边距。当然这个也不是万能，具体情况具体分析")])])}),[],!1,null,null,null);s.default=p.exports}}]);