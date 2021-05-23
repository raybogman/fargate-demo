/*! @version 0.0.1-36c068ad0617cd8abe64 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IYh2:function(e,t,a){(t=e.exports=a("JPst")(!1)).i(a("ysJs"),""),t.push([e.i,".searchPage-root-pgQ {\n    padding: 1rem;\n}\n\n.searchPage-categoryTop-2EO {\n    align-items: center;\n    color: rgb(var(--venia-global-color-text-alt));\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.searchPage-noResult-Zxz {\n    display: flex;\n}\n\n.searchPage-headerButtons-v21 {\n    display: flex;\n    flex-basis: 100%;\n    justify-content: center;\n    margin: 1rem 0;\n}\n\n.searchPage-heading-1kN {\n    line-height: var(--venia-global-typography-heading-lineHeight);\n    margin: 2.5rem 0 1rem;\n    max-width: 75vw;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.searchPage-headingHighlight-12s {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.searchPage-filterButton-1D5 {\n    min-width: 6.25rem;\n}\n\n.searchPage-sortContainer-jkh {\n    font-size: 0.875rem;\n}\n\n.searchPage-sortText-3Ha {\n    font-weight: 600;\n}\n",""]),t.locals={root:"searchPage-root-pgQ",categoryTop:"searchPage-categoryTop-2EO",noResult:"searchPage-noResult-Zxz",headerButtons:"searchPage-headerButtons-v21",heading:"searchPage-heading-1kN",headingHighlight:"searchPage-headingHighlight-12s",filterButton:"searchPage-filterButton-1D5 "+a("ysJs").locals.root_lowPriority,sortContainer:"searchPage-sortContainer-jkh",sortText:"searchPage-sortText-3Ha"}},N6ZK:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return U})
var n,r,s,c,o=a("J4zp"),i=a.n(o),l=a("q1tI"),u=a.n(l),g=a("dDsW"),h=a("kriW"),d=a("17x9"),p=a("lSNA"),f=a.n(p),m=a("RIqP"),P=a.n(m),y=a("VX74"),b=a("Ty5D"),v=a("y1Xp"),j=a("OlZo"),E=a("Cszt"),O=a("PKba"),S=a("IOPv"),w=a("Unmo"),x=a("+wQL"),T=a("VkAN"),N=a.n(T),_=Object(y.gql)(n||(n=N()(["\n    query getPageSize {\n        storeConfig {\n            id\n            grid_per_page\n        }\n    }\n"]))),C=Object(y.gql)(r||(r=N()(["\n    query getProductFiltersBySearch($search: String!) {\n        products(search: $search) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n"]))),z=Object(y.gql)(s||(s=N()(["\n    query ProductSearch(\n        $currentPage: Int = 1\n        $inputText: String!\n        $pageSize: Int = 6\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        products(\n            currentPage: $currentPage\n            pageSize: $pageSize\n            search: $inputText\n            filter: $filters\n            sort: $sort\n        ) {\n            items {\n                id\n                name\n                small_image {\n                    url\n                }\n                url_key\n                url_suffix\n                price {\n                    regularPrice {\n                        amount {\n                            value\n                            currency\n                        }\n                    }\n                }\n            }\n            page_info {\n                total_pages\n            }\n            total_count\n        }\n    }\n"]))),F={getFilterInputsQuery:Object(y.gql)(c||(c=N()(['\n    query GetFilterInputsForSearch {\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n']))),getPageSize:_,getProductFiltersBySearchQuery:C,productSearchQuery:z},I=a("C0us"),k=a("vh/y"),Q=a("DUu4"),R=a("tuiD"),B=a("ACyH"),D=a("LboF"),M=a.n(D),$=a("IYh2"),q=a.n($),A={injectType:"singletonStyleTag",insert:"head",singleton:!0},H=(M()(q.a,A),q.a.locals||{}),L=u.a.lazy(function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"dzHx"))}),J=function SearchPage(e){var t,a=Object(v.a)(H,e.classes),n=function useSearchPage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(v.a)(F,e.operations),a=t.getFilterInputsQuery,n=t.getPageSize,r=t.getProductFiltersBySearchQuery,s=t.productSearchQuery,c=Object(y.useQuery)(n,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}).data,o=c&&c.storeConfig.grid_per_page,u=Object(w.a)(),g=i()(u,1)[0],h=g.sortAttribute,d=g.sortDirection,p=Object(l.useRef)(g),m=Object(b.h)(),T=m.search,N=Object(l.useRef)(T),_=Object(E.a)(),C=i()(_,2),z=C[0],I=C[1],k=z.currentPage,Q=z.totalPages,R=I.setCurrentPage,B=I.setTotalPages,D=Object(j.b)(),M=i()(D,2)[1],$=M.toggleDrawer,q=M.actions.setPageLoading,A=Object(S.a)("query",m),H=Object(l.useMemo)(function(){var e=Object(x.c)(T)
if(0===e.size)return null
var t=e.get("category_id")
return t?P()(t).map(function(e){return e.split(",")[0]}).join(", "):null},[T]),L=Object(l.useCallback)(function(){$("filter")},[$]),J=Object(y.useQuery)(a),U=J.called,Z=J.data,W=J.loading,K=Object(l.useMemo)(function(){var e=new Map
return Z&&Z.__type.inputFields.forEach(function(t){var a=t.name,n=t.type
e.set(a,n.name)}),e},[Z]),V={currentPage:k,setPage:R,totalPages:Q},X=Object(y.useLazyQuery)(s,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),Y=i()(X,2),G=Y[0],ee=Y[1],te=ee.called,ae=ee.loading,ne=ee.error,re=ee.data,se=!!re&&ae
Object(l.useEffect)(function(){q(se)},[se,q]),Object(l.useEffect)(function(){if(K.size&&o){var e=Object(x.c)(T),t={}
e.forEach(function(e,a){t[a]=Object(x.b)(e,K.get(a))}),G({variables:{currentPage:Number(k),filters:t,inputText:A,pageSize:Number(o),sort:f()({},h,d)}})}},[k,K,A,G,o,T,d,h]),Object(l.useEffect)(function(){var e=re?re.products.page_info.total_pages:null
return B(e),function(){B(null)}},[re,B]),Object(l.useEffect)(function(){var e=new URLSearchParams(N.current),t=new URLSearchParams(T)
e.delete("page"),t.delete("page"),e.toString()===t.toString()&&p.current.sortAttribute.toString()===g.sortAttribute.toString()&&p.current.sortDirection.toString()===g.sortDirection.toString()||(R(1),N.current=T,p.current=g)},[g,T,R])
var ce=Object(y.useLazyQuery)(r,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),oe=i()(ce,2),ie=oe[0],le=oe[1].data
Object(l.useEffect)(function(){A&&ie({variables:{search:A}})},[ie,A,T])
var ue=le?le.products.aggregations:null,ge=U&&!te||ae||W
return Object(O.a)(k),{data:re,error:ne,filters:ue,loading:ge,openDrawer:L,pageControl:V,searchCategory:H,searchTerm:A,sortProps:u}}(),r=n.data,s=n.error,c=n.filters,o=n.loading,d=n.openDrawer,p=n.pageControl,m=n.searchCategory,T=n.searchTerm,N=n.sortProps,_=Object(g.a)().formatMessage,C=i()(N,1)[0]
if(!r){if(o)return Q.a
if(s)return u.a.createElement("div",{className:a.noResult},u.a.createElement(h.a,{id:"searchPage.noResult",defaultMessage:"No results found. The search term may be missing or invalid."}))}t=0===r.products.items.length?u.a.createElement("div",{className:a.noResult},u.a.createElement(h.a,{id:"searchPage.noResultImportant",defaultMessage:"No results found!"})):u.a.createElement(l.Fragment,null,u.a.createElement("section",{className:a.gallery},u.a.createElement(k.a,{items:r.products.items})),u.a.createElement("section",{className:a.pagination},u.a.createElement(I.a,{pageControl:p})))
var z=r.products.total_count||0,D=c&&c.length?u.a.createElement(B.a,{priority:"low",classes:{root_lowPriority:a.filterButton},onClick:d,type:"button"},u.a.createElement(h.a,{id:"searchPage.filterButton",defaultMessage:"Filter"})):null,M=c&&c.length?u.a.createElement(L,{filters:c}):null,$=z?u.a.createElement(R.a,{sortProps:N}):null,q=z?u.a.createElement("span",{className:a.sortContainer},u.a.createElement(h.a,{id:"searchPage.sortContainer",defaultMessage:"Items sorted by "}),u.a.createElement("span",{className:a.sortText},u.a.createElement(h.a,{id:C.sortId,defaultMessage:C.sortText}))):null,A=T?u.a.createElement(h.a,{id:"searchPage.searchTerm",values:{highlight:function highlight(e){return u.a.createElement("span",{className:a.headingHighlight},e)},category:m,term:T},defaultMessage:"Showing results:"}):u.a.createElement(h.a,{id:"searchPage.searchTermEmpty",defaultMessage:"Showing all results:"})
return u.a.createElement("article",{className:a.root},u.a.createElement("div",{className:a.categoryTop},u.a.createElement("span",{className:a.totalPages},_({id:"searchPage.totalPages",defaultMessage:"items"},{totalCount:z})),u.a.createElement("div",{className:a.headerButtons},D,$),q),u.a.createElement("div",{className:a.heading},A),t,u.a.createElement(l.Suspense,{fallback:null},M))},U=J
J.propTypes={classes:Object(d.shape)({noResult:d.string,root:d.string,totalPages:d.string})}}}])