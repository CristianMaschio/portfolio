(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(60),o=a.n(r),l=(a(73),a(1)),c=a(2),s=a(4),m=a(3),p=a(5),d=(a(74),a(75),a(76),i.a.createContext({setRenderInformation:function(e){},headerClass:"",language:"En",changeLanguage:function(e){}})),u=(a(77),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isLeft:void 0,moreContent:!1,sectionsElements:void 0},n.moreContent=i.a.createRef(),n.handleMoreContent=function(){var e=n.state.moreContent;n.moreContent.current.style.height=e?"0px":n.moreContent.current.scrollHeight+"px",n.setState({moreContent:!e})},n.renderMoreContent=function(){var e=n.props.moreSections;return i.a.createElement("div",{ref:n.moreContent,className:"more-container"},i.a.createElement("div",{className:"rightLine"}),i.a.createElement("div",{className:"sectionsContainer"},n.getSectionElements(e)))},n.renderParagraphContent=function(){var e=n.props,t=e.title,r=e.image,o=n.state,l=o.isLeft,c=o.sectionsElements;return i.a.createElement("div",{className:"paragraph"},i.a.createElement("div",{className:l?"paragraphContainer leftParagraph":"paragraphContainer rightParagraph"},i.a.createElement("img",{className:"paragraphImage",alt:"Universtity of Padua logo",src:r&&a(42)("./"+r)}),i.a.createElement("h2",{className:"paragraphTitle"},t),i.a.createElement("img",{className:"paragraphImage",alt:"Universtity of Padua logo",src:r&&a(42)("./"+r)})),i.a.createElement("div",{className:l?"paragraphContainer leftParagraph":"paragraphContainer rightParagraph"},i.a.createElement("div",{className:"sectionsContainer"},c)),n.renderMoreContent())},n.renderMoreLessButton=function(){var e=n.props.moreSections,t=n.state.moreContent;return i.a.createElement(i.a.Fragment,null,e&&e.length>=1?i.a.createElement("p",{className:"more-paragraph",onClick:n.handleMoreContent},t?"less":"more"):"")},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.sections,t=this.getSectionElements(e);this.setState({isLeft:this.props.index%2===0,sectionsElements:t})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(e.sections!=this.state.sectionsElements){var t=this.getSectionElements(e.sections);this.setState({sectionsElements:t})}}},{key:"getSectionElements",value:function(e){return e&&e.map(function(e,t){return i.a.createElement("div",{className:"sectionContainer",key:t},i.a.createElement("p",{className:"sectionContent date"},e.date),i.a.createElement("div",{className:"sectionContent description"},i.a.createElement("h3",null,e.title," "),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})))})}},{key:"render",value:function(){var e=this.props.id,t=this.state.isLeft;return i.a.createElement("div",{id:e,style:{paddingTop:"3rem"}},i.a.createElement("div",{className:t?"leftLine":"rightLine"}),this.renderParagraphContent(),this.renderMoreLessButton())}}]),t}(n.PureComponent)),g=(a(82),a(61)),h=a.n(g),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderLanguageSelector",value:function(){var e=this.props.context,t=e.language,a=e.changeLanguage,n="En"===t;return i.a.createElement("div",{className:"language-container"},i.a.createElement("p",{className:n?"selected-language":"",onClick:function(){return!n&&a("En")}},"En"),i.a.createElement("p",null,"-"),i.a.createElement("p",{className:n?"":"selected-language",onClick:function(){return n&&a("It")}},"It"))}},{key:"render",value:function(){var e=this.props.context.setRenderInformation;return i.a.createElement("div",{className:"menu"},i.a.createElement("img",{onClick:e,src:h.a,className:"info-menu"}),i.a.createElement("p",{onClick:e},"Cristian Maschio"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#professional"},"Professional")),i.a.createElement("li",null,i.a.createElement("a",{href:"#education"},"Education")),i.a.createElement("li",null,i.a.createElement("a",{href:"#passions"},"Passions")),i.a.createElement("li",null,i.a.createElement("a",{href:"#personal-experiences"},"Personal experiences")))," ",this.renderLanguageSelector())}}]),t}(n.PureComponent),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.Consumer,null,function(e){return i.a.createElement(f,{context:e})})}}]),t}(n.PureComponent),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"intro"},i.a.createElement("h1",null,"Cristian Maschio"),i.a.createElement("h2",null,"{Software Developer}")),i.a.createElement(v,null),i.a.createElement("div",{className:"paragraphs"},i.a.createElement(d.Consumer,null,function(e){var t=e.language;return a(83)("./".concat(t,"-paragraphs.json")).paragraphs.map(function(e,t){return i.a.createElement(u,{id:e.id,key:t,index:t,title:e.title,image:e.image,sections:e.sections,moreSections:e.more})})})))}}]),t}(n.PureComponent),b=(a(86),a(18)),C=a.n(b),y=(a(87),a(62)),k=a.n(y),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.size,t=e+e/20;return i.a.createElement("div",{className:"image-container"},i.a.createElement("div",{className:"image-background-animation",style:{height:t,width:t}}),i.a.createElement("img",{className:"image-profile",alt:"profile",src:k.a,style:{height:e,width:e}}))}}]),t}(n.PureComponent),O=[{key:"Name",text:"Cristian"},{key:"Surname",text:"Maschio"},{key:"Birthday",text:"05/31/1994"},{key:"Nationality",text:"Italy"}],N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderContent=function(e){return i.a.createElement("div",null,e.map(function(e){return i.a.createElement("div",{key:e.key,className:"menuContent"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"menuContentContainer"},i.a.createElement("p",null,e.key,":"),i.a.createElement("p",null,e.text)))}))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.context,t=e.setRenderInformation,a=e.headerClass;return i.a.createElement("header",{className:a},i.a.createElement("div",{onClick:function(){return t(!1)},className:"close"}),i.a.createElement("div",{className:"header-blue"}),i.a.createElement("div",{className:"header-information"},i.a.createElement(w,{size:200}),i.a.createElement("div",{className:"menuContainer"},i.a.createElement("div",{className:"line"}),i.a.createElement("h2",null,"Personal"),this.renderContent(O)),i.a.createElement("div",{className:"menuContainer"},i.a.createElement("div",{className:"line"}),i.a.createElement("h2",null,"Contacts"),i.a.createElement("div",{className:"menuContent"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"menuContentContainer"},i.a.createElement("a",{href:"tel:345-273-6368",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(C.a,{type:"phone"})),i.a.createElement("a",{href:"mailto:cristianmaschio@hotmail.it",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(C.a,{type:"mail"})),i.a.createElement("a",{href:"https://github.com/CristianMaschio",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(C.a,{type:"github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/cristian-maschio-37004a146",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(C.a,{type:"linkedin"}))))),i.a.createElement("div",{className:"eu-regolation"},"I authorize the processing of my personal data pursuant to Legislative Decree 196/03 and the General Data Protection Regulation (EU / 2016/679).")))}}]),t}(n.PureComponent),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.Consumer,null,function(e){return i.a.createElement(N,{context:e})})}}]),t}(n.PureComponent),P=(a(144),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"tel:345-273-6368",target:"_blank",rel:"noopener noreferrer"},"+39 3452736368")),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:cristianmaschio@hotmail.it",target:"_blank",rel:"noopener noreferrer"},"CristianMaschio@hotmail.it")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/cristian-maschio-37004a146",target:"_blank",rel:"noopener noreferrer"},"https://www.linkedin.com/in/cristian-maschio-37004a146")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/CristianMaschio",target:"_blank",rel:"noopener noreferrer"},"https://github.com/CristianMaschio")),i.a.createElement("li",null,"I authorize the processing of my personal data pursuant to Legislative Decree 196/03 and the General Data Protection Regulation (EU / 2016/679).")))}}]),t}(n.PureComponent)),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={headerClass:"",language:"En"},a.setRenderInformation=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a.setState({headerClass:e?"open-header":""})},a.changeLanguage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"En";a.setState({language:e})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.headerClass,a=e.language;return i.a.createElement(d.Provider,{value:{setRenderInformation:this.setRenderInformation,headerClass:t,language:a,changeLanguage:this.changeLanguage}},this.props.children)}}]),t}(n.Component),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(S,null,i.a.createElement(j,null),i.a.createElement(E,null),i.a.createElement(P,null))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){var n={"./education.png":78,"./experiences.png":79,"./passions.png":80,"./work.png":81};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=42},61:function(e,t){e.exports="data:image/png;base64,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"},62:function(e,t,a){e.exports=a.p+"static/media/imageProfile.9194db0c.jpg"},67:function(e,t,a){e.exports=a(145)},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/education.6fd6dae4.png"},79:function(e,t,a){e.exports=a.p+"static/media/experiences.fecea210.png"},80:function(e,t,a){e.exports=a.p+"static/media/passions.2f9a1339.png"},81:function(e,t,a){e.exports=a.p+"static/media/work.a1edc6c2.png"},82:function(e,t,a){},83:function(e,t,a){var n={"./En-paragraphs.json":84,"./It-paragraphs.json":85};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=83},84:function(e){e.exports={paragraphs:[{id:"professional",title:"Professional",image:"work.png",sections:[{date:"10/01/2018 - 04/02/2019",title:"Full Stack Developer",description:"Worked principally with React-Native, ReactJS and AWS. And worked in small tasks with Swift.",detail:{image:"",description:""}}]},{id:"education",title:"Education",image:"education.png",sections:[{date:"2015 - Today",title:"University of Padua - Data Science",description:"I am currently a student and i miss the last 3 exams.",detail:{image:"",description:""}},{date:"2008 - 2015",title:"Commercial services",description:"Commercial vocational institute Carlo Rosselli, Castelfranco Veneto (Italy).",detail:{image:"",description:""}}],more:[]},{id:"passions",title:"Passions",image:"passions.png",sections:[{date:"-",title:"Programming",description:"I love programming, thinking and using my mind to create more and more magic, clean and especially performed code. I like working with innovative technologies, mainly with web and mobile application. Currently i use a lot React and React-Native.",detail:{image:"",description:""}},{date:"-",title:"Vegetable garden and aquariums",description:"These two passions of mine allow me to get my hands dirty, free my mind and appreciate how much nature can give us.",detail:{image:"",description:""}}]},{id:"personal-experiences",title:"Personal experiences",image:"experiences.png",sections:[{date:"03/21/2019",title:"{Codemotion} Rome",description:"(Partecipated) Codemotion is the biggest tech conference in Italy and one of the most important in Europe.",detail:{image:"",description:""}},{date:"11/29/2018",title:"{Codemotion} Milan",description:"(Partecipated) Codemotion is the biggest tech conference in Italy and one of the most important in Europe.",detail:{image:"",description:""}},{date:"05/26/2018",title:"Hackathon",description:"First prize winning with a web application developed with the use of the <b>React</b> library and the <b>Google Maps API.</b>",detail:{image:"",description:""}},{date:"2018",title:"University project",description:"Implementation of a university project using the following <b>NodeJS, MongoDB and ReactJS technologies.</b> Mainly I worked in front end with the React library.",detail:{image:"",description:""}},{date:"2018",title:"University project",description:"Realization of a project on voluntary request for the <b>Mobile Programming and Multimedia course</b>, which allowed me to create a mobile application developed with the <b>React Native</b> framework.",detail:{image:"",description:""}}],more:[{date:"11/24/2018",title:"DevFest Veneto - GDG Venice",description:"I partecipated to the DevFest organized by Google Developers Group Venice.",detail:{image:"",description:""}},{date:"2018 - Today",title:"Coding Gym - Programmers in Padua",description:'I partecipated to some "4-5" Coding Gym. Coding Gym is an international format of programming laboratories open to any language and developed for continuous improvement.',detail:{image:"",description:""}},{date:"2018 - Today",title:"Talks - Programmers in Padua",description:"I partecipated to some talks. Programmers in Padua is a little community, who work and passionate about programming, new technologies and startups. We meet once a month in an open and informal environment, where the participants propose themselves for the talks.",detail:{image:"",description:""}}]}]}},85:function(e){e.exports={paragraphs:[{id:"professional",title:"Esperienze professionali",image:"work.png",sections:[{date:"01/10/2018 - 02/04/2019",title:"Full Stack Developer",description:"In questo periodo ho lavorato principalmente con le seguenti tecnologie React-Native, ReactJS e con i servizi AWS. Ed ho realizzato piccoli task utilizzando Swift.",detail:{image:"",description:""}}]},{id:"education",title:"Formazione",image:"education.png",sections:[{date:"2015 - Today",title:"Universit\xe0 di Padova - Infomatica",description:"Attualmente mi mancano ancora gli ultimi 3 esami.",detail:{image:"",description:""}},{date:"2008 - 2015",title:"Servizi commerciali",description:"Istituto professionale dei servizi commerciali Carlo Rosselli, Castelfranco Veneto (Italy).",detail:{image:"",description:""}}],more:[]},{id:"passions",title:"Passioni",image:"passions.png",sections:[{date:"-",title:"Programmare",description:"Mi piace programmare, creando codice pulito e performante. Mi piace lavorare con tecnologie innovative, principalmente con tecnologie web e mobile. Attualmente sono preso da React e React-Native.",detail:{image:"",description:""}},{date:"-",title:"Orto e acquari",description:"Queste due mie passioni mi permettono di sporcarmi le mani, liberarmi la mente e apprezzare ci\xf2 che ha da offrirci la natura.",detail:{image:"",description:""}}]},{id:"personal-experiences",title:"Esperienze personali",image:"experiences.png",sections:[{date:"21/03/2019",title:"{Codemotion} Roma",description:"(Presente) Codemotion \xe8 la pi\xf9 grande conferenza tecnologica in Italia e una delle pi\xf9 importanti in Europa.",detail:{image:"",description:""}},{date:"29/11/2018",title:"{Codemotion} Milan",description:"(Presente) Codemotion \xe8 la pi\xf9 grande conferenza tecnologica in Italia e una delle pi\xf9 importanti in Europa.",detail:{image:"",description:""}},{date:"26/05/2018",title:"Hackathon",description:"Vinto il primo premi all'hackathon di Castelfranco Veneto grazie alla realizzazione di un applicazione web grazie l'utilizzo della libreria <b>React</b> e le <b>Google Maps API.</b>",detail:{image:"",description:""}},{date:"2018",title:"Progetto universitario",description:"Realizzazione di un applicazione web utilizzando le seguenti tecnologie <b>NodeJS, MongoDB and ReactJS.</b> In questo progetto ho lavorato principalmente nel lato front-end utilizzando la libreria di React.",detail:{image:"",description:""}},{date:"2018",title:"Progetto universitario",description:"Realizzazione di un progetto universitario su mia libera scelta nel corso di <b>Mobile Programming and Multimedia</b>, il quale mi ha permesso di sviluppare un app con l'utilizzo di <b>React Native</b>.",detail:{image:"",description:""}}],more:[{date:"24/11/2018",title:"DevFest Veneto - GDG Venezia",description:"Ho partecipato al DevFest realizzato da Google Developers Group Venice.",detail:{image:"",description:""}},{date:"2018 - Today",title:"Coding Gym - Programmers in Padua",description:'Ho partecipato ad alcuni "4-5" Coding Gym. Coding Gym \xe8 un format internazionale di programmazione il quale serve per migliorarsi e coltivare le proprie passioni.',detail:{image:"",description:""}},{date:"2018 - Today",title:"Talks - Programmers in Padua",description:"Ho partecipato ad alcuni talks. Programmers in Padua \xe8 una piccola comunit\xe0 di programmatori, che lavorano e sono appasionati alla programmazione. Ci incontriamo una volta al mese in un ambiente aperto e informale, dove sono i parteciparti a proporsi per i talk.",detail:{image:"",description:""}}]}]}},86:function(e,t,a){},87:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.133e4912.chunk.js.map