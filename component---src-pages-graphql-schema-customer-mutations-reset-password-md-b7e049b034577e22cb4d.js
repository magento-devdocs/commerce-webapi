"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5316],{14894:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return x}});var n=a(58168),r=a(80045),d=(a(88763),a(15680)),m=a(83407);const s=["components"],o={},l=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var i;const p={_frontmatter:o},u=m.A;function x(e){let{components:t}=e,a=(0,r.A)(e,s);return(0,d.mdx)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"resetpassword-mutation"},"resetPassword mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"resetPassword")," mutation resets customer password using a reset password token and the customer's email address. Use it to set a new password for the registered customer after calling the ",(0,d.mdx)("a",{parentName:"p",href:"request-password-reset-email.md"},"requestPasswordResetEmail")," mutation."),(0,d.mdx)("p",null,"The new password must satisfy the password policies set for the store."),(0,d.mdx)("p",null,"The mutation returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," if the request was successful. Otherwise, it returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,d.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The reset password token value can also be found in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"customer_entity"),".",(0,d.mdx)("inlineCode",{parentName:"p"},"rp_token")," database table."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"mutation: {resetPassword(email: String!, resetPasswordToken: String!, newPassword: String!): Boolean}")),(0,d.mdx)("h2",{id:"reference"},"Reference"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-resetPassword"},(0,d.mdx)("inlineCode",{parentName:"a"},"resetPassword"))," reference provides detailed information about the types and fields defined in this mutation."),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following call sets a new customer password."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  resetPassword(\n    email: "roni_cost@example.com",\n    resetPasswordToken: "gh80pkjGdsPyiXc0sUUXswX1uGN7crUr",\n    newPassword: "new_password"\n  )\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "resetPassword": true\n  }\n}\n')),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Cannot set the customer's password")),(0,d.mdx)("td",{parentName:"tr",align:null},"A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"newPassword must be specified")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"newPassword")," argument is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"resetPasswordToken must be specified")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"resetPasswordToken")," argument is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"The account is locked")),(0,d.mdx)("td",{parentName:"tr",align:null},"You cannot modify a locked customer account.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"The email address has an invalid format.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"You must specify an email address.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"email")," argument is empty.")))),(0,d.mdx)("h2",{id:"related-topics"},"Related topics"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"request-password-reset-email.md"},"requestPasswordResetEmail mutation"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-reset-password-md-b7e049b034577e22cb4d.js.map