(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4947],{44162:function(e,t,n){"use strict";n.d(t,{HC:function(){return x},Kf:function(){return s},Nk:function(){return p},gE:function(){return m},jv:function(){return h},nz:function(){return f},oh:function(){return u},qn:function(){return d},t1:function(){return v},y9:function(){return b}});var r=n(9518),o=n(23831),i=n(86422),c=n(73942),a=n(49125),l=n(90880),u=68;function d(e,t){var n,r,c=((null===t||void 0===t||null===(n=t.theme)||void 0===n?void 0:n.borders)||o.Z.borders).light,a=((null===t||void 0===t||null===(r=t.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,l=t||{},u=l.blockColor,d=l.isSelected,s=l.theme;return d?c=((null===s||void 0===s?void 0:s.content)||o.Z.content).active:i.tf.TRANSFORMER===e||u===i.Lq.PURPLE?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).purple,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).purpleLight):i.tf.DATA_EXPORTER===e||u===i.Lq.YELLOW?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).yellow,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).yellowLight):i.tf.DATA_LOADER===e||u===i.Lq.BLUE?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).blue,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).blueLight):i.tf.SENSOR===e||u===i.Lq.PINK?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).pink,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).pinkLight):i.tf.DBT===e?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).dbt,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).dbtLight):u===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):(i.tf.SCRATCHPAD===e||u===i.Lq.GREY||i.tf.CUSTOM===e&&!u)&&(c=((null===s||void 0===s?void 0:s.content)||o.Z.content).default,a=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).contentDefaultTransparent),{accent:c,accentLight:a}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(d(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(d(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).danger,";\n  ")}),(function(e){return e.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(e){return e.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),f=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-1"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n  ")}),(function(e){return e.zIndex&&"\n    z-index: ".concat(6+(e.zIndex||0),";\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-2"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,a.iI,a.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-3"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(e){return e.additionalZIndex>0&&"\n      z-index: ".concat(8+e.additionalZIndex,";\n    ")}),(function(e){return"\n        background-color: ".concat((e.theme.text||o.Z.text).fileBrowser,";\n      ")})),v=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-4"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),b=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-5"})(["margin-bottom:","px;padding-bottom:","px;",""],a.cd*a.iI,a.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(e.normalPadding?a.iI:u,"px;\n  ")})),x=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-6"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,u)},43032:function(e,t,n){"use strict";n.d(t,{Cl:function(){return a},Nk:function(){return l},ZG:function(){return c}});var r=n(9518),o=n(23831),i=n(49125),c=1.5*i.iI,a=1*c+i.iI/2,l=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||o.Z.interactive).hoverBackground,";\n    ")}))},92953:function(e,t,n){"use strict";var r;n.d(t,{a:function(){return r}}),function(e){e.BLOCK_RUNS="block_runs",e.BLOCK_RUNTIME="block_runtime",e.PIPELINE_RUNS="pipeline_runs"}(r||(r={}))},87465:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});n(82684);var r=n(34376),o=n(87372),i=n(76623),c=n(86673),a=n(19711),l=n(2850),u=n(9518),d=n(23831),s=n(49125),p=u.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],s.iI,s.tr,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||d.Z.interactive).checked,";\n  ")}),(function(e){return!e.selected&&"\n    cursor: pointer;\n  "})),f=n(92953),h=n(59920),m=n(28598);var v=function(e){var t=e.breadcrumbs,n=e.children,u=e.monitorType,d=e.pipeline,v=e.subheader,b=(0,r.useRouter)();return(0,m.jsx)(i.Z,{before:(0,m.jsxs)(l.M,{children:[(0,m.jsx)(c.Z,{p:s.cd,children:(0,m.jsx)(o.Z,{level:4,muted:!0,children:"Insights"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),b.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===d||void 0===d?void 0:d.uuid,"/monitors"))},selected:f.a.PIPELINE_RUNS==u,children:(0,m.jsx)(a.ZP,{children:"Pipeline runs"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),b.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===d||void 0===d?void 0:d.uuid,"/monitors/block-runs"))},selected:f.a.BLOCK_RUNS==u,children:(0,m.jsx)(a.ZP,{children:"Block runs"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),b.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===d||void 0===d?void 0:d.uuid,"/monitors/block-runtime"))},selected:f.a.BLOCK_RUNTIME==u,children:(0,m.jsx)(a.ZP,{children:"Block runtime"})})]}),breadcrumbs:t,pageName:h.M.MONITOR,pipeline:d,subheader:v,uuid:"pipeline/monitor",children:n})}},2850:function(e,t,n){"use strict";n.d(t,{M:function(){return a},W:function(){return c}});var r=n(9518),o=n(23831),i=n(3055),c=34*n(49125).iI,a=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],i.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")}))},68735:function(e,t,n){"use strict";var r=n(26304),o=n(21831),i=n(82394),c=n(82684),a=n(26226),l=n(9518),u=n(90948),d=n(84969),s=n(65743),p=n(85587),f=n(79487),h=n(52136),m=n(67778),v=n(29989),b=n(17066),x=n(84482),g=n(76771),y=n(98889),O=n(65376),Z=n(61655),T=n(97745),E=n(48072),k=n(10103),j=n(84181),A=n(24903),R=n(67971),_=n(86673),P=n(19711),L=n(52359),D=n(23831),w=n(80906),S=n(73899),C=n(2005),I=n(31012),M=n(49125),N=n(24224),F=n(344),U=n(45739),B=n(28598),X=["areaBetweenLines","data","events","height","lineLegendNames","margin","width","xAxisLabel","xLabelFormat","yAxisLabel","yLabelFormat"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=q(q({},O.j),{},{backgroundColor:D.Z.background.muted,border:"none"}),z=(0,Z.Z)((function(e){var t=e.areaBetweenLines,n=e.data,r=e.events,i=void 0!==r&&r,a=e.getX,Z=e.getY,R=e.gridProps,_=void 0===R?{}:R,L=e.height,X=e.hideGridX,H=e.hideTooltip,z=e.increasedXTicks,K=e.lineLegendNames,W=e.margin,G=e.noCurve,V=e.numYTicks,J=e.renderXTooltipContent,Q=e.renderYTooltipContent,$=e.showTooltip,ee=e.thickStroke,te=e.tooltipData,ne=e.tooltipLeft,re=void 0===ne?0:ne,oe=e.tooltipTop,ie=void 0===oe?[]:oe,ce=e.width,ae=e.xLabelFormat,le=e.xLabelRotate,ue=void 0===le||le,de=e.yLabelFormat,se=(0,c.useContext)(l.ThemeContext),pe=a||function(e){return null===e||void 0===e?void 0:e.x},fe=Z||function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null===e||void 0===e||null===(t=e.y)||void 0===t?void 0:t[n]},he=D.Z.monotone.gray,me=D.Z.brand.wind200,ve=D.Z.content.muted,be=D.Z.monotone.gray,xe=n.map((function(e){return Number(pe(e))}));if(ce<10)return null;var ge=ce-W.left-W.right,ye=L-W.top-W.bottom,Oe=ge/2,Ze=Math.max.apply(Math,(0,o.Z)(n.map((function(e){var t=e.y;return(null===t||void 0===t?void 0:t.length)||0})))),Te=(0,c.useMemo)((function(){return(0,j.Z)({domain:[Math.min.apply(Math,(0,o.Z)(xe)),Math.max.apply(Math,(0,o.Z)(xe))],range:[0,ge]})}),[ge,xe]),Ee=Math.min.apply(Math,(0,o.Z)(n.map((function(e){var t=e.y;return Math.min.apply(Math,(0,o.Z)(t||[]))})))),ke=Math.max.apply(Math,(0,o.Z)(n.map((function(e){var t=e.y;return Math.max.apply(Math,(0,o.Z)(t||[]))})))),je=(0,c.useMemo)((function(){return(0,j.Z)({domain:[Ee,ke],nice:!0,range:[ye,0]})}),[ye,ke,Ee]),Ae=ce>520?z?20:10:z?10:5,Re=(0,U.K)(se),_e=ve,Pe=Re.map((function(e){return{stroke:e}})),Le=(0,A.Z)({domain:K||[],range:Pe.map((function(e){return e.stroke}))}),De=(0,c.useCallback)((function(e){var t=((0,E.Z)(e)||{x:0}).x,r=Te.invert(t-W.left),o=(0,N.ry)(xe,(function(e){return r>=e})),i=n[o-1],c=n[o],a=i;c&&(r-pe(i)>pe(c)-r?a=c:(a=i,o-=1));var l=(0,k.range)(0,Ze).map((function(e){return je(fe(a,e))}));fe(a)&&$({tooltipData:q(q({},a),{},{index:o}),tooltipLeft:t,tooltipTop:l})}),[n,pe,fe,W,$,Te,je]),we={};return G||(we.curve=T.ZP),(0,B.jsxs)(B.Fragment,{children:[K&&(0,B.jsx)("div",{style:{marginLeft:null===W||void 0===W?void 0:W.left},children:(0,B.jsx)(b.Z,{labelFormat:function(e){return e},scale:Le,children:function(e){return(0,B.jsx)("div",{style:{display:"flex",flexDirection:w.qs.ROW},children:e.map((function(e,t){return(0,B.jsxs)(x.Z,{margin:"0 5px",onClick:function(){i&&alert("clicked: ".concat(JSON.stringify(e)))},children:[(0,B.jsx)("svg",{height:15,width:15,children:(0,B.jsx)("rect",{fill:e.value,height:15,width:15})}),(0,B.jsx)(g.Z,{align:"left",margin:"0 0 0 4px",children:(0,B.jsx)(P.ZP,{small:!0,children:e.text})})]},"legend-quantile-".concat(t))}))})}})}),(0,B.jsxs)("svg",{height:L,width:ce,children:[!t&&(0,B.jsx)(s.Z,{fill:"transparent",height:L,onMouseLeave:function(){return H()},onMouseMove:De,onTouchMove:De,onTouchStart:De,rx:14,width:ce-(W.left+W.right),x:W.left,y:0}),(0,B.jsxs)(v.Z,{left:W.left,top:W.top,children:[!X&&(0,B.jsx)(h.Z,q({height:ye,pointerEvents:"none",scale:Te,stroke:he,strokeDasharray:"3,3",strokeOpacity:.4,width:ge},_)),(0,B.jsx)(m.Z,q({height:ye,pointerEvents:"none",scale:je,stroke:he,strokeDasharray:"3,3",strokeOpacity:.4,width:ge},_)),(0,B.jsx)("line",{stroke:he,x1:ge,x2:ge,y1:0,y2:ye}),(0,B.jsx)(u.Z,{numTicks:Ae,scale:Te,stroke:_e,tickFormat:function(e){return ae?ae(e):e},tickLabelProps:function(e){return{fill:ve,fontFamily:C.ry,fontSize:I.J5,textAnchor:"middle",transform:ue&&"rotate(-45, ".concat(Te(e),", 0) translate(-32, 4)")}},tickStroke:_e,top:ye}),(0,B.jsx)(d.Z,{hideTicks:!0,numTicks:V,scale:je,stroke:_e,tickFormat:function(e){return de?de(e):(0,F.P5)(e)},tickLabelProps:function(e){return{dx:String(e).length>4?3:0,fill:ve,fontFamily:C.ry,fontSize:I.J5,textAnchor:"end",transform:"translate(0,2.5)"}},tickStroke:_e}),t&&t.map((function(e){var t=e[0],r=e[1];return(0,c.createElement)(y.Z,q(q({},we),{},{aboveAreaProps:{fill:D.Z.brand.earth400,fillOpacity:.3},belowAreaProps:{fill:me,fillOpacity:.2},clipAboveTo:0,clipBelowTo:ye,data:n,id:"".concat(Math.random()),key:"".concat(t,"-").concat(r),x:function(e){return Te(pe(e))},y0:function(e){return je("undefined"===typeof r?Ee:fe(e,r))},y1:function(e){return je(fe(e,t))}}))})),(0,k.range)(0,Ze).map((function(e){return(0,c.createElement)(p.Z,q(q({},we),{},{data:n.filter((function(e){return void 0!=e.y})),key:e,pointerEvents:"none",strokeWidth:ee?2:1,x:function(e){return Te(pe(e))},y:function(t){return je(t.y&&(e>=t.y.length?Ee:fe(t,e)))}},Pe[e]))}))]}),te&&(0,B.jsxs)("g",{children:[(0,B.jsx)(f.Z,{from:{x:re,y:W.top},pointerEvents:"none",stroke:S.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:re,y:ye+W.top}}),ie.map((function(e,t){return(0,B.jsx)("circle",{cx:re,cy:e+1+W.top,fill:Pe[t].stroke,fillOpacity:.1,pointerEvents:"none",r:4,stroke:be,strokeOpacity:.1,strokeWidth:1},t)})),ie.map((function(e,t){return(0,B.jsx)("circle",{cx:re,cy:e+W.top,fill:Pe[t].stroke,pointerEvents:"none",r:4,stroke:Pe[t].stroke,strokeWidth:2},t)}))]})]}),te&&(0,B.jsxs)("div",{children:[ie.map((function(e,t){var n=fe(te,t);return t>=1&&Math.abs(ie[t-1]-e)<5*M.iI&&(e+=3*M.iI),(0,B.jsxs)(O.Z,{left:re>Oe?re-(0,F.Vs)(Q,te,t)*M.iI:re+M.iI,style:Y,top:e-2*M.iI,children:[Q&&Q(te,t),!Q&&(0,B.jsxs)(P.ZP,{center:!0,small:!0,children:[n.toFixed?n.toFixed(3):n," ",null===K||void 0===K?void 0:K[t]]})]},t)})),(0,B.jsxs)(O.Z,{left:re>Oe?re-4*(0,F.Vs)(J,te):re,style:q(q({},Y),{},{transform:"translateX(-65%)"}),top:ye+W.top,children:[J&&J(te),!J&&(0,B.jsx)(P.ZP,{center:!0,small:!0,children:pe(te).toFixed(3)})]})]})]})}));t.Z=function(e){var t=e.areaBetweenLines,n=e.data,o=(e.events,e.height),i=e.lineLegendNames,c=e.margin,l=void 0===c?{}:c,u=e.width,d=e.xAxisLabel,s=e.xLabelFormat,p=e.yAxisLabel,f=e.yLabelFormat,h=(0,r.Z)(e,X),m=q(q({},{bottom:3*M.iI,left:5*M.iI,right:3*M.iI,top:3*M.iI}),l);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{style:{display:"flex",height:o,marginBottom:M.iI,width:"100%"},children:[p&&(0,B.jsx)(R.Z,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,B.jsx)(L.Z,{children:(0,B.jsx)(P.ZP,{center:!0,muted:!0,small:!0,children:p})})}),(0,B.jsx)(_.Z,{mr:1}),(0,B.jsx)("div",{style:{height:o,width:"undefined"===typeof u?"100%":u},children:(0,B.jsx)(a.Z,{children:function(e){var r=e.width,o=e.height;return(0,B.jsx)(z,q(q({},h),{},{areaBetweenLines:t,data:n,height:o,lineLegendNames:i,margin:m,width:r,xLabelFormat:s,yLabelFormat:f}))}})})]}),d&&(0,B.jsx)("div",{style:{paddingLeft:p?36:0,paddingTop:4},children:(0,B.jsx)(P.ZP,{center:!0,muted:!0,small:!0,children:d})})]})}},45739:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n(31969),o=function(e){var t=e||r.Z,n=t.brand,o=n.earth200,i=n.earth300,c=n.earth400,a=n.energy200,l=n.energy300,u=n.energy400,d=n.fire200,s=n.fire300,p=n.fire400,f=n.water200,h=n.water300,m=n.water400,v=n.wind200,b=n.wind300,x=n.wind400,g=t.chart;return[g.backgroundPrimary,g.backgroundSecondary,g.backgroundTertiary].concat([x,m,p,u,c,b,h,s,l,i,v,f,d,a,o])}},52359:function(e,t,n){"use strict";var r=n(9518).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);t.Z=r},344:function(e,t,n){"use strict";n.d(t,{P5:function(){return o},Vs:function(){return i}});n(90211);var r=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function o(e){return"number"!==typeof e?e:e>=1e4?r.format(e):e.toString()}function i(e,t,n){var r,o;if("undefined"===typeof e||"undefined"===typeof t)return 0;var i=null===e||void 0===e||null===(r=e(t,n))||void 0===r||null===(o=r.props)||void 0===o?void 0:o.children;return(Array.isArray(i)?i:[i]).join("").length}},80906:function(e,t,n){"use strict";var r,o,i,c;n.d(t,{Q0:function(){return r},qs:function(){return o}}),function(e){e.ADD="add",e.AVERAGE="average",e.CLEAN_COLUMN_NAME="clean_column_name",e.COUNT="count",e.COUNT_DISTINCT="count_distinct",e.CUSTOM="custom",e.DIFF="diff",e.DROP_DUPLICATE="drop_duplicate",e.EXPAND_COLUMN="expand_column",e.EXPLODE="explode",e.FILTER="filter",e.FIRST="first",e.FIX_SYNTAX_ERRORS="fix_syntax_errors",e.GROUP="group",e.IMPUTE="impute",e.JOIN="join",e.LAST="last",e.LIMIT="limit",e.MAX="max",e.MEDIAN="median",e.MIN="min",e.MODE="mode",e.NORMALIZE="normalize",e.REFORMAT="reformat",e.REMOVE="remove",e.REMOVE_OUTLIERS="remove_outliers",e.SCALE="scale",e.SELECT="select",e.SHIFT_DOWN="shift_down",e.SHIFT_UP="shift_up",e.SORT="sort",e.STANDARDIZE="standardize",e.SUM="sum",e.UNION="union",e.UPDATE_TYPE="update_type",e.UPDATE_VALUE="update_value"}(r||(r={})),function(e){e.COLUMN="column",e.ROW="row"}(o||(o={})),function(e){e.NOT_APPLIED="not_applied",e.COMPLETED="completed"}(i||(i={})),function(e){e.FEATURE="feature"}(c||(c={}))},86422:function(e,t,n){"use strict";n.d(t,{$W:function(){return p},DA:function(){return s},HX:function(){return m},J8:function(){return h},Lq:function(){return u},Qj:function(){return v},Ut:function(){return y},V4:function(){return g},VZ:function(){return f},dO:function(){return d},f2:function(){return x},iZ:function(){return b},t6:function(){return c},tf:function(){return l}});var r,o,i,c,a=n(82394);!function(e){e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(c||(c={}));var l,u,d=(r={},(0,a.Z)(r,c.PYTHON,"PY"),(0,a.Z)(r,c.R,"R"),(0,a.Z)(r,c.SQL,"SQL"),(0,a.Z)(r,c.YAML,"YAML"),r);!function(e){e.CHART="chart",e.CUSTOM="custom",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.TRANSFORMER="transformer"}(l||(l={})),function(e){e.BLUE="blue",e.GREY="grey",e.PINK="pink",e.PURPLE="purple",e.TEAL="teal",e.YELLOW="yellow"}(u||(u={}));var s,p=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.TRANSFORMER],f=[l.DATA_EXPORTER,l.DATA_LOADER],h=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],m=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],v=[l.CHART,l.SCRATCHPAD,l.SENSOR],b=[l.SCRATCHPAD];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(s||(s={}));var x=[l.DATA_EXPORTER,l.TRANSFORMER],g=(o={},(0,a.Z)(o,l.CUSTOM,"Custom"),(0,a.Z)(o,l.DATA_EXPORTER,"Data exporter"),(0,a.Z)(o,l.DATA_LOADER,"Data loader"),(0,a.Z)(o,l.SCRATCHPAD,"Scratchpad"),(0,a.Z)(o,l.SENSOR,"Sensor"),(0,a.Z)(o,l.TRANSFORMER,"Transformer"),o),y=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER];i={},(0,a.Z)(i,l.DATA_EXPORTER,"DE"),(0,a.Z)(i,l.DATA_LOADER,"DL"),(0,a.Z)(i,l.SCRATCHPAD,"SP"),(0,a.Z)(i,l.SENSOR,"SR"),(0,a.Z)(i,l.TRANSFORMER,"TF")},55378:function(e,t,n){"use strict";var r=n(82394),o=n(26304),i=n(82684),c=n(9518),a=n(69898),l=n(31969),u=n(49125),d=n(28598),s=["beforeIcon","children","label","placeholder"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],a.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",u.iI,u.iI,2.5*u.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||l.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||l.Z.content).inverted,";\n  ")})),m=function(e,t){var n=e.beforeIcon,r=e.children,i=e.label,c=e.placeholder,l=(0,o.Z)(e,s);return(0,d.jsx)(a.Z,f(f({},l),{},{beforeIcon:n,input:(0,d.jsxs)(h,f(f({},l),{},{children:[(i||c)&&(0,d.jsx)("option",{disabled:!0,selected:!0,value:"",children:i||c}),r]})),label:i,placeholder:c,ref:t,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};t.Z=i.forwardRef(m)},68805:function(e,t,n){"use strict";n.r(t);var r=n(77837),o=n(75582),i=n(82394),c=n(38860),a=n.n(c),l=n(82684),u=n(92083),d=n.n(u),s=n(16634),p=n(67971),f=n(87372),h=n(68735),m=n(87465),v=n(41788),b=n(86673),x=n(55378),g=n(19711),y=n(55170),O=n(28799),Z=n(23831),T=n(73942),E=n(43032),k=n(92953),j=n(9518),A=n(44162),R=n(24224),_=n(96510),P=n(83455),L=n(28598);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=e.pipeline,n=(0,l.useContext)(j.ThemeContext),c=(0,l.useState)(null),u=c[0],v=c[1],D=t.uuid,S=y.ZP.pipelines.detail(D,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,C=(0,l.useMemo)((function(){return w(w({},null===S||void 0===S?void 0:S.pipeline),{},{uuid:D})}),[S,D]),I=y.ZP.pipeline_schedules.pipelines.list(D).data,M=(0,l.useMemo)((function(){return null===I||void 0===I?void 0:I.pipeline_schedules}),[I]),N=(0,l.useMemo)((function(){return(0,R.HK)(null===C||void 0===C?void 0:C.blocks,(function(e){return e.uuid}))||{}}),[C]),F=(0,l.useState)(null),U=F[0],B=F[1],X=(0,P.Db)(function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat((0,O.ZP)(y.x8),"/block_run_time?pipeline_uuid=").concat(D),(t||0===t)&&(n+="&pipeline_schedule_id=".concat(t)),e.abrupt("return",fetch(n,{method:"GET"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(e){B(e)}})}}),H=(0,o.Z)(X,1)[0];(0,l.useEffect)((function(){H(u)}),[H]);var q=((null===U||void 0===U?void 0:U.monitor_stats)||{}).stats,Y=(0,l.useMemo)((function(){for(var e=new Date,t=[],n=0;n<90;n++)t.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return t}),[]),z=(0,l.useMemo)((function(){if(q)return Object.entries(q).reduce((function(e,t){var n=(0,o.Z)(t,2),r=n[0],c=n[1].data;return w(w({},e),{},(0,i.Z)({},r,Y.map((function(e){return{x:e,y:e in c?[c[e]]:null}}))))}),{})}),[q]),K=(0,l.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[C]);return(0,L.jsx)(m.Z,{breadcrumbs:K,monitorType:k.a.BLOCK_RUNTIME,pipeline:C,subheader:(0,L.jsx)(p.Z,{children:(0,L.jsxs)(x.Z,{backgroundColor:Z.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(e){var t=e.target.value;"initial"!==t?(H(t),v(t)):(H(),v(null))},value:u||"initial",children:[(0,L.jsx)("option",{value:"initial",children:"All"}),M&&M.map((function(e){return(0,L.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),children:(0,L.jsx)(b.Z,{mx:2,children:z&&Object.entries(z).map((function(e,t){var r,i,c=(0,o.Z)(e,2),a=c[0],l=c[1];return(0,L.jsxs)(b.Z,{mt:2,children:[(0,L.jsxs)(p.Z,{alignItems:"center",children:[(0,L.jsx)(b.Z,{mx:1,children:(0,L.jsx)(s.Z,{color:(0,A.qn)(null===(r=N[a])||void 0===r?void 0:r.type,{blockColor:null===(i=N[a])||void 0===i?void 0:i.color,theme:n}).accent,size:E.ZG,square:!0})}),(0,L.jsx)(f.Z,{level:4,children:a})]}),(0,L.jsx)("div",{style:{backgroundColor:Z.Z.background.chartBlock,borderRadius:"".concat(T.TR,"px"),marginTop:"8px"},children:(0,L.jsx)(h.Z,{data:l,getX:function(e){return d()(e.x).valueOf()},gridProps:{stroke:"black",strokeDasharray:null,strokeOpacity:.2},height:200,hideGridX:!0,margin:{top:10,bottom:30,left:35,right:-1},noCurve:!0,renderXTooltipContent:function(e){return(0,L.jsx)(g.ZP,{center:!0,inverted:!0,small:!0,children:d()(e.x).format("MMM DD")})},renderYTooltipContent:function(e){var t,n=null===e||void 0===e||null===(t=e.y)||void 0===t?void 0:t[0];return void 0!==n&&(0,L.jsxs)(g.ZP,{center:!0,inverted:!0,small:!0,children:[n.toFixed?n.toFixed(3):n,"s"]})},thickStroke:!0,xLabelFormat:function(e){return d()(e).format("MMM DD")},xLabelRotate:!1})})]},"".concat(a,"_").concat(t))}))})})}S.getInitialProps=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.pipeline,e.abrupt("return",{pipeline:{uuid:n}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=(0,v.Z)(S)},76017:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runtime",function(){return n(68805)}])}},function(e){e.O(0,[3662,77,5823,7689,5896,2714,9832,5170,9767,4393,9898,1830,6623,9774,2888,179],(function(){return t=76017,e(e.s=t);var t}));var t=e.O();_N_E=t}]);