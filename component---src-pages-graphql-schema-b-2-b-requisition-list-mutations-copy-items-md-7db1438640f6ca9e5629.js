"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2325],{32689:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return c}});var i=n(58168),s=n(80045),o=(n(88763),n(15680)),m=n(83407);const a=["components"],r={},d=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var u;const p={_frontmatter:r},l=m.A;function c(e){let{components:t}=e,n=(0,s.A)(e,a);return(0,o.mdx)(l,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"copyitemsbetweenrequisitionlists-mutation"},"copyItemsBetweenRequisitionLists mutation"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"copyItemsBetweenRequisitionLists")," mutation copies items from one requisition list to another."),(0,o.mdx)("p",null,"This mutation requires a valid ",(0,o.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,o.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("a",{parentName:"p",href:"../../../../schema/store/queries/store-config.md"},"storeConfig query")," with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"is_requisition_list_active")," attribute to determine whether requisition lists are enabled."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  copyItemsBetweenRequisitionLists(\n    sourceRequisitionListUid: ID!,\n    destinationRequisitionListUid: ID,\n    requisitionListItem: CopyItemsBetweenRequisitionListsInput\n  ) {\n    CopyItemsFromRequisitionListsOutput\n  }\n}\n")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-copyItemsBetweenRequisitionLists"},(0,o.mdx)("inlineCode",{parentName:"a"},"copyItemsBetweenRequisitionLists"))," reference provides detailed information about the types and fields defined in this mutation."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following example copies an item from one requisition list to another."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  copyItemsBetweenRequisitionLists(\n      sourceRequisitionListUid: "Mg==",\n      destinationRequisitionListUid: "Mw==",\n      requisitionListItem: {\n        requisitionListItemUids: [\n          "Nw=="\n        ]\n      }\n    ) {\n    requisition_list {\n      uid\n      name\n      items_count\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "copyItemsBetweenRequisitionLists": {\n      "requisition_list": {\n        "uid": "Mw==",\n        "name": "Rarely ordered items",\n        "items_count": 3\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"move-items.md"},"moveItemsBetweenRequisitionLists mutation")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"delete.md"},"deleteRequisitionListItems mutation"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-requisition-list-mutations-copy-items-md-7db1438640f6ca9e5629.js.map