(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,a,t){e.exports=t(323)},140:function(e,a,t){},320:function(e,a,t){},323:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),l=t.n(i),o=(t(140),t(23)),c=t(24),s=t(27),u=t(25),m=t(26),p=t(327),d=t(326),h=t(325),g=t(18),f=t(28),b=t(122),E=t.n(b),v=t(32),y=t.n(v),k=t(45),w=t.n(k),j=t(30),O=t.n(j),C=t(123),S=t.n(C),x=t(37),N=t.n(x),F=t(29),T=t.n(F),L=t(16),B=t.n(L),I=t(5),R=t.n(I),D=function(e,a,t){var n="GET"===a?"data":"body";return fetch(e,Object(f.a)({method:a,headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":function(e){if(document.cookie.length>0){var a=document.cookie.indexOf(e+"=");if(-1!==a){a=a+e.length+1;var t=document.cookie.indexOf(";",a);return-1===t&&(t=document.cookie.length),unescape(document.cookie.substring(a,t))}}return""}("csrftoken")},credentials:"include"},n,JSON.stringify(t))).then(function(e){return e.json()})},M=t(134),P=Object(M.a)(),A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={username:"",password:"",errors:{}},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.submitForm=t.submitForm.bind(Object(g.a)(Object(g.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"submitForm",value:function(e){e.preventDefault();var a=this.state,t=a.username,n=a.password,r=this;D("/login/","POST",{username:t,password:n}).then(function(e){e.success?(r.setState({errors:{}}),P.push("/survey")):r.setState({errors:e.errors})})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.errors,i=this.props.classes,l=n.username&&n.username[0],o=n.password&&n.password[0];return r.a.createElement("main",{className:i.main},r.a.createElement(w.a,null),r.a.createElement(T.a,{className:i.paper},r.a.createElement(E.a,{className:i.avatar},r.a.createElement(S.a,null)),r.a.createElement(B.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:i.form,onSubmit:this.submitForm},r.a.createElement(O.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{required:!0,id:"username",name:"username",label:"Username",value:a,onChange:this.handleChange,error:l,helperText:l})),r.a.createElement(O.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{required:!0,id:"password",type:"password",name:"password",label:"Password",value:t,onChange:this.handleChange,error:o,helperText:o})),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit},"Sign in"))))}}]),a}(n.Component),q=R()(function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(A),W=t(124),G=t.n(W),K=t(125),U=t.n(K),H=t(126),J=t.n(H),Y=t(15),z=t.n(Y);var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h6",gutterBottom:!0},"Introduction"),r.a.createElement(z.a,{container:!0,spacing:24},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(B.a,{gutterBottom:!0},"We are interested in the shapes of various objects. In this study, we will show you sets of six words. You will be asked to choose the word that you think refers to the roundest object, and the one that refers to the spikiest object, out of the six. Make your choice by clicking the appropriate button.",r.a.createElement("br",null),r.a.createElement("br",null),"There may not always be a correct answer. That\u2019s okay, just go with what you feel is the best answer.",r.a.createElement("br",null),r.a.createElement("br",null),"At times you may feel that a certain object can take on various shapes. Just make your decision based on what you think is the most common shape of that object."))))},V=t(50),X=t.n(V),Z=t(51),$=t.n(Z),_=t(80),ee=t.n(_),ae=t(79),te=t.n(ae),ne=t(44),re=t.n(ne),ie=t(62),le=t.n(ie);var oe=function(e){var a=e.data,t=e.setData,n=["Afrikaans","Albanian","Amharic","Arabic","Aramaic","Armenian","Assamese","Aymara","Azerbaijani","Balochi","Bamanankan","Bashkort (Bashkir)","Basque","Belarusan","Bengali","Bhojpuri","Bislama","Bosnian","Brahui","Bulgarian","Burmese","Cantonese","Catalan","Cebuano","Chechen","Cherokee","Croatian","Czech","Dakota","Danish","Dari","Dholuo","Dutch","English","Esperanto","Estonian","\xc9w\xe9","Finnish","French","Georgian","German","Gikuyu","Greek","Guarani","Gujarati","Haitian Creole","Hausa","Hawaiian","Hawaiian Creole","Hebrew","Hiligaynon","Hindi","Hungarian","Icelandic","Igbo","Ilocano","Indonesian (Bahasa Indonesia)","Inuit/Inupiaq","Irish Gaelic","Italian","Japanese","Jarai","Javanese","K\u2019iche\u2019","Kabyle","Kannada","Kashmiri","Kazakh","Khmer","KhoekhoeKorean","Kurdish","Kyrgyz","Lao","Latin","Latvian","Lingala","Lithuanian","Macedonian","Maithili","Malagasy","Malay (Bahasa Melayu)","Malayalam","Mandarin (Chinese)","Marathi","Mende","Mongolian","Nahuatl","Navajo","Nepali","Norwegian","Ojibwa","Oriya","Oromo","Pashto","Persian","Polish","Portuguese","Punjabi","Quechua","Romani","Romanian","Russian","Rwanda","Samoan","Sanskrit","Serbian","Shona","Sindhi","Sinhala","Slovak","Slovene","Somali","Spanish","Swahili","Swedish","Tachelhit","Tagalog","Tajiki","Tamil","Tatar","Telugu","Thai","Tibetic languages","Tigrigna","Tok Pisin","Turkish","Turkmen","Ukrainian","Urdu","Uyghur","Uzbek","Vietnamese","Warlpiri","Welsh","Wolof","Xhosa","Yakut","Yiddish","Yoruba","Yucatec","Zapotec","Zulu"];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h6",gutterBottom:!0},"Basic Information"),r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h7",gutterBottom:!0},"Please fill out all fields."),r.a.createElement("br",null)),r.a.createElement(z.a,{container:!0,spacing:24},r.a.createElement(z.a,{item:!0,xs:12,md:6},r.a.createElement(O.a,{fullWidth:!0},r.a.createElement(X.a,{htmlFor:"gender"},"Gender"),r.a.createElement($.a,{native:!0,value:a.gender,onChange:function(e){t("personalData",Object.assign(a,{gender:e.target.value}))},inputProps:{name:"gender",id:"gender"}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Other"},"Other")))),r.a.createElement(z.a,{item:!0,xs:12,md:6},r.a.createElement(N.a,{id:"age",name:"age",label:"Age (in years)",value:a.age,onChange:function(e){t("personalData",Object.assign(a,{age:e.target.value}))},type:"number",inputProps:{min:"16"},InputLabelProps:{shrink:!0},fullWidth:!0,required:!0})),r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(O.a,{fullWidth:!0},r.a.createElement(X.a,{htmlFor:"select-native-lang"},"Native Language(s)"),r.a.createElement($.a,{multiple:!0,value:a.nativeLanguages,onChange:function(e){t("personalData",Object.assign(a,{nativeLanguages:e.target.value}))},input:r.a.createElement(re.a,{id:"select-multiple-chip"}),renderValue:function(e){return r.a.createElement("div",null,e.map(function(e){return r.a.createElement(te.a,{key:e,label:e})}))}},n.map(function(e){return r.a.createElement(ee.a,{key:e,value:e},e)})),r.a.createElement(le.a,null,"Language(s) spoken natively before the age of 5"))),r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(O.a,{fullWidth:!0},r.a.createElement(X.a,{htmlFor:"select-convo-lang"},"Conversational Language(s)"),r.a.createElement($.a,{multiple:!0,value:a.convoLanguages,onChange:function(e){t("personalData",Object.assign(a,{convoLanguages:e.target.value}))},input:r.a.createElement(re.a,{id:"select-multiple-convo-chip"}),renderValue:function(e){return r.a.createElement("div",null,e.map(function(e){return r.a.createElement(te.a,{key:e,label:e})}))}},n.map(function(e){return r.a.createElement(ee.a,{key:e,value:e},e)})),r.a.createElement(le.a,null,"Language(s) spoken conversationally after the age of 5")))))},ce=t(36),se=t(21),ue=t.n(se),me=t(81),pe=t.n(me),de=t(20),he=t.n(de),ge=t(61),fe=t.n(ge),be=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.index,n=e.row,i=e.rank1,l=e.rank6,o=e.onChange1,c=e.onChange2;return console.log("WTF",i,l),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{item:!0,xs:6,style:{textAlign:"right",paddingRight:"20px"}},r.a.createElement(O.a,{component:"fieldset",className:a.formControl},r.a.createElement(fe.a,{component:"legend",style:{textAlign:"right"}},"Most round"),r.a.createElement(pe.a,{"aria-label":"Most round",name:"round",className:a.group,value:i,onChange:function(e){return o(t,e.target.value)}},r.a.createElement(he.a,{value:n.word1,control:r.a.createElement(ue.a,{color:"primary",checked:i===n.word1}),label:n.word1,labelPlacement:"start"}),r.a.createElement(he.a,{value:n.word2,control:r.a.createElement(ue.a,{color:"primary",checked:i===n.word2}),label:n.word2,labelPlacement:"start"}),r.a.createElement(he.a,{value:n.word3,control:r.a.createElement(ue.a,{color:"primary",checked:i===n.word3}),label:n.word3,labelPlacement:"start"}),r.a.createElement(he.a,{value:n.word4,control:r.a.createElement(ue.a,{color:"primary",checked:i===n.word4}),label:n.word4,labelPlacement:"start"}),r.a.createElement(he.a,{value:n.word5,control:r.a.createElement(ue.a,{color:"primary",checked:i===n.word5}),label:n.word5,labelPlacement:"start"}),r.a.createElement(he.a,{value:n.word6,control:r.a.createElement(ue.a,{color:"primary",checked:i===n.word6}),label:n.word6,labelPlacement:"start"})))),r.a.createElement(z.a,{item:!0,xs:6},r.a.createElement(O.a,{component:"fieldset",className:a.formControl},r.a.createElement(fe.a,{component:"legend"},"Most spiky"),r.a.createElement(pe.a,{"aria-label":"Most spiky",name:"spiky",className:a.group,value:l,onChange:function(e){return c(t,e.target.value)}},r.a.createElement(he.a,{value:n.word1,control:r.a.createElement(ue.a,{color:"primary",checked:l===n.word1})}),r.a.createElement(he.a,{value:n.word2,control:r.a.createElement(ue.a,{color:"primary",checked:l===n.word2})}),r.a.createElement(he.a,{value:n.word3,control:r.a.createElement(ue.a,{color:"primary",checked:l===n.word3})}),r.a.createElement(he.a,{value:n.word4,control:r.a.createElement(ue.a,{color:"primary",checked:l===n.word4})}),r.a.createElement(he.a,{value:n.word5,control:r.a.createElement(ue.a,{color:"primary",checked:l===n.word5})}),r.a.createElement(he.a,{value:n.word6,control:r.a.createElement(ue.a,{color:"primary",checked:l===n.word6})})))))}}]),a}(r.a.Component),Ee=Object(ce.withStyles)(function(e){return{}})(be),ve=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).onChange1=function(e,a){var n=t.props,r=n.data,i=n.setData,l=Object.assign(r[e],{rank1:a,responded:!1});l.rank6===a?l.rank6="":l.rank6&&(l.responded=!0),i("quads",r.map(function(a,t){return t===e?l:a}))},t.onChange2=function(e,a){var n=t.props,r=n.data,i=n.setData,l=Object.assign(r[e],{rank6:a,responded:!1});l.rank1===a?l.rank1="":l.rank1&&(l.responded=!0),i("quads",r.map(function(a,t){return t===e?l:a}))},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h6",gutterBottom:!0},"Round/Spiky"),r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h7",gutterBottom:!0},"For each group of six words, select the most round and most spiky word."),r.a.createElement("br",null)),r.a.createElement(z.a,{container:!0,spacing:0},n.map(function(a,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(z.a,{container:!0,className:t.smallMarginBottom,xs:12},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h7",gutterBottom:!0},n+1)),r.a.createElement(Ee,{index:n,row:a,onChange1:e.onChange1,onChange2:e.onChange2,rank1:a.rank1,rank6:a.rank6})))})))}}]),a}(r.a.Component),ye=Object(ce.withStyles)(function(e){return{listItem:{padding:"".concat(e.spacing.unit,"px 0")},total:{fontWeight:"700"},title:{marginTop:2*e.spacing.unit},smallMarginBottom:{marginBottom:"20px"}}})(ve),ke=["Introduction","Basic Info","Round/Spiky","Finish"],we=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={activeStep:0,personalInfo:{gender:null,age:null,nativeLanguages:[],convoLanguages:[]},quads:[]},t.handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.handleReset=function(){t.setState({activeStep:0,personalInfo:{gender:null,age:null,nativeLanguages:[],convoLanguages:[]},quads:[]})},t.handleSubmit=function(){var e=t.props.match.params.uuid,a=t.state.personalInfo,n=a.gender,r=a.age,i=a.nativeLanguages,l=a.convoLanguages,o=t.state.quads;D("/surveyResponse/","POST",{uuid:e,gender:n,age:r,nativeLanguages:i,convoLanguages:l,responses:o}).then(t.handleNext)},t.handleData=function(e,a){t.setState(Object(f.a)({},e,a))},t.getQuads=function(){var e=t.props.match.params.uuid;D("/quads/"+e,"GET",{}).then(function(e){e.success&&(e.responded?t.setState({activeStep:ke.length-1}):t.setState({quads:e.quads}))})},t.getStepContent=function(e){switch(e){case 0:return r.a.createElement(Q,null);case 1:return r.a.createElement(oe,{data:t.state.personalInfo,setData:t.handleData});case 2:return r.a.createElement(ye,{data:t.state.quads,setData:t.handleData});case 3:return r.a.createElement(Q,null);default:throw new Error("Unknown step")}},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getQuads()}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.activeStep,n=a.quads,i=a.personalInfo,l=!1;1===t?l=Object.values(i).some(function(e){return!e}):2===t&&(l=n.some(function(e){return!e.responded}));var o=t===ke.length-2?this.handleSubmit:this.handleNext;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(T.a,{className:e.paper},r.a.createElement(B.a,{component:"h1",variant:"h4",align:"center"}),r.a.createElement(G.a,{activeStep:t,className:e.stepper},ke.map(function(e){return r.a.createElement(U.a,{key:e},r.a.createElement(J.a,null,e))})),r.a.createElement(r.a.Fragment,null,t===ke.length-1?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h5",gutterBottom:!0},"Thank you for your participation.")):r.a.createElement(r.a.Fragment,null,this.getStepContent(t),r.a.createElement("div",{className:e.buttons},0!==t&&r.a.createElement(y.a,{onClick:this.handleBack,className:e.button},"Back"),r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:o,disabled:l,className:e.button},t===ke.length-2?"Finish":"Next")))))))}}]),a}(r.a.Component),je=R()(function(e){return{layout:Object(f.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(f.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),stepper:{padding:"".concat(3*e.spacing.unit,"px 0 ").concat(5*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:3*e.spacing.unit,marginLeft:e.spacing.unit}}})(we),Oe=t(132),Ce=t.n(Oe),Se=t(127),xe=t.n(Se),Ne=t(129),Fe=t.n(Ne),Te=t(52),Le=t.n(Te),Be=t(128),Ie=t.n(Be),Re=t(82),De=t.n(Re),Me=t(130),Pe=t.n(Me),Ae=t(131),qe=t.n(Ae);var We=Object(ce.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},textCenter:{textAlign:"center"},greenIcon:{color:"green"}}})(function(e){var a=e.classes,t=e.rows;return 0===t.length?r.a.createElement(T.a,{className:a.root+" "+a.textCenter},"[No Respondents Yet]"):r.a.createElement(T.a,{className:a.root},r.a.createElement(xe.a,{className:a.table},r.a.createElement(Ie.a,null,r.a.createElement(De.a,null,r.a.createElement(Le.a,null,"Survey URL"),r.a.createElement(Le.a,null,"Responded"))),r.a.createElement(Fe.a,null,t.map(function(e){return r.a.createElement(De.a,{key:e.id},r.a.createElement(Le.a,null,r.a.createElement("a",{href:"/survey/".concat(e.uuid),target:"_blank",rel:"noopener noreferrer"},"/survey/".concat(e.uuid))),r.a.createElement(Le.a,null,e.responded?r.a.createElement(Pe.a,{className:a.greenIcon}):r.a.createElement(qe.a,{color:"error"})))}))))}),Ge=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={stimuli:1,file:"",error:"",respondents:[]},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleFileChange=t.handleFileChange.bind(Object(g.a)(Object(g.a)(t))),t.submitForm=t.submitForm.bind(Object(g.a)(Object(g.a)(t))),t.validateFile=t.validateFile.bind(Object(g.a)(Object(g.a)(t))),t.fetchLatest=t.fetchLatest.bind(Object(g.a)(Object(g.a)(t))),t.fileInput=r.a.createRef(),t.fileReader=new FileReader,t.fileReader.onloadend=t.validateFile,t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchLatest()}},{key:"submitForm",value:function(e){e.preventDefault();var a=this.state.file;this.setState({error:"",loading:!0}),a?this.fileReader.readAsText(a):this.setState({error:"Must upload file",loading:!1})}},{key:"validateFile",value:function(e){var a=this.state.stimuli,t=this.fileReader.result,n=this;D("/uploadStimuli/","POST",{csv:t,stimuli:a}).then(function(e){if(e.success)n.setState({loading:!1}),n.fetchLatest();else{var a=e.errors[Object.keys(e.errors)[0]];n.setState({loading:!1,error:a})}})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleFileChange",value:function(e){var a=this.fileInput.current&&this.fileInput.current.files[0];this.setState({file:a})}},{key:"fetchLatest",value:function(){var e=this;D("/respondents/","GET",{}).then(function(a){a.success&&e.setState({respondents:a.respondents})})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.file.name||"[No file]";return r.a.createElement("main",{className:e.main},r.a.createElement(w.a,null),r.a.createElement(T.a,{className:e.paper},r.a.createElement(B.a,{component:"h1",variant:"h5"},"Survey Admin"),r.a.createElement("br",null),r.a.createElement("form",{className:e.form,onSubmit:this.submitForm},r.a.createElement("input",{accept:".csv",name:"csvFile",className:e.input,id:"button-input",multiple:!0,type:"file",hidden:!0,ref:this.fileInput,onChange:this.handleFileChange}),r.a.createElement(z.a,{container:!0,spacing:24},r.a.createElement(z.a,{item:!0,xs:5},"Upload Quads:"),r.a.createElement(z.a,{item:!0,xs:7},r.a.createElement("label",{htmlFor:"button-input"},r.a.createElement(y.a,{variant:"raised",component:"span",color:"primary",className:e.button},"Upload")," "+a)),r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(N.a,{id:"stimuli",name:"stimuli",label:"Number of Stimuli per Subject",value:this.state.stimuli,onChange:this.handleChange,type:"number",inputProps:{min:"1"},InputLabelProps:{shrink:!0},margin:"normal",error:this.state.error.length>0,helperText:this.state.error,fullWidth:!0})),r.a.createElement(z.a,{item:!0,xs:12,className:e.middle},r.a.createElement(y.a,{variant:"contained",color:"primary",type:"submit",onClick:this.handleNext,className:e.button,disabled:this.state.loading},this.state.loading?r.a.createElement(Ce.a,null):"Generate")),r.a.createElement(z.a,{item:!0,xs:12,className:e.middle},r.a.createElement(We,{rows:this.state.respondents})),r.a.createElement(z.a,{item:!0,xs:12,className:e.middle},r.a.createElement(y.a,{variant:"contained",color:"primary",type:"submit",className:e.button,href:"/exportSurvey/"},"Export Survey Responses"))))))}}]),a}(n.Component),Ke=R()(function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},middle:{display:"flex",justifyContent:"center"}}})(Ge),Ue=(t(320),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{history:P},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:q}),r.a.createElement(h.a,{path:"/login",component:q}),r.a.createElement(h.a,{exact:!0,path:"/survey",component:Ke}),r.a.createElement(h.a,{path:"/survey/:uuid",component:je})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,2,1]]]);
//# sourceMappingURL=main.02db2b9d.chunk.js.map