(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{25:function(e,s,t){},44:function(e,s,t){},46:function(e,s,t){"use strict";t.r(s);var a=t(2),n=t.n(a),r=t(13),c=t.n(r),i=t(4),o=t.n(i),l=t(14),m=t(15),d=t(16),j=t(19),u=t(18),v=(t(25),t(17)),h=t.n(v),p=(t(44),t(0));var b=function(e){var s=e.year,t=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{className:"movie__img",src:n,title:t,alt:t}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:t}),Object(p.jsx)("ul",{className:"genres",children:r.map((function(e,s){return Object(p.jsx)("li",{className:"genres__genre",children:e},s)}))}),Object(p.jsx)("h5",{className:"movie__year",children:s}),Object(p.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140)," ..."]})]})]})},_=function(e){Object(j.a)(t,e);var s=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function s(){var t,a;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,h()({url:"https://yts.mx/api/v2/list_movies.json?sort_by=rating",method:"get"});case 2:t=s.sent,a=t.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return s.stop()}}),s)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;return Object(p.jsx)("div",{className:"container",children:s?Object(p.jsxs)("div",{className:"loader",children:[Object(p.jsx)("span",{className:"loader__text",children:"Loading"}),Object(p.jsx)("span",{className:"loader__dot",children:"."}),Object(p.jsx)("span",{className:"loader__dot",children:"."}),Object(p.jsx)("span",{className:"loader__dot",children:"."})]}):Object(p.jsx)("div",{className:"movies",children:t.map((function(e){return Object(p.jsx)(b,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),t}(n.a.Component);c.a.render(Object(p.jsx)(_,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.b1be2ed5.chunk.js.map