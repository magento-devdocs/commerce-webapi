"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3332],{6444:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return m},default:function(){return c}});var a=t(58168),d=t(80045),r=(t(88763),t(15680)),o=t(83407);const i=["components"],m={},p=(u="InlineAlert",function(n){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",n)});var u;const l={_frontmatter:m},s=o.A;function c(n){let{components:e}=n,t=(0,d.A)(n,i);return(0,r.mdx)(s,(0,a.A)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"addsimpleproductstocart-mutation"},"addSimpleProductsToCart mutation"),(0,r.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"We recommend using the ",(0,r.mdx)("a",{parentName:"p",href:"add-products.md"},"addProductsToCart mutation")," to add any type of product to the cart."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"addSimpleProductsToCart")," mutation allows you to add any number of simple and group products to the cart at the same time."),(0,r.mdx)("p",null,"Simple products are physical products that do not have variations, such as color, size, or price. Group products are a set of simple standalone products that are assigned a unique SKU and are presented as a group. Each product in the group is purchased as a separate item."),(0,r.mdx)("p",null,"To add a simple or grouped product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mutation: {addSimpleProductsToCart(input: AddSimpleProductsToCartInput): {AddSimpleProductsToCartOutput}}")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addSimpleProductsToCart"},(0,r.mdx)("inlineCode",{parentName:"a"},"addSimpleProductsToCart"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"These examples show the minimal payload and a payload that includes customizable options."),(0,r.mdx)("h3",{id:"add-a-simple-product-to-a-cart"},"Add a simple product to a cart"),(0,r.mdx)("p",null,"The following example adds a simple product to a cart. The response contains the entire contents of the customer's cart."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addSimpleProductsToCart(\n    input: {\n      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"\n      cart_items: [\n        {\n          data: {\n            quantity: 1\n            sku: "24-MB04"\n          }\n        }\n      ]\n    }\n  ) {\n    cart {\n      itemsV2 {\n        items {\n          id\n          product {\n            name\n            sku\n          }\n          quantity\n        }\n        total_count\n        page_info {\n          page_size\n          current_page\n          total_pages\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addSimpleProductsToCart": {\n      "cart": {\n        "itemsV2": {\n          "items": [\n            {\n              "id": "13",\n              "product": {\n                "name": "Strive Shoulder Pack",\n                "sku": "24-MB04"\n              },\n              "quantity": 1\n            }\n          ],\n          "total_items": 1,\n          "page_info": {\n            "page_size": 20,\n            "current_page": 1,\n            "total_pages": 1\n          }          \n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"add-a-simple-product-with-customizable-options-to-a-cart"},"Add a simple product with customizable options to a cart"),(0,r.mdx)("p",null,"If a product has a customizable option, you can specify the option's value in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"addSimpleProductsToCart")," request."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addSimpleProductsToCart (input: {\n    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",\n    cart_items: {\n      data: {\n        sku: "simple"\n        quantity: 1\n      },\n      customizable_options: [\n        {\n          id: 121\n          value_string: "field value"\n        }\n      ]\n    }\n  }) {\n    cart {\n      itemsV2 {\n        items {\n          product {\n            name\n          }\n          quantity\n          ... on SimpleCartItem {\n            customizable_options {\n              label\n              values {\n                value\n              }\n            }\n          }\n        }\n        total_count\n        page_info {\n          page_size\n          current_page\n          total_pages\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addSimpleProductsToCart": {\n      "cart": {\n        "itemsV2": {\n          "items": [\n            {\n              "product": {\n                "name": "simple"\n              },\n              "quantity": 1,\n              "customizable_options": [\n                {\n                  "label": "Field Option",\n                  "values": [\n                    {\n                      "value": "field value"\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          "total_count": 1,\n          "page_info": {\n            "page_size": 20,\n            "current_page": 1,\n            "total_pages": 1\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"add-a-grouped-product-to-a-cart"},"Add a grouped product to a cart"),(0,r.mdx)("p",null,"The following example adds a grouped product (",(0,r.mdx)("inlineCode",{parentName:"p"},"Workout-Kit"),") to a cart. The grouped product contains three simple products."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addSimpleProductsToCart(\n    input: {\n      cart_id: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"\n      cart_items: [\n        {\n          data: {\n            quantity: 1\n            sku: "24-WB01"\n          }\n        }\n      ]\n    }\n  ) {\n    cart {\n      itemsV2 {\n        items {\n          uid\n          product {\n            name\n            sku\n          }\n          quantity\n        }\n        total_count\n        page_info {\n          page_size\n          current_page\n          total_pages\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addSimpleProductsToCart": {\n      "cart": {\n        "itemsV2": {\n          "items": [\n            {\n              "uid": "NDA=",\n              "product": {\n                "name": "Voyage Yoga Bag",\n                "sku": "24-WB01"\n              },\n              "quantity": 1\n            }\n          ],\n          "total_count": 1,\n          "page_info": {\n            "page_size": 20,\n            "current_page": 1,\n            "total_pages": 1\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Could not find a product with SKU "YYY"')),(0,r.mdx)("td",{parentName:"tr",align:null},"A simple product with the SKU specified in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"data"),".",(0,r.mdx)("inlineCode",{parentName:"td"},"sku")," argument does not exist.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Required parameter "cart_id" is missing')),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")," argument was omitted or contains an empty value.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Required parameter "cart_items" is missing')),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart_items")," argument was omitted or contains an empty value.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"The current user cannot perform operations on cart XXX")),(0,r.mdx)("td",{parentName:"tr",align:null},"An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"The product's required option(s) weren't entered. Make sure the options are entered and try again.")),(0,r.mdx)("td",{parentName:"tr",align:null},"A simple product has customizable options that were not specified in the mutation, but are required for adding the product into the cart.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-add-simple-products-md-1d752e30a27186ec4a2d.js.map