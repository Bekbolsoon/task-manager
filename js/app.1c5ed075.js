(function(){"use strict";var t={679:function(t,e,s){var n=s(471),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TaskBoard")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-board"},[t._l(t.sections,(function(s){return e("div",{key:s.id,staticClass:"task-column"},[e("h2",{staticClass:"task-column-title",class:{blue:"Новые"===s.title,yellow:"В процессе"===s.title,green:"Готово"===s.title,red:"Доработать"===s.title}},[t._v(" "+t._s(s.title)+" ")]),e("div",{staticClass:"task-column__inner"},[e("draggable",{staticClass:"task-list",attrs:{group:"tasks"},on:{start:t.dragStart,end:t.dragEnd},model:{value:s.tasks,callback:function(e){t.$set(s,"tasks",e)},expression:"section.tasks"}},t._l(s.tasks,(function(n){return e("div",{key:n.id,staticClass:"task-item"},[e("p",{staticClass:"task-item-text"},[t._v(t._s(n.text))]),e("button",{ref:`menuButton-${n.id}`,refInFor:!0,staticClass:"task-item__menu-btn",on:{click:function(e){return t.showContextMenu(n.id,s.id,e)}}},[e("svg",{attrs:{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.2 10.8333C10.6603 10.8333 11.0334 10.4602 11.0334 10C11.0334 9.53977 10.6603 9.16667 10.2 9.16667C9.73978 9.16667 9.36669 9.53977 9.36669 10C9.36669 10.4602 9.73978 10.8333 10.2 10.8333Z",stroke:"#86949E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16.0334 10.8333C16.4936 10.8333 16.8667 10.4602 16.8667 10C16.8667 9.53977 16.4936 9.16667 16.0334 9.16667C15.5731 9.16667 15.2 9.53977 15.2 10C15.2 10.4602 15.5731 10.8333 16.0334 10.8333Z",stroke:"#86949E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M4.36669 10.8333C4.82693 10.8333 5.20002 10.4602 5.20002 10C5.20002 9.53977 4.82693 9.16667 4.36669 9.16667C3.90645 9.16667 3.53336 9.53977 3.53336 10C3.53336 10.4602 3.90645 10.8333 4.36669 10.8333Z",stroke:"#86949E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t.activeContextMenu&&t.activeContextMenu.taskId===n.id&&t.activeContextMenu.sectionId===s.id?e("div",{ref:`contextMenu-${n.id}`,refInFor:!0,staticClass:"context-menu"},[e("button",{staticClass:"context-menu__item",on:{click:function(e){return t.deleteTask(n.id,s.id)}}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.5 4.99999H17.5M6.66667 4.99999V3.33332C6.66667 2.8913 6.84226 2.46737 7.15482 2.15481C7.46738 1.84225 7.89131 1.66666 8.33333 1.66666H11.6667C12.1087 1.66666 12.5326 1.84225 12.8452 2.15481C13.1577 2.46737 13.3333 2.8913 13.3333 3.33332V4.99999M15.8333 4.99999V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V4.99999H15.8333Z",stroke:"#86949E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Удалить ")])]):t._e()])})),0),s.showForm?e("TaskForm",{on:{"add-task":function(e){return t.addTask(s.id,e)},close:function(e){return t.cancelAddingTask(s.id)}}}):e("button",{staticClass:"add-button",on:{click:function(e){return t.showTaskForm(s.id)}}},[e("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7.20002 1.16667V12.8333M1.36668 7H13.0334",stroke:"#3D86F4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Добавить ")])],1)])})),t.isModalVisible?e("div",{staticClass:"modal"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-content__btn-close",on:{click:t.closeModal}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18 6L6 18M6 6L18 18",stroke:"#86949E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("h2",{staticClass:"modal-content__title"},[t._v("Удалить задачу?")]),e("p",{staticClass:"modal-content__text"},[t._v(t._s(t.taskTextToDelete))]),e("div",{staticClass:"modal-content__btns"},[e("button",{on:{click:t.confirmDeleteTask}},[t._v("Удалить")]),e("button",{on:{click:t.closeModal}},[t._v("Отмена")])])])]):t._e()],2)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],ref:"textarea",staticClass:"task-form__input",attrs:{placeholder:"Введите текст..."},domProps:{value:t.taskText},on:{input:[function(e){e.target.composing||(t.taskText=e.target.value)},t.autoResize]}}),e("div",{staticClass:"task-form__btns"},[e("button",{on:{click:t.cancelAddingTask}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15 5L5 15M5 5L15 15",stroke:"#F53D5C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("button",{on:{click:t.submitTask}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16.6666 5L7.49998 14.1667L3.33331 10",stroke:"#22C33D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])},c=[],d={data(){return{taskText:""}},methods:{submitTask(){this.taskText.trim()&&(this.$emit("add-task",this.taskText.trim()),this.taskText="")},cancelAddingTask(){this.$emit("close")},autoResize(t){const e=t.target;e.style.height="auto",e.style.height=e.scrollHeight-16+"px"},focusTextarea(){this.$refs.textarea.focus()}},mounted(){this.focusTextarea()}},u=d,k=s(656),h=(0,k.A)(u,l,c,!1,null,"a9b5baf2",null),f=h.exports,v=s(432),m=s.n(v),p={components:{TaskForm:f,draggable:m()},data(){return{sections:[{id:1,title:"На согласовании",tasks:[],showForm:!1},{id:2,title:"Новые",tasks:[],showForm:!1},{id:3,title:"В процессе",tasks:[],showForm:!1},{id:4,title:"Готово",tasks:[],showForm:!1},{id:5,title:"Доработать",tasks:[],showForm:!1}],taskToDelete:null,taskTextToDelete:"",isModalVisible:!1,taskSectionId:null,activeContextMenu:null}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeUnmount(){document.removeEventListener("click",this.handleClickOutside)},methods:{handleClickOutside(t){if(!this.activeContextMenu)return;const{taskId:e}=this.activeContextMenu,s=this.$refs[`contextMenu-${e}`],n=this.$refs[`menuButton-${e}`],o=Array.isArray(s)?s[0]:s,i=Array.isArray(n)?n[0]:n;o&&i&&(o.contains(t.target)||i.contains(t.target)||(this.activeContextMenu=null))},showContextMenu(t,e,s){this.activeContextMenu={taskId:t,sectionId:e},this.$nextTick((()=>{const e=s.target,n=this.$refs[`contextMenu-${t}`];if(!n||!n[0])return void console.error("Контекстное меню не найдено");const o=n[0],i=e.getBoundingClientRect();console.log(i),o.style.top=`${i.bottom}px`,o.style.left=`${i.left}px`}))},deleteTask(t,e){const s=this.sections.find((t=>t.id===e)),n=s.tasks.find((e=>e.id===t));this.taskToDelete=t,this.taskTextToDelete=n.text,this.taskSectionId=e,this.isModalVisible=!0,this.activeContextMenu=null},closeModal(){this.isModalVisible=!1,this.taskToDelete=null,this.taskSectionId=null,this.taskTextToDelete=""},confirmDeleteTask(){const t=this.sections.find((t=>t.id===this.taskSectionId)),e=Number(this.taskToDelete),s=t.tasks.findIndex((t=>t.id===e));s>-1&&(t.tasks.splice(s,1),alert("Задача удалена")),this.closeModal()},showTaskForm(t){this.sections.forEach((e=>e.showForm=e.id===t))},cancelAddingTask(t){const e=this.sections.find((e=>e.id===t));e.showForm=!1},addTask(t,e){const s=this.sections.find((e=>e.id===t));s.tasks.push({id:Date.now(),text:e}),s.showForm=!1,alert(`Задача создана в "${s.title}"`)},dragStart(){console.log("Перетаскивание началось")},dragEnd(){console.log("Перетаскивание завершено")}}},w=p,g=(0,k.A)(w,a,r,!1,null,"4aa2f8b1",null),x=g.exports,C={components:{TaskBoard:x}},b=C,T=(0,k.A)(b,o,i,!1,null,null,null),_=T.exports;n.Ay.config.productionTip=!1,new n.Ay({render:function(t){return t(_)}}).$mount("#app")}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,i){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],i=t[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(r=!1,i<a&&(a=i));if(r){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],r=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var d=l(s)}for(e&&e(n);c<a.length;c++)i=a[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},n=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(679)}));n=s.O(n)})();
//# sourceMappingURL=app.1c5ed075.js.map