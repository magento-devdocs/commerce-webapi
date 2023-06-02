"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5290],{45125:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return N}});var i,a=n(87462),d=n(63366),r=(n(15007),n(64983)),m=n(91515),l=n(44606),u=["components"],o={},s=(i="InlineAlert",function(t){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}),p={_frontmatter:o},x=m.Z;function N(t){var e=t.components,n=(0,d.Z)(t,u);return(0,r.mdx)(x,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"addproductstorequisitionlist-mutation"},"addProductsToRequisitionList mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"addProductsToRequisitionList")," mutation adds products to a requisition list."),(0,r.mdx)("p",null,"This mutation requires a valid ",(0,r.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"../../../../schema/store/queries/store-config.md"},"storeConfig query")," with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"is_requisition_list_active")," attribute to determine whether requisition lists are enabled."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  addProductsToRequisitionList(\n    requisitionListUid: ID!\n    requisitionListItems: [RequisitionListItemsInput!]!\n  ) {\n    AddProductsToRequisitionListOutput\n  }\n}\n")),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example adds products to a requisition list."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToRequisitionList(\n      requisitionListUid: "Mg=="\n      requisitionListItems: [\n        {\n            sku: "MS10"\n            quantity: 1\n            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUw","Y29uZmlndXJhYmxlLzE2MC8xNjg"]\n        }\n      ]\n    ) {\n    requisition_list {\n      uid\n      items {\n        items {\n          ... on RequisitionListItemInterface {\n            uid\n            product {\n              uid\n              sku\n              name\n            }\n            quantity\n          }\n        }\n      }\n      items_count\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToRequisitionList": {\n      "requisition_list": {\n        "uid": "Mg==",\n        "items": {\n          "items": [\n            {\n              "uid": "Mw==",\n              "product": {\n                "uid": "NTk2",\n                "sku": "MS10",\n                "name": "Logan  HeatTec&reg; Tee"\n              },\n              "quantity": 1\n            }\n          ]\n        },\n        "items_count": `\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"addProductsToRequisitionList")," mutation requires the following input."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"requisitionListItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"[",(0,r.mdx)("a",{parentName:"td",href:"#requisitionlistitemsinput-attributes"},"RequisitionListItemsInput"),"!]!"),(0,r.mdx)("td",{parentName:"tr",align:null},"An array of products to be added to the requisition list")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"requisitionListUid")),(0,r.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The unique ID of the requisition list")))),(0,r.mdx)("h3",{id:"requisitionlistitemsinput-attributes"},"RequisitionListItemsInput attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"RequisitionListItemsInput")," type contains the list of products to add to a requisition list."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"entered_options")),(0,r.mdx)("td",{parentName:"tr",align:null},"[EnteredOptionInput!]"),(0,r.mdx)("td",{parentName:"tr",align:null},"An array of customer entered option IDs")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"parent_sku")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"For configurable products, the SKU of the parent product")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"quantity")),(0,r.mdx)("td",{parentName:"tr",align:null},"Float"),(0,r.mdx)("td",{parentName:"tr",align:null},"The quantity of the product to add")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"selected_options")),(0,r.mdx)("td",{parentName:"tr",align:null},"[String!]"),(0,r.mdx)("td",{parentName:"tr",align:null},"An array of selected option IDs")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sku")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The product SKU")))),(0,r.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"addProductsToRequisitionList")," object returns the requisition list object."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"requisition_list")),(0,r.mdx)("td",{parentName:"tr",align:null},"[",(0,r.mdx)("a",{parentName:"td",href:"#requisitionlist-attributes"},"RequisitionList"),"]"),(0,r.mdx)("td",{parentName:"tr",align:null},"The requisition list after the items were added")))),(0,r.mdx)("h3",{id:"requisitionlist-attributes"},"RequisitionList attributes"),(0,r.mdx)(l.default,{mdxType:"RequisitionList"}))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-requisition-list-mutations-add-products-md-d04894ecc34c425b70a7.js.map