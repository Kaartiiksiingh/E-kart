(this.webpackJsonpredux_pro=this.webpackJsonpredux_pro||[]).push([[0],{114:function(e,c,t){},115:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),i=t(19),n=t.n(i),r=(t(85),t(59)),j=t(72),l=t(2),d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"header"})})},o=t(14),b=t(20),u=t(27),O=t(32),h=t(119),x=function(){var e=Object(o.c)((function(e){return e.cartReducer})).totalQuantities;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h.a,{fixed:"top",bg:"white",id:"nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"nav___container",children:[Object(l.jsx)("div",{className:"nav__left",children:Object(l.jsx)(u.b,{to:"/",children:Object(l.jsx)(h.a.Brand,{children:Object(l.jsx)("img",{src:"/images/newlogo.png",alt:"Logo"})})})}),Object(l.jsx)("div",{className:"nav__right",children:Object(l.jsx)(u.b,{to:"/cart",children:Object(l.jsxs)("div",{className:"basket",children:[Object(l.jsx)(O.b,{className:"cart-icon"}),Object(l.jsx)("span",{children:e})]})})})]})})})})},m=t(76),p=t.n(m),v="SET_PRODUCTS",N="SELECTED_PRODUCT",_="ADD_TO_CART",f="DETAIL_INC_DEC_ADD_TO_CART",y="INC",g="DEC",T="REMOVE_PRODUCT",I=function(){var e=Object(o.c)((function(e){return e.productsReducer})).productArray,c=Object(o.b)(),t=function(){var e=Object(j.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Err",e)}));case 2:t=e.sent,c((a=t.data,{type:v,payload:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{}),Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"container mtb-30",children:Object(l.jsx)("div",{className:"row",children:e.map((function(e){return Object(l.jsxs)("div",{className:"col_3",children:[Object(l.jsx)("div",{className:"prodcut",children:Object(l.jsxs)(u.b,{to:"/details/".concat(e.id),children:[" ",Object(l.jsx)("img",{src:e.image,alt:e.title})]})}),Object(l.jsx)("div",{className:"product_name",children:e.title}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col_6",children:Object(l.jsxs)("div",{className:"product__price",children:[Object(l.jsx)("span",{className:"product__price_text",children:"Price:"}),Object(l.jsx)(b.a,{}),Object(l.jsx)("span",{className:"actualPrice",children:Math.round(e.price)})]})})})]},e.id)}))})})]})},C=t(11),q=t(8),w=t(80),D=t(79),P=t(120),R=t(122),E=t(31),k=t(3),S=t(117),A=t(118),M=t(78),Q=(t(114),function(e){var c=Object(o.c)((function(e){return e.cartReducer})),t=c.products,a=c.totalPrice,s=c.totalQuantities;return Object(l.jsxs)(P.a,Object(k.a)(Object(k.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(l.jsx)(P.a.Header,{closeButton:!0,children:Object(l.jsxs)(P.a.Title,{children:[Object(l.jsx)("span",{className:"billHeaderText",children:"Bill Details"}),Object(l.jsx)("span",{className:"billIcon",children:Object(l.jsx)(M.a,{})})]})}),Object(l.jsxs)(P.a.Body,{className:"show-flex",style:{maxHeight:"calc(100vh - 210px)",overflowY:"auto"},children:[Object(l.jsxs)(S.a,{className:"billHeader",children:[Object(l.jsx)(A.a,{children:"Item"}),Object(l.jsx)(A.a,{id:"cart_header_space",children:"Name"}),Object(l.jsx)(A.a,{id:"cart_header_space",children:"Price"}),Object(l.jsx)(A.a,{id:"cart_header_space",children:"Quantity"}),Object(l.jsx)(A.a,{id:"cart_header_space",children:"TotalPrice"})]}),t.map((function(e){return Object(l.jsxs)(S.a,{children:[Object(l.jsx)(A.a,{children:Object(l.jsx)("span",{className:"cartSummaryTableImage",children:Object(l.jsx)("img",{src:e.image,alt:""})})}),Object(l.jsx)(A.a,{className:"max-lines mt_3",children:e.title}),Object(l.jsxs)(A.a,{className:"mt_3",children:[Object(l.jsx)(b.a,{}),Math.round(e.price)]}),Object(l.jsx)(A.a,{className:"mt_3",children:e.quantity}),Object(l.jsxs)(A.a,{className:"mt_3",children:[Object(l.jsx)(b.a,{}),Math.round(parseInt(e.price*e.quantity))]})]},e.id)})),Object(l.jsx)(P.a.Footer,{children:Object(l.jsxs)(S.a,{children:[Object(l.jsx)(A.a,{children:"TotalItems:"}),Object(l.jsx)(A.a,{children:Object(l.jsx)("strong",{children:s})}),Object(l.jsx)(A.a,{children:"TotalPrice:"}),Object(l.jsxs)(A.a,{children:["Rs.",Math.round(parseInt(a))]})]})})]}),Object(l.jsx)(P.a.Footer,{children:Object(l.jsx)(R.a,{onClick:e.onHide,children:"Close"})})]}))}),H=function(){var e=Object(o.c)((function(e){return e.cartReducer})),c=e.products,t=e.totalPrice,s=e.totalQuantities;console.log("pro",c);var i=Object(o.b)(),n=function(e){var a,n,r=c.find((function(c){return c.id===e}));a=r.id,c.map((function(e){e.id===a&&(e.quantity+=1)})),n=t+r.price,i({type:y,payload:{Incprice:n,Incquantity:s+1}})},r=function(e){var a,n,r=c.find((function(c){return c.id===e})),j=r.id;r.quantity>1?(c.map((function(e){e.id===j&&e.quantity>1?e.quantity--:e.quantity=e.quantity})),a=t-r.price,n=s-1):(a=t,n=s),i({type:g,payload:{Decprice:a,Decquantity:n}})},j=function(e){var a,n,r=c.find((function(c){return c.id===e})),j=c.filter((function(c){return c.id!==e}));a=t-r.price*r.quantity,n=s-r.quantity,i({type:T,payload:{filteredList:j,priceAfterRemoval:a,quantityAfterRemoval:n}})},d=Object(a.useState)(!1),u=Object(q.a)(d,2),h=u[0],m=u[1],p=function(){return m(!1)},v=Object(a.useState)(!1),N=Object(q.a)(v,2),_=N[0],f=N[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"cart",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"cart_header_text",children:[Object(l.jsx)("h3",{children:"Your Cart"}),Object(l.jsx)("span",{className:"cart_header_icon",children:Object(l.jsx)(D.a,{})})]}),c.length>0?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"row ",children:[Object(l.jsxs)("div",{className:"col_9",children:[Object(l.jsx)("div",{className:"cart_heading",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col_2",children:"Items "}),Object(l.jsx)("div",{className:"col_2",children:"Name"}),Object(l.jsx)("div",{className:"col_2",children:"Price"}),Object(l.jsx)("div",{className:"col_2",children:"Inc/Dec"}),Object(l.jsx)("div",{className:"col_2",children:"TotalPrice"}),Object(l.jsx)("div",{className:"col_2",children:"Remove"})]})}),c.map((function(e){return Object(l.jsxs)("div",{className:"row verticalAlign",children:[Object(l.jsx)("div",{className:"col_2",children:Object(l.jsx)("div",{className:"cart__image",children:Object(l.jsx)("img",{src:e.image,alt:""})})}),Object(l.jsx)("div",{className:"col_2",children:Object(l.jsx)("div",{className:"cart__name",children:e.title})}),Object(l.jsxs)("div",{className:"col_2 cart_price",children:[Object(l.jsx)(b.a,{}),Math.round(e.price)]}),Object(l.jsx)("div",{className:"col_2",id:"IncDecblock",children:Object(l.jsxs)("div",{className:"decInc",children:[Object(l.jsx)("span",{className:"dec",onClick:function(){return r(e.id)},children:Object(l.jsx)(O.a,{})}),Object(l.jsx)("span",{className:"quantity",children:e.quantity}),Object(l.jsx)("span",{className:"inc",onClick:function(){return n(e.id)},children:Object(l.jsx)(b.b,{})})]})}),Object(l.jsx)("div",{className:"col_2",children:Object(l.jsxs)("div",{className:"cart__total text-center",children:[Object(l.jsx)(b.a,{}),Math.round(parseInt(e.price*e.quantity))]})}),Object(l.jsx)("div",{className:"col_2",id:"cartRmvBtn",children:Object(l.jsx)("div",{className:"cart__remove",onClick:function(){return j(e.id)},children:Object(l.jsx)(w.a,{})})})]},e.id)}))]}),Object(l.jsx)("div",{className:"cart_col-3",children:Object(l.jsxs)("div",{className:"summary",children:[Object(l.jsx)("div",{className:"summary__heading",children:"summary"}),Object(l.jsxs)("div",{className:"summary__details",children:[Object(l.jsxs)("div",{className:"row mb-10",children:[Object(l.jsx)("div",{className:"col-6",children:"Total Items:"}),Object(l.jsx)("div",{className:"col-6",children:s})]}),Object(l.jsxs)("div",{className:"row mb-10",children:[Object(l.jsx)("div",{className:"col-6",children:"Total Price:"}),Object(l.jsxs)("div",{className:"col-6",children:[Object(l.jsx)(b.a,{}),Math.round(parseInt(t))]})]}),Object(l.jsx)("button",{type:"button",className:"checkout",onClick:function(){m(!0)},children:"Checkout"}),Object(l.jsx)("div",{children:Object(l.jsxs)(P.a,{show:h,onHide:p,children:[Object(l.jsxs)(P.a.Header,{children:[Object(l.jsx)(P.a.Title,{children:Object(l.jsx)("strong",{children:"Congratulations"})}),Object(l.jsx)(E.a,{})]}),Object(l.jsx)(P.a.Body,{children:Object(l.jsx)("p",{children:"Thank you purchasing. Payment Done"})}),Object(l.jsxs)(P.a.Footer,{children:[Object(l.jsx)(R.a,{variant:"primary",onClick:function(){return f(!0)},children:"View Summary"}),Object(l.jsx)(Q,{show:_,onHide:function(){return f(!1)}}),Object(l.jsx)(R.a,{variant:"primary",onClick:p,children:"Close"})]})]})})]})]})})]})}):"Cart is Empty"]})})]})},F=t(61),B=v,L=N,U={productArray:[],productSelected:{}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,c=arguments.length>1?arguments[1]:void 0,t=c.type,a=c.payload;switch(t){case B:return Object(k.a)(Object(k.a)({},e),{},{productArray:a});case L:return Object(k.a)(Object(k.a)({},e),{},{productSelected:a});default:return e}},X=t(53),J=_,Y=y,z=g,G=T,K=f,W={products:[],totalPrice:0,totalQuantities:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,c=arguments.length>1?arguments[1]:void 0,t=c.type,a=c.payload;switch(t){case J:var s=a.productSelected,i=a.Tprice,n=a.Tquantity;return Object(k.a)(Object(k.a)({},e),{},{products:[].concat(Object(X.a)(e.products),[s]),totalPrice:Math.round(i),totalQuantities:n});case K:var r=a.TIncprice,j=a.TIncquantity;return Object(k.a)(Object(k.a)({},e),{},{totalPrice:Math.round(r),totalQuantities:j});case Y:var l=a.Incprice,d=a.Incquantity;return Object(k.a)(Object(k.a)({},e),{},{totalPrice:Math.round(l),totalQuantities:d});case z:var o=a.Decprice,b=a.Decquantity;return Object(k.a)(Object(k.a)({},e),{},{totalPrice:Math.round(o),totalQuantities:b});case G:var u=a.filteredList,O=a.priceAfterRemoval,h=a.quantityAfterRemoval;return Object(k.a)(Object(k.a)({},e),{},{products:u,totalPrice:Math.round(O),totalQuantities:h});default:return e}},$=Object(F.a)({productsReducer:V,cartReducer:Z}),ee=Object(F.b)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ce=t(121),te=function(){var e=Object(C.e)(),c=Object(a.useState)(1),t=Object(q.a)(c,2),s=t[0],i=t[1],n=Object(o.b)(),r=Object(o.c)((function(e){return e.productsReducer})),j=r.productArray,d=r.productSelected,u=Object(o.c)((function(e){return e.cartReducer})),h=u.products,m=u.totalPrice,p=u.totalQuantities,v=function(e){var c=j.find((function(c){return c.id===parseInt(e)}));n({type:N,payload:c})};Object(a.useEffect)((function(){v(e.id)}),[e.id]);var y=function(e,c){var t,a;D();var s=h.find((function(c){return c.id===e.id}));if(s){h.map((function(e){e.id===s.id&&e.quantity++}));var i=m+s.price;n({type:f,payload:{TIncprice:i,TIncquantity:p+c}})}else a=m+e.price*c,t=p+c,e.quantity=c,n({type:_,payload:{productSelected:e,Tprice:a,Tquantity:t}})},g=Object(a.useState)(!1),T=Object(q.a)(g,2),I=T[0],w=T[1],D=function(){return w(!I)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"container mt-100",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col_6",children:Object(l.jsx)("div",{className:"detail_image",children:Object(l.jsx)("img",{src:d.image,alt:d.title})})}),Object(l.jsxs)("div",{className:"col_6",children:[Object(l.jsx)("div",{className:"detail_name",children:d.title}),Object(l.jsx)("div",{className:"detail_price",children:Object(l.jsxs)("span",{className:"detail_actualPrice",children:[Object(l.jsx)(b.a,{}),Math.round(d.price)]})}),Object(l.jsx)("div",{className:"detail_info",children:Object(l.jsxs)("div",{className:"decInc",children:[Object(l.jsx)("span",{className:"dec",onClick:function(){s>1&&i(s-1)},children:Object(l.jsx)(O.a,{})}),Object(l.jsx)("span",{className:"quantity",children:s}),Object(l.jsx)("span",{className:"inc",onClick:function(){return function(e){e(s+1)}(i)},children:Object(l.jsx)(b.b,{})}),Object(l.jsx)("button",{className:"btn-default",onClick:function(){y(d,s)},children:"Add To Cart"})]})}),Object(l.jsx)(S.a,{children:Object(l.jsx)(A.a,{xs:6,children:Object(l.jsx)(ce.a,{show:I,onClose:D,delay:950,animation:!0,autohide:!0,children:Object(l.jsx)("div",{className:"ToastMessageDisplay",children:Object(l.jsx)(ce.a.Header,{children:Object(l.jsx)("span",{className:"msg",children:"Product Added"})})})})})}),Object(l.jsxs)("div",{className:"detail_productDescription",children:[Object(l.jsx)("h3",{children:"Details"}),d.description]})]})]})},d.id)]})};var ae=function(){return Object(l.jsx)(u.a,{children:Object(l.jsxs)(o.a,{store:ee,children:[Object(l.jsx)(C.a,{path:"/",exact:!0,component:I}),Object(l.jsx)(C.a,{path:"/cart",exact:!0,component:H}),Object(l.jsx)(C.a,{path:"/details/:id",exact:!0,component:te})]})})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(ae,{})}),document.getElementById("root"))},85:function(e,c,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.22abf0bf.chunk.js.map