(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(58),o=a.n(i),c=(a(71),a(1)),l=a(2),s=a(4),m=a(3),p=a(5),u=(a(73),a(75),a(77),a(79),function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isLeft:void 0,moreContent:!1},n.renderMoreContent=function(){var e=n.props.moreSections;return r.a.createElement("div",{className:"sectionsContainer"},e.map(function(e,t){return r.a.createElement("div",{className:"sectionContainer",key:t},r.a.createElement("p",{className:"sectionContent date"},e.date),r.a.createElement("p",{className:"sectionContent description"},e.description))}))},n.renderParagraphContent=function(){var e=n.props,t=e.title,i=e.image,o=e.sections,c=n.state,l=c.isLeft,s=c.moreContent;return r.a.createElement("div",{className:"paragraph"},r.a.createElement("div",{className:l?"paragraphContainer leftParagraph":"paragraphContainer rightParagraph"},r.a.createElement("img",{className:"paragraphImage",alt:"Universtity of Padua logo",src:i&&a(42)("./"+i)}),r.a.createElement("h2",{className:"paragraphTitle"},t),r.a.createElement("img",{className:"paragraphImage",alt:"Universtity of Padua logo",src:i&&a(42)("./"+i)})),r.a.createElement("div",{className:l?"paragraphContainer leftParagraph":"paragraphContainer rightParagraph"},r.a.createElement("div",{className:"sectionsContainer"},o.map(function(e,t){return r.a.createElement("div",{className:"sectionContainer",key:t},r.a.createElement("p",{className:"sectionContent date"},e.date),r.a.createElement("div",{className:"sectionContent description"},r.a.createElement("h3",null,e.title," "),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})))}))),s&&n.renderMoreContent())},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLeft:this.props.index%2===0})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.moreSections,i=this.state,o=i.isLeft,c=i.moreContent;return r.a.createElement("div",{id:a,style:{paddingTop:"3rem"}},r.a.createElement("div",{className:o?"leftLine":"rightLine"}),this.renderParagraphContent(),n&&n.length>=1?r.a.createElement("p",{className:"more-paragraph",onClick:function(){return e.setState({moreContent:!c})}},c?"less":"more"):"")}}]),t}(n.PureComponent)),d=a(59),h=(a(85),a(60)),f=a.n(h),g=r.a.createContext({setRenderInformation:function(e){},headerClass:""}),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.context.setRenderInformation;return r.a.createElement("div",{className:"menu"},r.a.createElement("img",{onClick:e,src:f.a,className:"info-menu"}),r.a.createElement("p",{onClick:e},"Cristian Maschio"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#professional"},"Professional")),r.a.createElement("li",null,r.a.createElement("a",{href:"#education"},"Education")),r.a.createElement("li",null,r.a.createElement("a",{href:"#passions"},"Passions")),r.a.createElement("li",null,r.a.createElement("a",{href:"#personal-experiences"},"Personal experiences"))))}}]),t}(n.PureComponent),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Consumer,null,function(e){return r.a.createElement(b,{context:e})})}}]),t}(n.PureComponent),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"intro"},r.a.createElement("h1",null,"Cristian Maschio"),r.a.createElement("h2",null,"Software Developer")),r.a.createElement(E,null),r.a.createElement("div",{className:"paragraphs"},d.paragraphs.map(function(e,t){return r.a.createElement(u,{id:e.id,key:t,index:t,title:e.title,image:e.image,sections:e.sections,moreSections:e.more})})))}}]),t}(n.PureComponent),k=(a(87),a(18)),C=a.n(k),y=(a(89),a(61)),w=a.n(y),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.size,t=e+e/20;return r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-background-animation",style:{height:t,width:t}}),r.a.createElement("img",{className:"image-profile",alt:"profile",src:w.a,style:{height:e,width:e}}))}}]),t}(n.PureComponent),j=[{key:"Name",text:"Cristian"},{key:"Surname",text:"Maschio"},{key:"Birthday",text:"05/31/1994"},{key:"Nationality",text:"Italy"}],N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).renderContent=function(e){return r.a.createElement("div",null,e.map(function(e){return r.a.createElement("div",{key:e.key,className:"menuContent"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"menuContentContainer"},r.a.createElement("p",null,e.key,":"),r.a.createElement("p",null,e.text)))}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.context,t=e.setRenderInformation,a=e.headerClass;return r.a.createElement("header",{className:a},r.a.createElement("div",{onClick:function(){return t(!1)},className:"close"}),r.a.createElement("div",{className:"header-blue"}),r.a.createElement("div",{className:"header-information"},r.a.createElement(O,{size:200}),r.a.createElement("div",{className:"menuContainer"},r.a.createElement("div",{className:"line"}),r.a.createElement("h2",null,"Personal"),this.renderContent(j)),r.a.createElement("div",{className:"menuContainer"},r.a.createElement("div",{className:"line"}),r.a.createElement("h2",null,"Contacts"),r.a.createElement("div",{className:"menuContent"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"menuContentContainer"},r.a.createElement("a",{href:"tel:345-273-6368",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{type:"phone"})),r.a.createElement("a",{href:"mailto:cristianmaschio@hotmail.it",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{type:"mail"})),r.a.createElement("a",{href:"https://github.com/CristianMaschio",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{type:"github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/cristian-maschio-37004a146",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{type:"linkedin"})))))))}}]),t}(n.PureComponent),S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Consumer,null,function(e){return r.a.createElement(N,{context:e})})}}]),t}(n.PureComponent),x=(a(139),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"tel:345-273-6368",target:"_blank",rel:"noopener noreferrer"},"+39 3452736368")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:cristianmaschio@hotmail.it",target:"_blank",rel:"noopener noreferrer"},"CristianMaschio@hotmail.it")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/cristian-maschio-37004a146",target:"_blank",rel:"noopener noreferrer"},"https://www.linkedin.com/in/cristian-maschio-37004a146")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/CristianMaschio",target:"_blank",rel:"noopener noreferrer"},"https://github.com/CristianMaschio"))))}}]),t}(n.PureComponent)),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={headerClass:""},a.setRenderInformation=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a.setState({headerClass:e?"open-header":""})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.headerClass;return r.a.createElement(g.Provider,{value:{setRenderInformation:this.setRenderInformation,headerClass:e}},this.props.children)}}]),t}(n.Component),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(S,null),r.a.createElement(v,null),r.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){var n={"./education.png":81,"./experiences.png":82,"./passions.png":83,"./work.png":84};function r(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=42},59:function(e){e.exports={paragraphs:[{id:"professional",title:"Professional",image:"work.png",sections:[{date:"03/03/2019 - Today",title:"Full Stack Developer",description:"Worked principally with React-Native, ReactJS and AWS. ",detail:{image:"",description:""}},{date:"01/10/2018 - 03/03/2019",title:"Stage - Full Stack Developer",description:"Worked principally with React-Native, ReactJS and AWS. And worked in small tasks with Swift.",detail:{image:"",description:""}}]},{id:"education",title:"Education",image:"education.png",sections:[{date:"2015 - 2019",title:"University of Padua - Data Science",description:"I am currently a student and i miss the last 3 exams.",detail:{image:"",description:""}},{date:"2008 - 2015",title:"Commercial services",description:"Commercial vocational institute Carlo Rosselli, Castelfranco Veneto (Italy).",detail:{image:"",description:""}}],more:[]},{id:"passions",title:"Passions",image:"passions.png",sections:[{date:"-",title:"Programming",description:"I love programming, thinking and using my mind to create more and more magic, clean and especially performed code. I like working with innovative technologies, mainly with web and mobile application. Currently i use a lot React and React-Native.",detail:{image:"",description:""}},{date:"-",title:"Vegetable garden and aquariums",description:"These two passions of mine allow me to get my hands dirty, free my mind and appreciate how much nature can give us.",detail:{image:"",description:""}}]},{id:"personal-experiences",title:"Personal experiences",image:"experiences.png",sections:[{date:"26/05/2018",title:"Hackathon",description:"First prize winning with a web application developed with the use of the <b>React</b> library and the <b>Google Maps API.</b>",detail:{image:"",description:""}},{date:"2018",title:"University project",description:"Implementation of a university project using the following <b>NodeJS, MongoDB and ReactJS technologies.</b> Mainly I worked in front end with the React library.",detail:{image:"",description:""}},{date:"2018",title:"University project",description:"Realization of a project on voluntary request for the <b>Mobile Programming and Multimedia course</b>, which allowed me to create a mobile application developed with the <b>React Native</b> framework.",detail:{image:"",description:""}}]}]}},60:function(e,t){e.exports="data:image/png;base64,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"},61:function(e,t,a){e.exports=a.p+"static/media/imageProfile.9194db0c.jpg"},66:function(e,t,a){e.exports=a(141)},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/education.6fd6dae4.png"},82:function(e,t,a){e.exports=a.p+"static/media/experiences.fecea210.png"},83:function(e,t,a){e.exports=a.p+"static/media/passions.2f9a1339.png"},84:function(e,t,a){e.exports=a.p+"static/media/work.a1edc6c2.png"},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.a79a13a3.chunk.js.map