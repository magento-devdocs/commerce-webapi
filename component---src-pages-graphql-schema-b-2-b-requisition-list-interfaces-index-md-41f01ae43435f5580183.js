"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4531],{22731:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return r},default:function(){return c}});var t=i(58168),a=i(80045),m=(i(88763),i(15680)),o=i(83407);const d=["components"],r={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var s;const p={_frontmatter:r},u=o.A;function c(e){let{components:n}=e,i=(0,a.A)(e,d);return(0,m.mdx)(u,(0,t.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"requisitionlistiteminterface-attributes-and-implementations"},"RequisitionListItemInterface attributes and implementations"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-RequisitionListItemInterface"},(0,m.mdx)("inlineCode",{parentName:"a"},"RequisitionListItemInterface"))," provides details about items in a requisition list. It has the following implementations:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-BundleRequisitionListItem"},(0,m.mdx)("inlineCode",{parentName:"a"},"BundleRequisitionListItem"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ConfigurableRequisitionListItem"},(0,m.mdx)("inlineCode",{parentName:"a"},"ConfigurableRequisitionListItem"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-DownloadableRequisitionListItem"},(0,m.mdx)("inlineCode",{parentName:"a"},"DownloadableRequisitionListItem"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-GiftCardRequisitionListItem"},(0,m.mdx)("inlineCode",{parentName:"a"},"GiftCardRequisitionListItem"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-SimpleRequisitionListItem"},(0,m.mdx)("inlineCode",{parentName:"a"},"SimpleRequisitionListItem"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-VirtualRequisitionListItem"},(0,m.mdx)("inlineCode",{parentName:"a"},"VirtualRequisitionListItem")))),(0,m.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"There is not an implementation for grouped products. The items within a grouped product are managed individually."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following mutation adds a product to a requisition list and returns information about the products in the list."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addProductsToRequisitionList(\n      requisitionListUid: "Mg=="\n      requisitionListItems: [\n        {\n            sku: "MS10"\n            quantity: 1\n            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUw","Y29uZmlndXJhYmxlLzE2MC8xNjg"]\n        }\n      ]\n    ) {\n    requisition_list {\n      uid\n      items {\n        items {\n          ... on RequisitionListItemInterface {\n            uid\n            product {\n              uid\n              sku\n              name\n            }\n            quantity\n          }\n        }\n      }\n      items_count\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addProductsToRequisitionList": {\n      "requisition_list": {\n        "uid": "Mg==",\n        "items": {\n          "items": [\n            {\n              "uid": "Mg==",\n              "product": {\n                "uid": "MTA=",\n                "sku": "24-WB05",\n                "name": "Savvy Shoulder Tote"\n              },\n              "quantity": 1\n            },\n            {\n              "uid": "Mw==",\n              "product": {\n                "uid": "NTk2",\n                "sku": "MS10",\n                "name": "Logan  HeatTec&reg; Tee"\n              },\n              "quantity": 1\n            }\n          ]\n        },\n        "items_count": 2\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-requisition-list-interfaces-index-md-41f01ae43435f5580183.js.map