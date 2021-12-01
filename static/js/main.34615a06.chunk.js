(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={filter__input:"Filter_filter__input__1QrFC"}},20:function(t,e,n){},21:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(11),o=n.n(c),r=(n(20),n(14)),s=n(2),m=(n(21),n(5)),l=n.n(m),u=n(0);function d(t){return Object(u.jsxs)("div",{className:l.a.container,children:[" ",t.children]})}var _=n(44),b=(n(23),n(7)),j=n.n(b),h=function(t){var e=t.onSubmit,n=Object(a.useState)(""),i=Object(s.a)(n,2),c=i[0],o=i[1],r=Object(a.useState)(""),m=Object(s.a)(r,2),l=m[0],d=m[1],b=function(t){var e=t.target;"name"===e.name&&o(e.value),"number"===e.name&&d(e.value)};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault(),e({name:c,number:l}),o(""),d("")},className:j.a.contactForm,children:[Object(u.jsxs)("label",{className:j.a.contactForm__label,htmlFor:"",children:["Name",Object(u.jsx)("input",{type:"text",name:"name",placeholder:"John Snow",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:b})]}),Object(u.jsxs)("label",{className:j.a.contactForm__label,htmlFor:"",children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",placeholder:"+38(093)9995040",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:b})]}),Object(u.jsx)(_.a,{type:"submit",children:"Add contact"})]})})},f=n(13),O=n.n(f);function p(t){var e=t.name,n=t.onChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("label",{htmlFor:"",children:["Find contacts by name",Object(u.jsx)("input",{className:O.a.filter__input,type:"text",name:e,placeholder:"find by name..",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n})]})})}var g=n(8),x=n.n(g);function C(t){var e=t.contacts,n=t.deleteContact;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsxs)("li",{className:x.a.contactList__item,children:[Object(u.jsx)("span",{className:x.a.contactList__name,children:t.name}),Object(u.jsx)("span",{className:x.a.contactList__number,children:t.number}),Object(u.jsx)(_.a,{variant:"danger",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})}var v=n(45),F=n(3),S=n.n(F),N=(n(40),n(41),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),y=function(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),i=Object(s.a)(n,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,o]}("contacts",N),e=Object(s.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),m=o[0],_=o[1];console.log(m);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(S.a,{}),Object(u.jsxs)(d,{children:[Object(u.jsx)("h1",{className:l.a.container__label,children:"Phonebook"}),Object(u.jsx)(h,{onSubmit:function(t){return console.log(t),e=t.name,n.find((function(t){return t.name===e}))?(F.store.addNotification({title:"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430...!",message:"\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c",type:"danger",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2e3,onScreen:!0},touchSlidingExit:{swipe:{duration:400,timingFunction:"ease-out",delay:0},fade:{duration:400,timingFunction:"ease-out",delay:0}}}),void console.log(n)):(i([{id:Object(v.a)(),name:t.name,number:t.number}].concat(Object(r.a)(n))),void F.store.addNotification({title:"Congratulations!",message:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}}));var e}}),Object(u.jsx)("h2",{className:l.a.container__contacts,children:"Contacts"}),Object(u.jsx)(p,{name:m,onChange:function(t){_(t.currentTarget.value.trim())}}),Object(u.jsx)(C,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(m.toLowerCase())})),deleteContact:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))})),F.store.addNotification({title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f!",message:"\u041a\u043e\u043d\u0441\u0442\u0430\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",type:"warning",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2e3,onScreen:!0},touchSlidingExit:{swipe:{duration:400,timingFunction:"ease-out",delay:0},fade:{duration:400,timingFunction:"ease-out",delay:0}}})}})]})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),L()},5:function(t,e,n){t.exports={container:"Container_container__3e1Mh",container__label:"Container_container__label__1-Z_y",container__contacts:"Container_container__contacts__BVr4P"}},7:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1I-Eb",contactForm__label:"ContactForm_contactForm__label__3Emvt"}},8:function(t,e,n){t.exports={contactList__item:"ContactList_contactList__item__1__8m",contactList__name:"ContactList_contactList__name__3Wc9W",contactList__number:"ContactList_contactList__number__1ukRz"}}},[[42,1,2]]]);
//# sourceMappingURL=main.34615a06.chunk.js.map