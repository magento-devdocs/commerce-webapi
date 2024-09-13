"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6348],{86526:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return p}});var t=n(58168),i=n(80045),l=(n(88763),n(15680)),m=n(83407);const r=["components"],d={},o={_frontmatter:d},s=m.A;function p(e){let{components:a}=e,n=(0,i.A)(e,r);return(0,l.mdx)(s,(0,t.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"isemailavailable-query"},"isEmailAvailable query"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"isEmailAvailable")," query checks whether the specified email has already been used to create a customer account. As of Commerce 2.4.7, by default the query always returns a value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"true")," for all email addresses. You can change this behavior by setting the ",(0,l.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,l.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,l.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,l.mdx)("strong",{parentName:"p"},"Checkout")," > ",(0,l.mdx)("strong",{parentName:"p"},"Enable Guest Checkout Login")," field in the Admin to ",(0,l.mdx)("strong",{parentName:"p"},"Yes"),". However, doing this can expose customer information to unauthenticated users."),(0,l.mdx)("p",null,"When guest checkout logins are enabled, or in versions prior to 2.4.7, a value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"true")," indicates the email address is available, and the customer can use the email address to create an account. The value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"false")," indicates the email address is not available, and the customer cannot use the email address to create an account."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"{isEmailAvailable (email): {IsEmailAvailableOutput}}")),(0,l.mdx)("h2",{id:"reference"},"Reference"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isEmailAvailable"},(0,l.mdx)("inlineCode",{parentName:"a"},"isEmailAvailable"))," reference provides detailed information about the types and fields defined in this query."),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,"The following example checks whether the email address ",(0,l.mdx)("inlineCode",{parentName:"p"},"customer@example.com")," is available to create a customer account."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  isEmailAvailable(email: "customer@example.com") {\n    is_email_available\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "isEmailAvailable": {\n      "is_email_available": true\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"errors"},"Errors"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Error"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Email is invalid")),(0,l.mdx)("td",{parentName:"tr",align:null},"The given email-id is not in a proper format.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Field isEmailAvailable.email of required type String! was not provided")),(0,l.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,l.mdx)("inlineCode",{parentName:"td"},"isEmailAvailable.email")," argument is empty.")))),(0,l.mdx)("h2",{id:"related-topics"},"Related topics"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"customer.md"},"customer Query")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/backward-incompatible-changes/highlights/#isemailavailable-api"},"Backward incompatible change of isEmailAvailable query")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-is-email-available-md-d7e975dff30de2990588.js.map