"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1722],{32984:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return s}});var m=n(58168),i=n(80045),l=(n(88763),n(15680)),t=n(83407);const r=["components"],d={},o={_frontmatter:d},p=t.A;function s(e){let{components:a}=e,n=(0,i.A)(e,r);return(0,l.mdx)(p,(0,m.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"iscompanyadminemailavailable-query"},"isCompanyAdminEmailAvailable query"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"isCompanyAdminEmailAvailable")," query checks whether the specified email can be used to create a company administrator account. If the email matches an existing customer or another company administrator account, the query returns a ",(0,l.mdx)("inlineCode",{parentName:"p"},"false")," value. A value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"true")," indicates the email address can be used to create a company administrator account."),(0,l.mdx)("p",null,"This query requires a valid ",(0,l.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"isCompanyAdminEmailAvailable ( email String! ) IsCompanyAdminEmailAvailableOutput")),(0,l.mdx)("h2",{id:"reference"},"Reference"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyAdminEmailAvailable"},(0,l.mdx)("inlineCode",{parentName:"a"},"isCompanyAdminEmailAvailable"))," reference provides detailed information about the types and fields defined in this query."),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,"The following example checks whether the email address ",(0,l.mdx)("inlineCode",{parentName:"p"},"roni_cost@example.com")," can be used to create a company administrator account."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'query{\n  isCompanyAdminEmailAvailable(email: "roni_cost@example.com"){\n    is_email_available\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "isCompanyAdminEmailAvailable": {\n      "is_email_available": false\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"related-topics"},"Related topics"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"is-company-email-available.md"},"isCompanyEmailAvailable query")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"is-company-user-email-available.md"},"isCompanyUserEmailAvailable query"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-queries-is-company-admin-email-available-md-896f00102cb8ca5218d0.js.map