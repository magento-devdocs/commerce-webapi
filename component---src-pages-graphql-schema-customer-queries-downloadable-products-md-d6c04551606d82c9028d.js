"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5878],{43618:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var d=t(58168),o=t(80045),a=(t(88763),t(15680)),r=t(83407);const l=["components"],m={},s={_frontmatter:m},i=r.A;function u(e){let{components:n}=e,t=(0,o.A)(e,l);return(0,a.mdx)(i,(0,d.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"customerdownloadableproducts-query"},"customerDownloadableProducts query"),(0,a.mdx)("p",null,"Use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"customerDownloadableProducts")," query to retrieve the list of purchased downloadable products for the logged-in customer."),(0,a.mdx)("h2",{id:"syntax"},"Syntax"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"{customerDownloadableProducts: {CustomerDownloadableProducts}}")),(0,a.mdx)("h2",{id:"reference"},"Reference"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerDownloadableProducts"},(0,a.mdx)("inlineCode",{parentName:"a"},"customerDownloadableProducts"))," reference provides detailed information about the types and fields defined in this query."),(0,a.mdx)("h2",{id:"example-usage"},"Example usage"),(0,a.mdx)("p",null,"The following example returns the list of purchased downloadable products for the logged-in customer."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Request:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customerDownloadableProducts {\n    items {\n      date\n      download_url\n      order_increment_id\n      remaining_downloads\n      status\n    }\n  }\n}\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Response:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customerDownloadableProducts": {\n      "items": [\n        {\n          "date": "2019-03-04 20:48:32",\n          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NTcwMTEwMCAxNTUxNzMyNTEyMTExNTE%2C/",\n          "order_increment_id": "000000004",\n          "remaining_downloads": "Unlimited",\n          "status": "pending"\n        },\n        {\n          "date": "2019-03-04 20:48:32",\n          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NzM0OTkwMCAxNTUxNzMyNTEyMjEyNTA%2C/",\n          "order_increment_id": "000000004",\n          "remaining_downloads": "Unlimited",\n          "status": "pending"\n        }\n      ]\n    }\n  }\n}\n')),(0,a.mdx)("h2",{id:"errors"},"Errors"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Error"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,a.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,a.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-downloadable-products-md-d6c04551606d82c9028d.js.map