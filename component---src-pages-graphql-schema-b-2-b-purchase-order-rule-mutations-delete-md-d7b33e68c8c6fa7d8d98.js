"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5853],{92559:function(e,r,n){n.r(r),n.d(r,{_frontmatter:function(){return o},default:function(){return s}});var a=n(87462),t=n(63366),u=(n(15007),n(64983)),l=n(91515),p=["components"],o={},m={_frontmatter:o},d=l.Z;function s(e){var r=e.components,n=(0,t.Z)(e,p);return(0,u.mdx)(d,(0,a.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"deletepurchaseorderapprovalrule-mutation"},"deletePurchaseOrderApprovalRule mutation"),(0,u.mdx)("p",null,"The ",(0,u.mdx)("inlineCode",{parentName:"p"},"deletePurchaseOrderApprovalRule")," mutation deletes one or more purchase order approval rules."),(0,u.mdx)("p",null,"You can use the ",(0,u.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,u.mdx)("inlineCode",{parentName:"a"},"customer")," query")," to retrieve the ",(0,u.mdx)("inlineCode",{parentName:"p"},"uid")," value of the approval rule."),(0,u.mdx)("p",null,"If the mutation is successful, it returns null. Otherwise, the response contains details about any errors encountered."),(0,u.mdx)("h2",{id:"syntax"},"Syntax"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    deletePurchaseOrderApprovalRule(\n        input: DeletePurchaseOrderApprovalRuleInput!\n    ) {\n        DeletePurchaseOrderApprovalRuleOutput\n    }\n}\n")),(0,u.mdx)("h2",{id:"headers"},"Headers"),(0,u.mdx)("p",null,"A valid ",(0,u.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token")," is required."),(0,u.mdx)("h2",{id:"example-usage"},"Example usage"),(0,u.mdx)("p",null,"The following example deletes the purchase order approval rule."),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Request:")),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  deletePurchaseOrderApprovalRule(\n    input: {\n        approval_rule_uids: ["Mg=="]\n    }\n  ) {\n    errors {\n        message\n        type\n    }\n  }\n}\n')),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Response:")),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deletePurchaseOrderApprovalRule": {\n      "errors": []\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-purchase-order-rule-mutations-delete-md-d7b33e68c8c6fa7d8d98.js.map