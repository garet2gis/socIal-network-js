(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(37),c=n(3),i="ADD-MESSAGE",o={dialogs:[{id:1,name:"Dima"},{id:2,name:"Lolez"},{id:3,name:"Victor"},{id:4,name:"Precol"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Who are you?"},{id:3,message:"You wanna go somewhere?"}]},a=function(e){return{type:i,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:t.newMessageBody}])});default:return e}}},138:function(e,t,n){e.exports={item:"Post_item__2WTmf"}},175:function(e,t,n){},176:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEntireTree",(function(){return Mn}));var r=n(0),c=n(8),i=n(1),o=n.n(i),a=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))},s=n(65),u=n.n(s),l=n(31),d=n(32),f=n(34),j=n(33),b=n(16),h=n(7);function p(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    a{\n        color: white;\n        text-decoration: none;\n        &:hover{\n            color: darkred;\n        }\n    }\n    padding: 10px;\n    align-items:start;\n"]);return p=function(){return e},e}function O(){var e=Object(c.a)(["\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    flex: 0 0 20%;\n    max-width: 20%;\n    background: pink;\n    @media ","{\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n"]);return O=function(){return e},e}var x=h.c.div(O(),(function(e){return e.theme.media.phone})),g=h.c.nav(p()),m=function(){return Object(r.jsx)(x,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(b.b,{to:"/profile",children:"Profile"}),Object(r.jsx)(b.b,{to:"/dialogs",children:"Messages"}),Object(r.jsx)(b.b,{to:"/news",children:"News"}),Object(r.jsx)(b.b,{to:"/music",children:"Music"}),Object(r.jsx)(b.b,{to:"/settings",children:"Settings"}),Object(r.jsx)(b.b,{to:"/users",children:"Users"})]})})},v=(n(175),function(){return Object(r.jsx)("div",{children:"News"})}),w=(n(176),function(){return Object(r.jsx)("div",{children:"Music"})}),y=function(){return Object(r.jsx)("div",{children:"Settings"})},P=n(13),S=n(3),C=n(14),E=n(12),k=n.n(E),U=n(17),_=n(37),I=n(134).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d62c4400-0e96-4d36-b89a-814554ffb0c8"}}),T={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return I.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return I.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return I.delete("follow/".concat(e)).then((function(e){return e.data}))}},A=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},F="FOLLOW",M="UNFOLLOW",L="SET_USERS",N="SET_CURRENT_PAGE",z="SET_TOTAL_USER_COUNT",D="TOGGLE_FETCHING",R="TOGGLE_FOLLOWING_PROGRESS",G={users:[],totalUsersCount:0,pageSize:100,currentPage:1,isFetching:!0,followingInProgress:[]},W=function(e){return{type:F,userId:e}},B=function(e){return{type:M,userId:e}},J=function(e){return{type:L,users:e}},H=function(e){return{type:N,currentPage:e}},V=function(e){return{type:z,totalUsersCount:e}},q=function(e){return{type:D,isFetching:e}},X=function(e,t){return{type:R,isFetching:e,userId:t}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(S.a)(Object(S.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!0})});case M:return Object(S.a)(Object(S.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!1})});case L:return Object(S.a)(Object(S.a)({},e),{},{users:Object(_.a)(t.users)});case N:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case z:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalUsersCount});case D:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case R:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},K=n.p+"static/media/loader.fd8746b8.svg",Q=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:K,alt:"loader"})})},Z=n(91),$=n.n(Z),ee=n.p+"static/media/userAsset3.9fd9547f.svg",te=function(e){return Object(r.jsxs)("div",{className:$.a.user,children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/".concat(e.user.id),children:Object(r.jsx)("img",{src:null===e.user.photos.small?ee:e.user.photos.small,className:$.a.avatar,alt:"user"})})}),Object(r.jsx)("div",{children:e.user.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})}),Object(r.jsx)("div",{children:e.user.name}),Object(r.jsx)("div",{children:e.user.status})]})},ne=n(56),re=n(92),ce=n.n(re),ie=n(135),oe=n.n(ie),ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,a=e.portionSize,s=Math.ceil(t/n),u=[],l=1;l<=s;l++)u.push(l);var d=Math.ceil(s/a),f=Object(i.useState)(1),j=Object(ne.a)(f,2),b=j[0],h=j[1];Object(i.useEffect)((function(){var e=Math.ceil(c/a);h(e)}),[c,a]);var p=(b-1)*a+1,O=b*a;return Object(r.jsxs)("div",{children:[b>1&&Object(r.jsx)("button",{onClick:function(){return h((function(e){return--e}))},children:"Prev"}),u.filter((function(e){return e>=p&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:oe()(c===e&&ce.a.selectedPage,ce.a.pageNumber),onClick:function(){o(e)},children:" ".concat(e," ")},e)})),b<d&&Object(r.jsx)("button",{onClick:function(){return h((function(e){return++e}))},children:"Next"})]})},se=function(e){var t=e.users.map((function(t){return Object(r.jsx)(te,{user:t,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress},t.id)}));return e.isFetching?Object(r.jsx)(Q,{}):Object(r.jsxs)("div",{children:[Object(r.jsx)(ae,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:20}),t]})},ue=n(10),le=n(136),de=Object(le.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),fe=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},be=function(e){return e.usersPage.currentPage},he=function(e){return e.usersPage.isFetching},pe=function(e){return e.usersPage.followingInProgress},Oe=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(r.jsx)(se,Object(S.a)({onPageChanged:this.onPageChanged},this.props))}}]),n}(o.a.Component),xe={follow:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0,e)),t.next=3,T.follow(e);case 3:0===t.sent.resultCode&&n(W(e)),n(X(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0,e)),t.next=3,T.unfollow(e);case 3:0===t.sent.resultCode&&n(B(e)),n(X(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:J,setCurrentPage:H,setTotalUserCount:V,toggleFetching:q,requestUsers:function(e,t){return function(){var n=Object(U.a)(k.a.mark((function n(r){var c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(H(e)),r(q(!0)),n.next=4,T.getUsers(e,t);case 4:c=n.sent,r(q(!1)),r(J(c.items)),r(V(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},ge=Object(ue.d)(Object(C.b)((function(e){return{users:de(e),pageSize:fe(e),totalUsersCount:je(e),currentPage:be(e),isFetching:he(e),followingInProgress:pe(e)}}),xe))(Oe);function me(){var e=Object(c.a)(["\n    font-size: 14px;\n    min-height: 30px;\n    \n    :hover span{\n        color:grey;\n        cursor: pointer;\n    }\n    \n"]);return me=function(){return e},e}var ve=h.c.div(me()),we=function(e){var t=Object(i.useState)(!1),n=Object(ne.a)(t,2),c=n[0],o=n[1],a=Object(i.useState)(e.status),s=Object(ne.a)(a,2),u=s[0],l=s[1];Object(i.useEffect)((function(){l(e.status)}),[e.status]);return Object(r.jsxs)(ve,{children:[!c&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onClick:function(){e.isOwner&&o(!0)},children:e.status||"----"})}),c&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){o(!1),e.updateUserStatus(u)},autoFocus:!0,value:u})})]})},ye=n(127),Pe=n(128),Se=n(40),Ce=n(42),Ee=n.n(Ce);function ke(){var e=Object(c.a)(["\n\n"]);return ke=function(){return e},e}function Ue(){var e=Object(c.a)(["\n  width: 60%;\n  background-color:pink;\n  @media ","{\n            width: 95%;\n  }\n"]);return Ue=function(){return e},e}function _e(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    padding: 1rem;\n    background-color: rgba(0, 0, 0, 0.7);\n"]);return _e=function(){return e},e}function Ie(){var e=Object(c.a)(["\n    flex: 1 0 60%;\n"]);return Ie=function(){return e},e}function Te(){var e=Object(c.a)(["\n    flex: 0 0 40%;\n    font-weight: bold;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(c.a)(["\n    display:flex;\n"]);return Ae=function(){return e},e}var Fe=Object(Se.a)("input"),Me=Object(Se.a)("textarea"),Le=h.c.div(Ae()),Ne=h.c.div(Te()),ze=h.c.div(Ie()),De=h.c.div(_e()),Re=h.c.div(Ue(),(function(e){return e.theme.media.phone})),Ge=h.c.button(ke()),We=Object(Pe.a)({form:"profileEditForm"})((function(e){var t=e.profile,n=e.handleSubmit,c=e.error,i=e.cancelSubmit;return Object(r.jsx)(De,{children:Object(r.jsx)(Re,{children:Object(r.jsxs)("form",{onSubmit:n,children:[c&&Object(r.jsx)("div",{className:Ee.a.formSummaryError,children:c}),Object(r.jsxs)(Le,{children:[Object(r.jsx)(Ne,{children:"Full name:"}),Object(r.jsx)(ze,{children:Object(r.jsx)(ye.a,{placeholder:"full name",name:"fullName",component:Fe,validate:[]})})]}),Object(r.jsxs)(Le,{children:[Object(r.jsx)(Ne,{children:"About me:"}),Object(r.jsx)(ze,{children:Object(r.jsx)(ye.a,{placeholder:"about me",name:"aboutMe",component:Me,validate:[]})})]}),Object(r.jsxs)(Le,{children:[Object(r.jsx)(Ne,{children:"Looking for a job:"}),Object(r.jsx)(ze,{children:Object(r.jsx)(ye.a,{name:"lookingForAJob",component:"input",validate:[],type:"checkbox"})})]}),Object(r.jsxs)(Le,{children:[Object(r.jsx)(Ne,{children:"Work preferences: "}),Object(r.jsx)(ze,{children:Object(r.jsx)(ye.a,{placeholder:"work preferences",name:"lookingForAJobDescription",component:Me,validate:[]})})]}),Object(r.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(r.jsxs)("div",{children:[e,": ",Object(r.jsx)(ye.a,{placeholder:e,name:"contacts.".concat(e),component:Fe,validate:[]})]},e)}))]}),Object(r.jsx)(Ge,{children:"Save"}),Object(r.jsx)(Ge,{type:"button",onClick:i,children:"Cancel"})]})})})}));function Be(){var e=Object(c.a)(["\n    flex: 1 0 60%;\n"]);return Be=function(){return e},e}function Je(){var e=Object(c.a)(["\n    flex: 0 0 40%;\n    font-weight: bold;\n"]);return Je=function(){return e},e}function He(){var e=Object(c.a)(["\n    display:flex;\n"]);return He=function(){return e},e}function Ve(){var e=Object(c.a)(["\n    font-size: 22px;\n"]);return Ve=function(){return e},e}function qe(){var e=Object(c.a)(["\n    display: flex;\n    flex-wrap:wrap;\n    margin-top:10px;\n    "," + "," {\n        margin-left: 10px;\n    }\n"]);return qe=function(){return e},e}function Xe(){var e=Object(c.a)(["\n    flex: 0 0 50%;\n    justify-self: center;\n    @media ","{\n            flex: 0 0 100%;\n    }\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(c.a)(["\n    flex: 0 0 40%;\n    @media ","{\n            flex: 0 0 100%;\n    }\n"]);return Ye=function(){return e},e}function Ke(){var e=Object(c.a)(["\n    position: relative;\n    display: inline-block;\n    line-height: 0;\n    min-width: 200px;\n    img{\n        width: 100%;\n        max-width:300px;\n        background: white;\n    }\n    :hover ","{\n            transition: 0.3s;\n            opacity: 0.7;\n    }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(c.a)(['\n    position: absolute;\n    bottom:5%;\n    left: 50%;\n    font-size: 100%;\n    padding: 4px;\n    width: 40%;\n    margin-left:-20%;\n    background-color: #555;\n    color: lightgrey;\n    display: block;\n    border: none;\n    cursor: pointer;\n    text-align: center;\n    opacity: 0;\n    transition: 0.3s;\n    line-height: 1;\n    border-radius: 5px;\n    input[type="file"] {\n        display: none;\n    }\n    :hover {\n        color: white;\n        transition: 0.2s;\n    }\n    \n']);return Qe=function(){return e},e}var Ze=h.c.label(Qe()),$e=h.c.div(Ke(),Ze),et=h.c.div(Ye(),(function(e){return e.theme.media.phone})),tt=h.c.div(Xe(),(function(e){return e.theme.media.phone})),nt=h.c.div(qe(),et,tt),rt=h.c.div(Ve()),ct=h.c.div(He()),it=h.c.div(Je()),ot=h.c.div(Be()),at=function(e){var t=e.profile,n=e.setEditMode,c=e.isOwner;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(ct,{children:[Object(r.jsx)(it,{children:"About me:"}),Object(r.jsx)(ot,{children:t.aboutMe})]}),Object(r.jsxs)(ct,{children:[Object(r.jsx)(it,{children:"Looking for a job: "}),Object(r.jsx)(ot,{children:t.lookingForAJob?"yes":"no"})]}),t.lookingForAJob&&Object(r.jsxs)(ct,{children:[Object(r.jsx)(it,{children:"Work preferences: "}),Object(r.jsx)(ot,{children:t.lookingForAJobDescription})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(r.jsx)(st,{contactType:e,contactInfo:t.contacts[e]},e)}))]}),c&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:n,children:"Edit"})})]})},st=function(e){var t=e.contactType,n=e.contactInfo;return Object(r.jsx)(ct,{children:n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(it,{children:[t,": "]}),Object(r.jsx)(ot,{children:n})]})})},ut=function(e){var t=e.profile,n=e.savePhoto,c=e.isOwner,o=e.status,a=e.updateUserStatus,s=e.editMode,u=e.setEditMode,l=e.disableEditMode,d=e.saveProfile;if(Object(i.useEffect)((function(){return function(){l()}}),[l]),!t)return Object(r.jsx)(Q,{});return Object(r.jsxs)(nt,{children:[Object(r.jsx)(et,{children:Object(r.jsxs)($e,{children:[Object(r.jsx)("img",{src:t.photos.large?t.photos.large:ee,alt:"avatar"}),c&&Object(r.jsxs)(Ze,{children:[Object(r.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}}),"Change photo"]})]})}),Object(r.jsxs)(tt,{children:[Object(r.jsx)(rt,{children:t.fullName}),Object(r.jsx)(we,{status:o,updateUserStatus:a,isOwner:c}),Object(r.jsx)("hr",{}),Object(r.jsx)(at,{profile:t,setEditMode:u,isOwner:c}),s&&Object(r.jsx)(We,{initialValues:t,onSubmit:function(e){d(e)},profile:t,isOwner:c,cancelSubmit:l})]})]})},lt=n(67),dt={getProfile:function(e){return I.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return I.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return I.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),I.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return I.put("profile",e).then((function(e){return e.data}))}},ft=n(30),jt="ADD-POST",bt="SET_USER_PROFILE",ht="SET_STATUS",pt="DELETE_POST",Ot="SAVE_PHOTO_SUCCESS",xt="SET_EDIT_MODE",gt="DISABLE_EDIT_MODE",mt="SAVE_PROFILE_SUCCESS",vt={posts:[{id:1,message:"hey, nibba",likesCount:228},{id:2,message:"get the fuck out",likesCount:9},{id:3,message:"It is my first post",likesCount:3}],profile:null,status:"default status",editMode:!1},wt=function(e){return{type:mt,profile:e}},yt=function(e){return{type:ht,status:e}},Pt=function(e){return{type:Ot,photos:e}},St=function(){return{type:gt}},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case jt:return Object(S.a)(Object(S.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[{id:5,message:t.newPostText,likesCount:0}])});case pt:return Object(S.a)(Object(S.a)({},e),{},{posts:Object(_.a)(e.posts.filter((function(e){return e.id!==t.postId})))});case bt:return Object(S.a)(Object(S.a)({},e),{},{profile:t.profile});case ht:return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case Ot:return Object(S.a)(Object(S.a)({},e),{},{profile:Object(S.a)(Object(S.a)({},e.profile),{},{photos:t.photos})});case xt:return Object(S.a)(Object(S.a)({},e),{},{editMode:!0});case gt:return Object(S.a)(Object(S.a)({},e),{},{editMode:!1});case mt:return Object(S.a)(Object(S.a)({},e),{},{profile:t.profile});default:return e}},Et=n(138),kt=n.n(Et),Ut=function(e){return Object(r.jsxs)("div",{className:kt.a.item,children:[Object(r.jsx)("img",{src:"https://w7.pngwing.com/pngs/642/857/png-transparent-internet-meme-redemption-white-sticker-meme.png"}),e.message,Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["like ",e.likeCount]})})]})},_t=n(36),It=Object(_t.a)(10),Tt=Object(Se.a)("textarea"),At=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ye.a,{placeholder:"Enter post",name:"newPostText",component:Tt,validate:[_t.b,It]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})};At=Object(Pe.a)({form:"AddNewPostForm"})(At);var Ft=function(e){var t=e.posts.map((function(e){return Object(r.jsx)(Ut,{message:e.message,likeCount:e.likesCount},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(At,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(r.jsx)("div",{children:t})]})},Mt=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:function(e){return{type:jt,newPostText:e}}})(Ft),Lt=o.a.memo((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(ut,Object(S.a)({},e)),Object(r.jsx)(Mt,{})]})})),Nt=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"refreshProfile",value:function(){var e=this.props,t=e.match,n=e.authorizedUserId,r=e.history,c=e.getProfile,i=e.setUserStatus,o=t.params.userId;o||(o=n)||r.push("/login"),o&&(c(o),i(o))}},{key:"render",value:function(){return Object(r.jsx)(Lt,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,editMode:this.props.editMode,setEditMode:this.props.setEditMode,disableEditMode:this.props.disableEditMode})}}]),n}(o.a.Component),zt=Object(ue.d)(Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.id,editMode:e.profilePage.editMode}}),{getProfile:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.getProfile(e);case 2:r=t.sent,n({type:bt,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserStatus:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.getStatus(e);case 2:r=t.sent,n(yt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,dt.updateStatus(e);case 3:0===t.sent.resultCode&&n(yt(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Error with status");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(Pt(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},disableEditMode:St,setEditMode:function(){return{type:xt}},saveProfile:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){var r,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.saveProfile(e);case 2:0===(r=t.sent).resultCode?(n(wt(e)),n(St())):(c=r.messages[0].slice(r.messages[0].indexOf(">")+1,r.messages[0].indexOf(")")).toLocaleLowerCase(),n(Object(ft.a)("profileEditForm",{contacts:Object(lt.a)({},c,r.messages[0])})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),P.g)(Nt);function Dt(){var e=Object(c.a)(["\n    width: ",";\n    img{\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n"]);return Dt=function(){return e},e}function Rt(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: "," 0;\n"]);return Rt=function(){return e},e}var Gt=h.c.header(Rt(),(function(e){return e.paddingTopBottom||"5px"})),Wt=h.c.div(Dt(),(function(e){return e.width||"20px"})),Bt=function(e){var t=e.isAuth,n=e.logout,c=e.login;return Object(r.jsxs)(Gt,{paddingTopBottom:"10px",children:[Object(r.jsx)(Wt,{width:"30px",children:Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/9a/3b/90/9a3b902ff415e1a95368f1bf2b9ecca8.png",alt:"logo"})}),Object(r.jsxs)("div",{children:[t&&Object(r.jsxs)("div",{children:[c," - ",Object(r.jsx)("button",{onClick:n,children:"Logout"})]}),!t&&Object(r.jsx)(b.b,{to:"/login",children:"Login"})]})]})},Jt={authMe:function(){return I.get("auth/me").then((function(e){return e.data}))},login:function(e){return I.post("auth/login",e).then((function(e){return e.data}))},logout:function(){return I.delete("auth/login").then((function(e){return e.data}))}},Ht={getCaptchaUrl:function(){return I.get("security/get-captcha-url").then((function(e){return e.data}))}},Vt="SET_USER_AUTH_DATA",qt="SET_CAPTCHA_URL_SUCCESS",Xt="DELETE_USER_AUTH_DATA",Yt={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},Kt=function(e){return{type:Vt,data:e}},Qt=function(e){return{type:qt,data:e}},Zt=function(){return function(){var e=Object(U.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jt.authMe();case 2:0===(n=e.sent).resultCode&&t(Kt(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$t=function(){return function(){var e=Object(U.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ht.getCaptchaUrl();case 2:n=e.sent,t(Qt(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Vt:return Object(S.a)(Object(S.a)(Object(S.a)({},e),t.data),{},{isAuth:!0});case qt:return Object(S.a)(Object(S.a)({},e),{},{captchaUrl:t.data});case Xt:return Object(S.a)(Object(S.a)({},e),{},{id:null,login:null,email:null,isAuth:!1});default:return e}},tn=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Bt,Object(S.a)({},this.props))}}]),n}(o.a.Component),nn=Object(C.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(U.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jt.logout();case 2:0===e.sent.resultCode&&t({type:Xt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(tn),rn=Object(Se.a)("input"),cn=Object(_t.a)(20),on=Object(Pe.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ye.a,{placeholder:"Email",name:"email",component:rn,validate:[_t.b,cn]})}),Object(r.jsx)("div",{children:Object(r.jsx)(ye.a,{placeholder:"Password",name:"password",component:rn,type:"password",validate:[_t.b,cn]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(ye.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),e.captchaUrl&&Object(r.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&Object(r.jsx)("div",{children:Object(r.jsx)(ye.a,{placeholder:"Captcha",name:"captcha",component:rn,validate:[_t.b]})}),e.error&&Object(r.jsx)("div",{className:Ee.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),an=Object(C.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Jt.login(e);case 2:0===(r=t.sent).resultCode?n(Zt()):(10===r.resultCode&&n($t()),n(Object(ft.a)("login",{_error:r.messages.length>0?r.messages[0]:"Some error"})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){if(e.isAuth)return Object(r.jsx)(P.a,{to:"/Profile"});return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(on,{onSubmit:function(t){e.login(t)},captchaUrl:e.captchaUrl})]})})),sn="INITIALIZING_SUCCESS",un={isInitialized:!1},ln=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:un,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case sn:return Object(S.a)(Object(S.a)({},e),{},{isInitialized:!0});default:return e}},dn=n(126),fn=n(129),jn=n(139),bn=Object(ue.c)({profilePage:Ct,dialogsPage:dn.b,usersPage:Y,auth:en,form:fn.a,app:ln}),hn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,pn=Object(ue.e)(bn,hn(Object(ue.a)(jn.a))),On=pn;window.__store__=pn;var xn=function(e){return function(t){return Object(r.jsx)(o.a.Suspense,{fallback:Object(r.jsx)(Q,{}),children:Object(r.jsx)(e,Object(S.a)({},t))})}};function gn(){var e=Object(c.a)(["\n    height: 15vh;\n    text-align: center; \n"]);return gn=function(){return e},e}var mn=h.c.footer(gn()),vn=function(){return Object(r.jsx)(mn,{children:Object(r.jsx)("h2",{children:"Footer"})})};function wn(){var e=Object(c.a)(["\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    flex: 0 0 80%;\n    max-width: 80%;\n    background: lemonchiffon;\n    @media ","{\n        flex: 1 0 100%;\n        max-width: 100%;\n    }\n"]);return wn=function(){return e},e}function yn(){var e=Object(c.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    flex-grow: 1; \n    @media ","{\n        flex-direction: column;\n    }\n"]);return yn=function(){return e},e}function Pn(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    width:100%;\n    max-width:1200px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-left:auto;\n    margin-right:auto;\n    background-color: aliceblue;\n    min-height: 100vh;\n"]);return Pn=function(){return e},e}var Sn=h.c.div(Pn()),Cn=h.c.div(yn(),(function(e){return e.theme.media.phone})),En=h.c.div(wn(),(function(e){return e.theme.media.phone})),kn=o.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Un=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e,t){alert(e.message)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.isInitialized?Object(r.jsxs)(Sn,{children:[Object(r.jsx)(nn,{}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(En,{children:Object(r.jsxs)(P.d,{children:[Object(r.jsx)(P.b,{path:"/dialogs",render:xn(kn)}),Object(r.jsx)(P.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(zt,{})}}),Object(r.jsx)(P.b,{path:"/news",render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(P.b,{path:"/music",render:function(){return Object(r.jsx)(w,{})}}),Object(r.jsx)(P.b,{path:"/settings",render:function(){return Object(r.jsx)(y,{})}}),Object(r.jsx)(P.b,{path:"/users",render:function(){return Object(r.jsx)(ge,{})}}),Object(r.jsx)(P.b,{path:"/login",render:function(){return Object(r.jsx)(an,{})}}),Object(r.jsx)(P.a,{exact:!0,from:"/",to:"/profile"}),Object(r.jsx)(P.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}),Object(r.jsx)(vn,{})]}):Object(r.jsx)(Q,{})}}]),n}(o.a.Component),_n=Object(ue.d)(Object(C.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initialize:function(){return function(e){var t=e(Zt());Promise.all([t]).then((function(){e({type:sn})}))}}}))(Un),In=function(){return Object(r.jsx)(b.a,{children:Object(r.jsx)(C.a,{store:On,children:Object(r.jsx)(_n,{})})})};function Tn(){var e=Object(c.a)(['\n        *,\n        *::before,\n        *::after {\n            box-sizing: border-box;\n        }\n        html {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n        body {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n            font-size: 1rem;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n        }\n']);return Tn=function(){return e},e}var An=Object(h.b)(Tn()),Fn={media:{phone:"(max-width: 660px)",tablet:"(max-width: 900px) and (min-width:660px)"}},Mn=function(){u.a.render(Object(r.jsxs)(h.a,{theme:Fn,children:[Object(r.jsx)(An,{}),Object(r.jsx)(In,{})]}),document.getElementById("root"))};Mn(),On.subscribe(Mn),a()},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(!(t.length<=e))return"Max length is ".concat(e)}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),c=n(3),i=n(140),o=(n(1),n(42)),a=n.n(o),s=function(e){return function(t){var n=t.input,o=t.meta,s=Object(i.a)(t,["input","meta"]),u=o.touched&&o.error;return Object(r.jsxs)("div",{className:a.a.formControl+" "+(u?a.a.error:""),children:[Object(r.jsx)("div",{children:Object(r.jsx)(e,Object(c.a)(Object(c.a)({},n),s))}),u&&Object(r.jsxs)("span",{children:[" ",o.error," "]})]})}}},42:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2YQaU",error:"FormsControls_error__3g4FW",formSummaryError:"FormsControls_formSummaryError__PAkJW"}},91:function(e,t,n){e.exports={avatar:"User_avatar__2LoF5",user:"User_user__1f7S8"}},92:function(e,t,n){e.exports={pageNumber:"Pagination_pageNumber__3nXTM",selectedPage:"Pagination_selectedPage__38Dd4"}}},[[292,1,2]]]);
//# sourceMappingURL=main.9743ae80.chunk.js.map