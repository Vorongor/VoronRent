"use strict";(self.webpackChunkvoronrent=self.webpackChunkvoronrent||[]).push([[997],{4997:function(e,s,i){i.r(s);var a=i(9439),n=i(2791),l=i(9434),c=i(647),t=i(5676),r=i(1289),o=i(619),p=i(184);s.default=function(){var e=(0,l.I0)(),s=(0,n.useState)(""),i=(0,a.Z)(s,2),d=i[0],m=i[1],u=(0,n.useState)(null),_=(0,a.Z)(u,2),h=_[0],x=_[1];(0,n.useEffect)((function(){e((0,t.r)())}),[e]);var j=function(e){m(e.target.value)},b=(0,l.v9)((function(e){return e.car.carData}));console.log("\ud83d\ude80 ~ file: Catalog.jsx:46 ~ Ctalog ~ carData:",b);var f,Z=b.map((function(e){return e.rentalPrice}));function N(e){x(e)}return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{className:r.Z.form,action:"submit",children:[(0,p.jsxs)("label",{className:r.Z.labelMark,htmlFor:"dropdown",children:["Car brand",(0,p.jsxs)("select",{className:r.Z.markSelect,id:"dropdown",value:d,onChange:j,children:[(0,p.jsx)("option",{value:"",disabled:!0,children:"Enter the text"}),["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"].map((function(e,s){return(0,p.jsx)("option",{value:e,children:e},s)}))]})]}),(0,p.jsxs)("label",{className:r.Z.labelPrise,htmlFor:"prise",children:["Price/ 1 hour",(0,p.jsxs)("select",{className:r.Z.priseSelect,id:"prise",value:d,onChange:j,children:[(0,p.jsx)("option",{value:"",disabled:!0,children:"To $"}),(f=Z,Array.from(new Set(f)).sort((function(e,s){return Number(e.slice(1))-Number(s.slice(1))}))).map((function(e,s){return(0,p.jsx)("option",{value:e,children:e},s)}))]})]}),(0,p.jsxs)("label",{className:r.Z.labelKm,children:["Car mileage / km",(0,p.jsxs)("div",{style:{display:"flex"},children:[(0,p.jsx)("input",{className:r.Z.kmSelect,type:"text",placeholder:"From "}),(0,p.jsx)("input",{className:r.Z.kmSelect,type:"text",placeholder:"To"})]})]}),(0,p.jsx)("button",{className:r.Z.search,type:"submit",children:"Search"})]}),b.length>0&&(0,p.jsx)("ul",{className:r.Z.catalogList,children:b.map((function(e,s){return(0,p.jsx)(c.Z,{car:e,chooseCar:N},s)}))}),h&&(0,p.jsx)(o.Z,{car:h,closeFunc:function(){x(null)}})]})}},647:function(e,s,i){i.d(s,{Z:function(){return p}});i(2791);var a=i(1289),n=i(9434),l=i(5440),c=i(1413),t=i(184);var r=function(e){return(0,t.jsx)("svg",(0,c.Z)((0,c.Z)({viewBox:"0 0 1024 1024",fill:"#3470ff",height:"2.5em",width:"2.5em"},e),{},{children:(0,t.jsx)("path",{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"})}))};var o=function(e){return(0,t.jsx)("svg",(0,c.Z)((0,c.Z)({viewBox:"0 0 1024 1024",fill:"#3470ff",height:"2.5em",width:"2.5em"},e),{},{children:(0,t.jsx)("path",{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"})}))};var p=function(e){var s=e.car,i=e.chooseCar,c=(0,n.I0)(),p=function(e){return e.split(",").slice(1)},d=(0,n.v9)((function(e){return e.car.favoriteCars}));return(0,t.jsxs)("div",{className:a.Z.carCard,children:[d.includes(s.id)?(0,t.jsx)("button",{className:a.Z.heart,type:"button",onClick:function(){return e=s.id,void c((0,l.Ni)(e));var e},children:(0,t.jsx)(o,{})}):(0,t.jsx)("button",{className:a.Z.heart,type:"button",onClick:function(){return e=s.id,void c((0,l.oW)(e));var e},children:(0,t.jsx)(r,{})}),(0,t.jsx)("img",{className:a.Z.itemImg,src:s.img,alt:s.description}),(0,t.jsxs)("div",{className:a.Z.topBox,children:[(0,t.jsxs)("p",{className:a.Z.topText,children:[s.make,", ",(0,t.jsx)("span",{className:a.Z.blue,children:s.model}),",",s.year]}),(0,t.jsx)("p",{children:s.rentalPrice})]}),(0,t.jsxs)("div",{className:a.Z.botBox,children:[(0,t.jsx)("p",{className:a.Z.botTip,children:p(s.address)[0]}),(0,t.jsx)("p",{className:a.Z.botTip,children:p(s.address)[1]}),(0,t.jsx)("p",{className:a.Z.botTip,children:s.rentalCompany}),(0,t.jsx)("p",{className:a.Z.botTip,children:s.accessories[0]}),(0,t.jsx)("p",{className:a.Z.botTip,children:s.model}),(0,t.jsx)("p",{className:a.Z.botTip,children:s.id}),(0,t.jsx)("p",{className:a.Z.botTip,children:s.functionalities[0]})]}),(0,t.jsx)("button",{className:a.Z.rentBtn,type:"button",onClick:function(){return i(s)},children:"Learn more"})]})}},619:function(e,s,i){i.d(s,{Z:function(){return t}});i(2791);var a=i(1289),n=i(1413),l=i(184);var c=function(e){return(0,l.jsxs)("svg",(0,n.Z)((0,n.Z)({viewBox:"0 0 1024 1024",fill:"currentColor",height:"2em",width:"2em"},e),{},{children:[(0,l.jsx)("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}),(0,l.jsx)("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"})]}))};var t=function(e){var s=e.car,i=e.closeFunc,n=function(e){return e.split(",").slice(1)},t=function(e){var s=e.match(/Minimum age: (\d+)\s+Valid driver's license\s+(.*)/);return s?{minimumAge:parseInt(s[1],10),additionalConditions:s[2].trim()}:null}(s.rentalConditions),r=t.minimumAge,o=t.additionalConditions;return(0,l.jsx)("div",{className:a.Z.backDrop,children:(0,l.jsxs)("div",{className:a.Z.modalWindow,children:[(0,l.jsx)("button",{onClick:i,type:"button",className:a.Z.close,children:(0,l.jsx)(c,{})}),(0,l.jsx)("img",{className:a.Z.popImg,src:s.img,alt:s.description}),(0,l.jsx)("div",{className:a.Z.topBox,children:(0,l.jsxs)("p",{className:a.Z.topText,children:[s.make,", ",(0,l.jsx)("span",{className:a.Z.blue,children:s.model}),",",s.year]})}),(0,l.jsxs)("div",{className:a.Z.botBox,children:[(0,l.jsx)("p",{className:a.Z.botTip,children:n(s.address)[0]}),(0,l.jsx)("p",{className:a.Z.botTip,children:n(s.address)[1]}),(0,l.jsx)("p",{className:a.Z.botTip,children:s.rentalCompany}),(0,l.jsx)("p",{className:a.Z.botTip,children:s.accessories[0]}),(0,l.jsx)("p",{className:a.Z.botTip,children:s.model}),(0,l.jsx)("p",{className:a.Z.botTip,children:s.id}),(0,l.jsx)("p",{className:a.Z.botTip,children:s.functionalities[0]})]}),(0,l.jsx)("p",{className:a.Z.popList,children:s.description}),(0,l.jsxs)("ul",{className:a.Z.popList,children:[(0,l.jsx)("span",{style:{width:"100%"},children:"Accessories and functionalities:"}),s.accessories.map((function(e,s){return(0,l.jsx)("li",{className:a.Z.accesFuncLi,children:e},s)})),s.functionalities.map((function(e,s){return(0,l.jsx)("li",{className:a.Z.accesFuncLi,children:e},s)}))]}),(0,l.jsxs)("ul",{className:a.Z.popList,children:[(0,l.jsx)("span",{style:{width:"100%"},children:"Rental Conditions:"}),(0,l.jsxs)("li",{className:a.Z.popLi,children:["Minimum age :"," ",(0,l.jsx)("span",{style:{color:"#3470ff",fontWeight:"bold"},children:r})]}),(0,l.jsx)("li",{className:a.Z.popLi,children:"Valid driver\u2019s license"}),(0,l.jsx)("li",{className:a.Z.popLi,children:o}),(0,l.jsxs)("li",{className:a.Z.popLi,children:["Mileage:",(0,l.jsx)("span",{style:{color:"#3470ff",fontWeight:"bold"},children:s.mileage})]}),(0,l.jsxs)("li",{className:a.Z.popLi,children:["Prise:",(0,l.jsx)("span",{style:{color:"#3470ff",fontWeight:"bold"},children:s.rentalPrice})]})]}),(0,l.jsx)("button",{className:a.Z.rentBtn,type:"button",onClick:function(){return function(e){console.log(e.id)}(s)},children:"Rental car"})]})})}},1289:function(e,s){s.Z={backGround:"App_backGround__O2CQa",header:"App_header__UL4PY",logo:"App_logo__j1ldA",carIcon:"App_carIcon__ZDeRS",homeIcon:"App_homeIcon__BHd8X",menu:"App_menu__bkTU7",link:"App_link__91nmW",activeLink:"App_activeLink__Pj8iz",title:"App_title__Xrt9W",form:"App_form__CfQex",labelKm:"App_labelKm__+F3sG",labelMark:"App_labelMark__9dI5O",labelPrise:"App_labelPrise__oJMzk",markSelect:"App_markSelect__irjao",priseSelect:"App_priseSelect__BMKen",kmSelect:"App_kmSelect__qIvax",search:"App_search__87ewE",catalogList:"App_catalogList__4jUkg",carCard:"App_carCard__U9KHI",heart:"App_heart__ni0rx",itemImg:"App_itemImg__-Wo1p",topBox:"App_topBox__rjyou",topText:"App_topText__+2SqK",blue:"App_blue__xrLSR",botBox:"App_botBox__exPCR",botTip:"App_botTip__xOuwE",rentBtn:"App_rentBtn__vAzXK",backDrop:"App_backDrop__ac-cX",modalWindow:"App_modalWindow__bkoBB",close:"App_close__15lSc",popImg:"App_popImg__lZsOc",popList:"App_popList__ijFe-",accesFuncLi:"App_accesFuncLi__fT6JS",popLi:"App_popLi__LgiuJ",topCard:"App_topCard__99L4H",imgTopBox:"App_imgTopBox__ebh0f",topImg:"App_topImg__RykKG",topPrice:"App_topPrice__vKg4O"}}}]);
//# sourceMappingURL=997.2492ca98.chunk.js.map