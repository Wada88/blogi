(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a.n(n),l=a(7),r=a.n(l),c=a(0),s=a.n(c),o=a(168),m=a.n(o),u=a(154),p=a(4),d=a.n(p),h=a(175),g=a.n(h),b=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.gotoImage=t.gotoImage.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t}r()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return s.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},s.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},s.a.createElement("img",{src:t.thumbnail})),s.a.createElement("h3",null,t.caption),s.a.createElement("p",null,t.description))});return s.a.createElement("div",{className:"row"},a)}},a.render=function(){return s.a.createElement("div",null,this.renderGallery(),s.a.createElement(g.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(c.Component);b.displayName="Gallery",b.propTypes={images:d.a.array};var f=b,E=a(219),N=a.n(E),x=a(220),v=a.n(x),I=a(221),k=a.n(I),y=a(222),L=a.n(y),C=a(223),j=a.n(C),w=a(224),S=a.n(w),P=a(225),M=a.n(P),O=a(226),q=a.n(O),G=a(227),T=a.n(G),A=a(228),J=a.n(A),$=a(229),D=a.n($),F=a(230),U=a.n(F),W=[{id:"1",src:M.a,thumbnail:N.a,caption:"My journey to becoming a web developer",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"2",src:q.a,thumbnail:v.a,caption:"Japanese street food project",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"3",src:T.a,thumbnail:k.a,caption:"Coordinator",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"4",src:J.a,thumbnail:L.a,caption:"Ecotourism",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"5",src:D.a,thumbnail:j.a,caption:"Worklife in Japan",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"burn1",src:U.a,thumbnail:S.a,caption:"Forest work in Finland",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."}],R=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t}r()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement("title",null,"Gatsby Starter - Strata"),s.a.createElement("meta",{name:"description",content:"Site description"})),s.a.createElement("div",{id:"main"},s.a.createElement("section",{id:"one"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Ipsum lorem dolor aliquam ante commodo",s.a.createElement("br",null),"magna sed accumsan arcu neque.")),s.a.createElement("p",null,"Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia."),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"button"},"Learn More")))),s.a.createElement("section",{id:"two"},s.a.createElement("h2",null,"Recent Projects"),s.a.createElement(f,{images:W.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})}),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"button"},"Full Portfolio")))),s.a.createElement("section",{id:"three"},s.a.createElement("h2",null,"Get In Touch"),s.a.createElement("p",null,"Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor."),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"8u 12u$(small)"},s.a.createElement("form",{method:"post",action:"#"},s.a.createElement("div",{className:"row uniform 50%"},s.a.createElement("div",{className:"6u 12u$(xsmall)"},s.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),s.a.createElement("div",{className:"6u 12u$(xsmall)"},s.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),s.a.createElement("div",{className:"12u"},s.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})))),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message"})))),s.a.createElement("div",{className:"4u 12u$(small)"},s.a.createElement("ul",{className:"labeled-icons"},s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-home"},s.a.createElement("span",{className:"label"},"Address")),"1234 Somewhere Rd.",s.a.createElement("br",null),"Nashville, TN 00000",s.a.createElement("br",null),"United States"),s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-mobile"},s.a.createElement("span",{className:"label"},"Phone")),"000-000-0000"),s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-envelope-o"},s.a.createElement("span",{className:"label"},"Email")),s.a.createElement("a",{href:"#"},"hello@untitled.tld"))))))))},t}(s.a.Component);t.default=R},150:function(e,t,a){e.exports=a.p+"static/matti-8ad5aed354d39931363b10dcec3d9209.jpg"},154:function(e,t,a){"use strict";var n=a(7),i=a.n(n),l=a(0),r=a.n(l),c=(a(155),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-twitter"},r.a.createElement("span",{className:"label"},"Twitter"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-github"},r.a.createElement("span",{className:"label"},"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-dribbble"},r.a.createElement("span",{className:"label"},"Dribbble"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email")))),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Yuki Matti Wada"),r.a.createElement("li",null,"Design: ",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))))},t}(r.a.Component)),s=a(150),o=a.n(s),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"#",className:"image matti"},r.a.createElement("img",{src:o.a,alt:"matti"})),r.a.createElement("h1",null,r.a.createElement("strong",null,"Yuki Matti Wada"),r.a.createElement("p",null," ","Finnish-Japanese entrepreneur",r.a.createElement("br",null),"Upcoming web developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://html5up.net"},"My CV"))),r.a.createElement(c,null))},t}(r.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(m,null),e)},t}(r.a.Component);t.a=u},219:function(e,t,a){e.exports=a.p+"static/vs-9afa0a89cc5dc1f3520b1a0bf365e88e.jpg"},220:function(e,t,a){e.exports=a.p+"static/kansai-d63b64855152af2c88a63a7e9864b219.jpg"},221:function(e,t,a){e.exports=a.p+"static/isa-8fe77bdd0880e31ac657ae037f5ed55c.jpg"},222:function(e,t,a){e.exports=a.p+"static/sammakko-d783e81e3e669c8d55ccb1851bfc9ac9.jpg"},223:function(e,t,a){e.exports=a.p+"static/japan-ae7a3a7828adfe98ea57549d472b0842.jpg"},224:function(e,t,a){e.exports=a.p+"static/burn1-45417c659590e7e3d88786d04a7d86bf.jpg"},225:function(e,t,a){e.exports=a.p+"static/vs-9afa0a89cc5dc1f3520b1a0bf365e88e.jpg"},226:function(e,t,a){e.exports=a.p+"static/kansai-d63b64855152af2c88a63a7e9864b219.jpg"},227:function(e,t,a){e.exports=a.p+"static/isa-8fe77bdd0880e31ac657ae037f5ed55c.jpg"},228:function(e,t,a){e.exports=a.p+"static/sammakko-d783e81e3e669c8d55ccb1851bfc9ac9.jpg"},229:function(e,t,a){e.exports=a.p+"static/japan-ae7a3a7828adfe98ea57549d472b0842.jpg"},230:function(e,t,a){e.exports=a.p+"static/burn1-45417c659590e7e3d88786d04a7d86bf.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-08c116caffe307777620.js.map