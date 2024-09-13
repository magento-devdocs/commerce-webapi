"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9976],{50880:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return p}});var a=t(58168),o=t(80045),r=(t(88763),t(15680)),i=t(83407);const d=["components"],l={},s={_frontmatter:l},m=i.A;function p(e){let{components:n}=e,t=(0,o.A)(e,d);return(0,r.mdx)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-11-run-the-source-selection-algorithms"},"Step 11. Run the Source Selection Algorithms"),(0,r.mdx)("p",null,"One of the most significant parts of Inventory Management is the Source Selection Algorithm (SSA). The Source Priority SSA analyzes and determines the best match for sources and shipping based on the priorities you specified in ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/assign-source-to-stock/"},"Step 4. Link stocks and sources\n"),". The Distance Priority SSA calculates the distance between the sources and the shipping address. Both algorithms also provide a list of source items with quantities to deduct per each source item."),(0,r.mdx)("p",null,"For more information about shipping and SSAs, see ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-admin/inventory/basics/selection-reservations.html"},"About Source Selection Algorithm and Reservations")," in the Adobe Commerce user guide."),(0,r.mdx)("h2",{id:"get-the-list-of-algorithms"},"Get the list of algorithms"),(0,r.mdx)("p",null,"Currently, Commerce supports SSAs based on priority and on distance. Third-party developers and future releases may add support for additional algorithms."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/default/V1/inventory/source-selection-algorithm-list")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <admin token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("p",null,"Not applicable"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "code": "distance",\n        "title": "Distance Priority",\n        "description": "Algorithm which provides Source Selections based on shipping address distance from the source"\n    },\n    {\n        "code": "priority",\n        "title": "Source Priority",\n        "description": "Algorithm which provides Source Selections based on predefined priority of Source"\n    }\n]\n')),(0,r.mdx)("h2",{id:"run-an-ssa"},"Run an SSA"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST V1/inventory/source-selection-algorithm-result")," endpoint uses the algorithm defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"algorithmCode")," attribute to calculate the recommended sources and quantities for each item defined in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"items")," array. In this example, we'll select the ",(0,r.mdx)("inlineCode",{parentName:"p"},"priority")," SSA. ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/inventory/manage-source-selection/"},"Manage source selection algorithms")," includes an example using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"distance")," priority."),(0,r.mdx)("p",null,"This tutorial does not consider complications, such as selling out of products or back ordering. We can ask the SSA to determine the best way to immediately ship all the items ordered (40 items of product ",(0,r.mdx)("inlineCode",{parentName:"p"},"24-WB01")," and 20 items of product ",(0,r.mdx)("inlineCode",{parentName:"p"},"24-WB03"),"). If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"shippable")," attribute in the response is ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),", there are not enough salable items to complete a full shipment, but the merchant can still perform a partial shipment."),(0,r.mdx)("p",null,"In ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/assign-source-to-stock/"},"Step 4. Link stocks and sources"),", we assigned the ",(0,r.mdx)("inlineCode",{parentName:"p"},"priority")," value of the Northeast warehouse and West warehouse to be ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"2"),", respectively. Thus, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"priority")," SSA attempts to fulfill the order from the Northeast warehouse first. If the primary source does not have enough of a product in stock, the SSA goes down the prioritized list of sources until the ordered quantity can be found."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/inventory/source-selection-algorithm-result")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <admin token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "inventoryRequest": {\n        "stockId": 2,\n        "items": [{\n            "sku": "24-WB01",\n            "qty": 40\n        },\n        {\n            "sku": "24-WB03",\n            "qty": 20\n        }]\n    },\n    "algorithmCode": "priority"\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"The SSA recommends shipping from the following sources:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Product"),(0,r.mdx)("th",{parentName:"tr",align:null},"Source"),(0,r.mdx)("th",{parentName:"tr",align:null},"Quantity"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"24-WB01")),(0,r.mdx)("td",{parentName:"tr",align:null},"Northeast warehouse"),(0,r.mdx)("td",{parentName:"tr",align:null},"35")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"24-WB01")),(0,r.mdx)("td",{parentName:"tr",align:null},"West warehouse"),(0,r.mdx)("td",{parentName:"tr",align:null},"5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"24-WB03")),(0,r.mdx)("td",{parentName:"tr",align:null},"Northeast warehouse"),(0,r.mdx)("td",{parentName:"tr",align:null},"20")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "source_selection_items": [\n        {\n            "source_code": "ne_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 35,\n            "qty_available": 35\n        },\n        {\n            "source_code": "ne_wh",\n            "sku": "24-WB03",\n            "qty_to_deduct": 20,\n            "qty_available": 50\n        },\n        {\n            "source_code": "west_wh",\n            "sku": "24-WB01",\n            "qty_to_deduct": 5,\n            "qty_available": 15\n        },\n        {\n            "source_code": "west_wh",\n            "sku": "24-WB03",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "brooklyn",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "brooklyn",\n            "sku": "24-WB03",\n            "qty_to_deduct": 0,\n            "qty_available": 0\n        },\n        {\n            "source_code": "manhattan",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "manhattan",\n            "sku": "24-WB03",\n            "qty_to_deduct": 0,\n            "qty_available": 0\n        },\n        {\n            "source_code": "huntington",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "huntington",\n            "sku": "24-WB03",\n            "qty_to_deduct": 0,\n            "qty_available": 0\n        },\n        {\n            "source_code": "berkeley",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "berkeley",\n            "sku": "24-WB03",\n            "qty_to_deduct": 0,\n            "qty_available": 20\n        },\n        {\n            "source_code": "sausalito",\n            "sku": "24-WB01",\n            "qty_to_deduct": 0,\n            "qty_available": 10\n        },\n        {\n            "source_code": "sausalito",\n            "sku": "24-WB03",\n            "qty_to_deduct": 0,\n            "qty_available": 20\n        }\n    ],\n    "shippable": true\n}\n')),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Sales")," > ",(0,r.mdx)("strong",{parentName:"li"},"Orders"),"."),(0,r.mdx)("li",{parentName:"ol"},"Click the ",(0,r.mdx)("strong",{parentName:"li"},"View")," link in the Action column for the order."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Ship"),"."),(0,r.mdx)("li",{parentName:"ol"},"Select different sources from the ",(0,r.mdx)("strong",{parentName:"li"},"Sources")," menu.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-run-ssa-md-69667cb73ae4f9ea03e8.js.map