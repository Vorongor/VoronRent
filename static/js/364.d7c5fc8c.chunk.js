"use strict";(self.webpackChunkvoronrent=self.webpackChunkvoronrent||[]).push([[364],{6261:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var n=t(9439),r=t(2791),s=t(9434),c=t(647),l=t(5676),o="Catalog_form__dSrIh",i="Catalog_imputBox__cPLwI",u="Catalog_labelKm__pgdj1",d="Catalog_labelMark__Yz5XQ",m="Catalog_labelPrise__2nHhl",h="Catalog_markSelect__9+0Mo",p="Catalog_priseSelect__3lGE8",f="Catalog_kmSelect__OsTcU",x="Catalog_search__6+1H9",v="Catalog_catalogList__+VW11",j="Catalog_loadMore__2RkzA",g="Catalog_loadMoreDisable__3ndIC",_=t(2297),b=t(184);var C=function(){var e=(0,s.I0)(),a=(0,s.v9)((function(e){return e.car.carData})),t=(0,s.v9)((function(e){return e.car.searchData})),C=(0,s.v9)((function(e){return e.car.maxSize})),N=(0,r.useState)(""),Z=(0,n.Z)(N,2),k=Z[0],S=Z[1],w=(0,r.useState)(""),y=(0,n.Z)(w,2),T=y[0],M=y[1],z=(0,r.useState)(""),B=(0,n.Z)(z,2),I=B[0],F=B[1],P=(0,r.useState)(""),A=(0,n.Z)(P,2),D=A[0],E=A[1],L=(0,r.useState)(null),$=(0,n.Z)(L,2),H=$[0],W=$[1],G=(0,r.useState)(1),K=(0,n.Z)(G,2),O=K[0],Q=K[1],R=(0,r.useState)(!1),U=(0,n.Z)(R,2),V=U[0],X=U[1];(0,r.useEffect)((function(){e((0,l.rw)(O))}),[e,O]);var Y,q=(0,s.v9)((function(e){return e.car.prices})),J=(0,s.v9)((function(e){return e.car.makes}));function ee(e){W(e)}return(0,b.jsxs)("div",{children:[(0,b.jsxs)("form",{className:o,action:"submit",onSubmit:function(a){a.preventDefault();var t={};k&&(t.make=k),T&&(t.rentalPrice=T),I&&(t.milageFrom=I),D&&(t.milageTo=D),e((0,l.y_)(t)),V?(X(!1),S(""),M(""),F(""),E("")):X(!0)},children:[(0,b.jsxs)("label",{className:d,htmlFor:"dropdown",children:["Car brand",(0,b.jsxs)("select",{className:h,id:"dropdown",value:k,onChange:function(e){S(e.target.value)},children:[(0,b.jsx)("option",{value:"",disabled:!0,children:"Enter the text"}),J.map((function(e,a){return(0,b.jsx)("option",{value:e,children:e},a)}))]})]}),(0,b.jsxs)("label",{className:m,htmlFor:"prise",children:["Price/ 1 hour",(0,b.jsxs)("select",{className:p,id:"prise",value:T,onChange:function(e){return M(e.target.value)},children:[(0,b.jsx)("option",{value:"",disabled:!0,children:"To $"}),(Y=q,Array.from(new Set(Y)).sort((function(e,a){return Number(e)-Number(a)}))).map((function(e,a){return(0,b.jsxs)("option",{value:e,children:["$",e]},a)}))]})]}),(0,b.jsxs)("label",{className:u,children:["Car mileage / km",(0,b.jsxs)("div",{className:i,children:[(0,b.jsx)("input",{className:f,type:"text",placeholder:"From ",value:I,onChange:function(e){return F(e.target.value)}}),(0,b.jsx)("input",{className:f,type:"text",placeholder:"To",value:D,onChange:function(e){return E(e.target.value)}})]})]}),(0,b.jsx)("button",{className:x,type:"submit",children:V?"Cancel":"Search"})]}),a.length>0&&(0,b.jsx)("ul",{className:v,children:V?t.map((function(e,a){return(0,b.jsx)(c.Z,{car:e,chooseCar:ee},a)})):a.map((function(e,a){return(0,b.jsx)(c.Z,{car:e,chooseCar:ee},a)}))}),(0,b.jsx)("button",{className:a.length===C?g:j,type:"button",onClick:function(){var a=O+1;e((0,l.rw)(a)).then((function(e){Q(a)})).catch((function(e){console.error("Error loading more data:",e)}))},disabled:a.length===C,children:"Load More"}),H&&(0,b.jsx)(_.Z,{car:H,closeFunc:function(){W(null)}})]})}},647:function(e,a,t){t.d(a,{Z:function(){return d}});t(2791);var n=t(1289),r=t(9434),s=t(5440),c=t(5264),l=t(1413),o=t(184);var i=function(e){return(0,o.jsx)("svg",(0,l.Z)((0,l.Z)({viewBox:"0 0 1024 1024",fill:"#8a8a89",height:"2.5em",width:"2.5em"},e),{},{children:(0,o.jsx)("path",{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"})}))};var u=function(e){return(0,o.jsx)("svg",(0,l.Z)((0,l.Z)({viewBox:"0 0 1024 1024",fill:"#3470ff",height:"2.5em",width:"2.5em"},e),{},{children:(0,o.jsx)("path",{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"})}))};var d=function(e){var a=e.car,t=e.chooseCar,l=(0,r.I0)(),d=function(e){return e.split(",").slice(1)},m=(0,r.v9)((function(e){return e.car.favoriteCars}));return(0,o.jsxs)("div",{className:n.Z.carCard,children:[m.includes(a.id)?(0,o.jsx)("button",{className:n.Z.heart,type:"button",onClick:function(){var e;e=a.id,l((0,s.Ni)(e)),c.Notify.warning("".concat(a.make,", ").concat(a.model," remove from favorite"))},children:(0,o.jsx)(u,{})}):(0,o.jsx)("button",{className:n.Z.heart,type:"button",onClick:function(){var e;e=a.id,l((0,s.oW)(e)),c.Notify.success("".concat(a.make,", ").concat(a.model," added to favorite"))},children:(0,o.jsx)(i,{})}),(0,o.jsx)("img",{className:n.Z.itemImg,src:a.img,alt:a.description}),(0,o.jsxs)("div",{className:n.Z.topBox,children:[(0,o.jsxs)("p",{className:n.Z.topText,children:[a.make,", ",(0,o.jsx)("span",{className:n.Z.blue,children:a.model}),",",a.year]}),(0,o.jsxs)("p",{children:["$",a.rentalPrice]})]}),(0,o.jsxs)("div",{className:n.Z.botBox,children:[(0,o.jsx)("p",{className:n.Z.botTip,children:d(a.address)[0]}),(0,o.jsx)("p",{className:n.Z.botTip,children:d(a.address)[1]}),(0,o.jsx)("p",{className:n.Z.botTip,children:a.rentalCompany}),(0,o.jsx)("p",{className:n.Z.botTip,children:a.accessories[0]}),(0,o.jsx)("p",{className:n.Z.botTip,children:a.model}),(0,o.jsx)("p",{className:n.Z.botTip,children:a.id}),(0,o.jsx)("p",{className:n.Z.botTip,children:a.functionalities[0]})]}),(0,o.jsx)("button",{className:n.Z.rentBtn,type:"button",onClick:function(){return t(a)},children:"Learn more"})]})}}}]);
//# sourceMappingURL=364.d7c5fc8c.chunk.js.map