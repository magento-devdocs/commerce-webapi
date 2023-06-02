"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[954],{89662:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return u},default:function(){return s}});var a=n(87462),m=n(63366),r=(n(15007),n(64983)),o=n(91515),d=["components"],u={},i={_frontmatter:u},l=o.Z;function s(e){var t=e.components,n=(0,m.Z)(e,d);return(0,r.mdx)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"generatecustomertokenasadmin-mutation"},"generateCustomerTokenAsAdmin mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"generateCustomerTokenAsAdmin")," mutation generates a new customer token as an admin so that an administrator can perform remote shopping assistance on behalf of the customer. For example, if a customer has asked for help adding a product into their cart, you would specify the token returned by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"generateCustomerTokenAsAdmin")," mutation in the header of your ",(0,r.mdx)("a",{parentName:"p",href:"../../cart/mutations/add-products.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"addProductsToCart")," mutation"),"."),(0,r.mdx)("p",null,"To run this mutation, the customer must have enabled the ",(0,r.mdx)("strong",{parentName:"p"},"Allow remote shopping assistance")," feature. You can specify the ",(0,r.mdx)("inlineCode",{parentName:"p"},"allow_remote_shopping_assistance")," attribute in a ",(0,r.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"customer")," query")," to determine whether the customer enabled this feature."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {generateCustomerTokenAsAdmin(input: GenerateCustomerTokenAsAdminInput!) {GenerateCustomerTokenAsAdminOutput}}\n")),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following call creates a new customer token."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation{\n  generateCustomerTokenAsAdmin(input: {\n    customer_email: "customer1@mail.com"\n  }){\n    customer_token\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "generateCustomerTokenAsAdmin": {\n      "customer_token": "cr0717abzoagxty1xjn4lj13kim36r6x"\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"generateCustomerTokenAsAdmin")," mutation requires the following input attribute:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"customer_email")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The customer's email address")))),(0,r.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"generateCustomerTokenAsAdmin")," mutation returns a valid customer token as the output."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"customer_token")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The customer token")))),(0,r.mdx)("h2",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"revoke-token.md"},"revokeCustomerToken mutation"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-generate-token-as-admin-md-68e6536f489b55faec28.js.map