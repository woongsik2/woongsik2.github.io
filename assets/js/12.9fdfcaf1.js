(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{306:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"실행-컨텍스트-execution-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행-컨텍스트-execution-context","aria-hidden":"true"}},[t._v("#")]),t._v(" 실행 컨텍스트(Execution Context)")]),t._v(" "),a("h2",{attrs:{id:"실행-컨텍스트-execution-context-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행-컨텍스트-execution-context-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 실행 컨텍스트(Execution Context)")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("전역 컨텍스트")]),t._v(" 와 "),a("code",[t._v("함수 컨텍스트")]),t._v("."),a("br")]),t._v(" "),a("ul",[a("li",[t._v("코드를 처음 실행 하는 순간 모든것을 포함하는 "),a("code",[t._v("전역 컨텍스트")]),t._v("가 생긴다."),a("br"),t._v("\n(실행 하는 순간은, 브라우저가 스크립트를 로딩해서 실행하는것을 뜻한다.)"),a("br")]),t._v(" "),a("li",[a("code",[t._v("전역 컨텍스트")]),t._v("는 모든것을 관리하는 환경이며, 페이지가 종료될 때까지 유지된다."),a("br")]),t._v(" "),a("li",[t._v("함수를 호출 할 때마다 "),a("code",[t._v("함수 컨텍스트")]),t._v("가 하나씩 생긴다.")])])]),t._v(" "),a("li",[a("p",[t._v("컨텍스트의 네 가지 원칙"),a("br")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("전역 컨텍스트")]),t._v(" 하나 생성 후, 함수 호출시 마다 "),a("code",[t._v("컨텍스트")]),t._v("가 생성된다.")]),t._v(" "),a("li",[a("code",[t._v("컨텍스트")]),t._v(" 생성 시, "),a("code",[t._v("컨텍스트")]),t._v("안에 변수객체("),a("code",[t._v("arguments")]),t._v(","),a("code",[t._v("variable")]),t._v("),"),a("code",[t._v("scope chain")]),t._v(", "),a("code",[t._v("this")]),t._v("가 생성된다.")]),t._v(" "),a("li",[a("code",[t._v("컨텍스트")]),t._v(" 생성 후 함수가 실행되는데, 사용되는 변수들은 "),a("code",[t._v("변수객체")]),t._v(" 안에서 값을 찾고, 없다면 "),a("code",[t._v("스코프체인")]),t._v("으로 올라가며 찾는다.")]),t._v(" "),a("li",[t._v("함수 실행이 끝나면, 해당 "),a("code",[t._v("컨텍스트")]),t._v("는 사라진다.("),a("code",[t._v("클로저")]),t._v("는 제외) 페이지가 종료되면, "),a("code",[t._v("전역 컨텍스트")]),t._v("가 사라진다.")])])])]),t._v(" "),a("h2",{attrs:{id:"예제코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제코드","aria-hidden":"true"}},[t._v("#")]),t._v(" 예제코드")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bye'")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hi,'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"전역-컨텍스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전역-컨텍스트","aria-hidden":"true"}},[t._v("#")]),t._v(" 전역 컨텍스트")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("전역 컨텍스트")]),t._v("가 생성된 후 "),a("code",[t._v("변수객체")]),t._v(","),a("code",[t._v("scope chain")]),t._v(", "),a("code",[t._v("this")]),t._v("가 생성된다."),a("br"),t._v(" "),a("code",[t._v("전역 컨텍스트")]),t._v("는 "),a("code",[t._v("arguments")]),t._v("가 없고, "),a("code",[t._v("variable")]),t._v("은 해당 스코프들의 변수들을 말한다."),a("br"),t._v("\n위 코드에서는 "),a("code",[t._v("result")]),t._v(", "),a("code",[t._v("func")]),t._v(", "),a("code",[t._v("func1")]),t._v(" 이 있다."),a("br")]),t._v(" "),a("li",[a("code",[t._v("scope chain")]),t._v("은 자기 자신인 전역 변수객체이다."),a("br"),t._v(" "),a("ul",[a("li",[a("code",[t._v("this")]),t._v("는 따로 설정되어 있지 않으면 "),a("code",[t._v("window")]),t._v("이다."),a("br")]),t._v(" "),a("li",[a("code",[t._v("this")]),t._v("를 바꾸는 방법은 "),a("code",[t._v("new")]),t._v("를 호출 하는 것이다."),a("br"),t._v("\n또는, 함수에 다른 "),a("code",[t._v("this")]),t._v("를 "),a("code",[t._v("bind")]),t._v("할 수 있다.")])])]),t._v(" "),a("li",[t._v("위 코드를 객체 형식으로 표현하면 아래와 같다."),a("br")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'전역 컨텍스트'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    변수객체 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scopechain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'전역 변수객체'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("코드를 위에서부터 실행하게 되면, "),a("code",[t._v("func")]),t._v("와 "),a("code",[t._v("func1")]),t._v("은 "),a("code",[t._v("호이스팅")]),t._v(" 때문에 선언과 동시에 대입이 된다. 그 후, "),a("code",[t._v("variable")]),t._v("의 "),a("code",[t._v("result")]),t._v("에 'hello'가 대입된다.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" func1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"함수-컨텍스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-컨텍스트","aria-hidden":"true"}},[t._v("#")]),t._v(" 함수 컨텍스트")]),t._v(" "),a("ul",[a("li",[t._v("위 예제코드에서 "),a("code",[t._v("func1()")]),t._v("를 하는 순간, 새로운 컨텍스트인 "),a("code",[t._v("func1()")]),t._v(" "),a("code",[t._v("함수 컨텍스트")]),t._v("가 생성된다. 생성되었던 "),a("code",[t._v("전역 컨텍스트")]),t._v("는 그대로 유지 되고, "),a("code",[t._v("arguments")]),t._v("는 없고, "),a("code",[t._v("variable")]),t._v("은 "),a("code",[t._v("result")]),t._v("만 존재 한다. "),a("code",[t._v("scope chain")]),t._v("은 "),a("code",[t._v("func1")]),t._v(" "),a("code",[t._v("변수객체")]),t._v("와 상위의 "),a("code",[t._v("전역 변수객체")]),t._v("이다. "),a("code",[t._v("this")]),t._v("는 따로 설정하지 않았으므로 "),a("code",[t._v("window")]),t._v("이다.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func1 컨텍스트'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    변수객체"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scopechain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func1 변수객체'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'전역 변수객체'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("func1")]),t._v("를 호출한 후 차례로 실행 하는데, "),a("code",[t._v("variable")]),t._v("의 "),a("code",[t._v("result")]),t._v("에 "),a("code",[t._v("Bye")]),t._v("를 대입해주고, "),a("code",[t._v("console.log(result);")]),t._v(" 의 "),a("code",[t._v("result")]),t._v(" 변수는 "),a("code",[t._v("func1 컨텍스트")]),t._v(" 안에서 찾으면 된다."),a("br"),t._v(" > "),a("code",[t._v("variable")]),t._v("에 "),a("code",[t._v("result")]),t._v("가 "),a("code",[t._v("Bye")]),t._v("로 설정되어있으니, "),a("code",[t._v("result")]),t._v("가 콘솔에 찍히게 된다."),a("br"),t._v("\n그 다음 "),a("code",[t._v('func("Hi,");')]),t._v("은 "),a("code",[t._v("func1 컨텍스트")]),t._v("안에서 "),a("code",[t._v("func")]),t._v(" 변수를 찾을 수 없다."),a("br"),t._v("\n찾을 수 없는경우, "),a("code",[t._v("scope chain")]),t._v("에 의해 상위 "),a("code",[t._v("변수객체")]),t._v("에서 찾는다. 상위인 "),a("code",[t._v("전역 변수객체")]),t._v("에서 찾고, "),a("code",[t._v("variable")]),t._v("에 "),a("code",[t._v("func")]),t._v("함수를 호출한다."),a("br"),a("br"),t._v(" > "),a("code",[t._v("func")]),t._v("함수가 호출 된 후에는 "),a("code",[t._v("func 컨텍스트")]),t._v("도 생성된다. "),a("code",[t._v("arguments")]),t._v("는 "),a("code",[t._v("s = Hi,")]),t._v("이고, "),a("code",[t._v("scope chain")]),t._v("은 "),a("code",[t._v("func 스코프")]),t._v("와 "),a("code",[t._v("전역 스코프")]),t._v(" 이다."),a("br"),t._v("\n여기서 중요한것은, "),a("code",[t._v("lexical scoping")]),t._v("에 따라 "),a("code",[t._v("func")]),t._v(" 함수의 "),a("code",[t._v("scope chain")]),t._v("은 선언시 이미 정해져 있다. "),a("code",[t._v("func1 스코프")]),t._v("는 "),a("code",[t._v("func 컨텍스트")]),t._v("의 "),a("code",[t._v("scope chain")]),t._v("이 아니다."),a("br"),t._v(" > "),a("code",[t._v("variable")]),t._v("은 없고, "),a("code",[t._v("this")]),t._v("는 "),a("code",[t._v("window")]),t._v("이다.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func 컨텍스트'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    변수객체"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hi,'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scopechain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func 변수객체'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'전역 변수객체'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("컨텍스트가 생성된 후 함수가 실행 되는데, 나중에 생긴 "),a("code",[t._v("func")]),t._v("가 가장 먼저 실행된다."),a("br"),t._v(" > "),a("code",[t._v("func")]),t._v(" 함수 안에 "),a("code",[t._v('console.log(s + " " + result);')]),t._v("의 "),a("code",[t._v("s")]),t._v("와 "),a("code",[t._v("result")]),t._v("변수는 "),a("code",[t._v("func")]),t._v("컨텍스트에서 찾으면 된다. "),a("code",[t._v("s")]),t._v("는 "),a("code",[t._v("arguments")]),t._v("에서 찾을 수 있고, "),a("code",[t._v("result")]),t._v("는 "),a("code",[t._v("func 변수객체")]),t._v("에 없으므로, "),a("code",[t._v("scope chain")]),t._v("으로 "),a("code",[t._v("전역 스코프")]),t._v("에서 찾으면 된다."),a("br"),t._v(" > "),a("code",[t._v("전역 변수객체")]),t._v("로 올라가면, "),a("code",[t._v("variable")]),t._v("에 "),a("code",[t._v("result")]),t._v("값이 "),a("code",[t._v("hello")]),t._v("라고 되어있기 때문에, "),a("code",[t._v("Hi, Hello")]),t._v("가 된다."),a("br"),t._v(" > "),a("code",[t._v("func 컨텍스트")]),t._v("는 "),a("code",[t._v("func1 컨텍스트")]),t._v("와 전혀 관계가 없는것이다."),a("br"),t._v(" > "),a("code",[t._v("func")]),t._v(" 함수 종료 후 "),a("code",[t._v("func 컨텍스트")]),t._v("가 사라지고, "),a("code",[t._v("func1")]),t._v(" 함수의 실행이 마무리가 된다. "),a("code",[t._v("func 컨텍스트")]),t._v("가 사라지고, "),a("code",[t._v("func1 컨텍스트")]),t._v("도 다음으로 사라지며, 마지막에 "),a("code",[t._v("전역 컨텍스트")]),t._v("도 사라진다.")])])])},[],!1,null,null,null);s.default=e.exports}}]);