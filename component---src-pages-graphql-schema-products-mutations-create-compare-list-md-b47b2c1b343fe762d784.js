"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5807],{38098:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(15007),n(64983)),i=n(91515),m=n(10835),l=["components"],p={},d={_frontmatter:p},s=i.Z;function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"createcomparelist-mutation"},"createCompareList mutation"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"createCompareList")," mutation creates a new comparison list with products specified in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"input")," attribute."),(0,o.mdx)("p",null,"Luma uses a widget to display the product name, price, and other information. To present this information without a widget, set the product attributes to be comparable at ",(0,o.mdx)("strong",{parentName:"p"},"Stores")," > Attributes > ",(0,o.mdx)("strong",{parentName:"p"},"Product")," > ",(0,o.mdx)("inlineCode",{parentName:"p"},"Attribute Name")," > ",(0,o.mdx)("strong",{parentName:"p"},"Storefront Properties")," > ",(0,o.mdx)("strong",{parentName:"p"},"Comparable on Storefront"),"."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    createCompareList(\n        input: CreateCompareListInput\n    ) {\n        CompareList\n    }\n}\n")),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following example shows how to create a comparison list containing two products."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    createCompareList(\n        input: {\n            products: ["1", "2"]\n        }\n    ) {\n        uid\n        item_count\n        attributes {\n            code\n            label\n        }\n        items {\n            uid\n            product {\n                sku\n                name\n                description {\n                    html\n                }\n            }\n        }\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCompareList": {\n      "uid": "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD",\n      "item_count": 2,\n      "attributes": [\n        {\n          "code": "sku",\n          "label": "SKU"\n        },\n        {\n          "code": "description",\n          "label": "Description"\n        },\n        {\n          "code": "short_description",\n          "label": "Short Description"\n        },\n        {\n          "code": "activity",\n          "label": "Activity"\n        }\n      ],\n      "items": [\n        {\n          "uid": "1",\n          "product": {\n            "sku": "24-MB01",\n            "name": "Joust Duffle Bag",\n            "description": {\n              "html": "<p>The sporty Joust Duffle Bag can\'t be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it\'s ideal for athletes with places to go.<p>\\n<ul>\\n<li>Dual top handles.</li>\\n<li>Adjustable shoulder strap.</li>\\n<li>Full-length zipper.</li>\\n<li>L 29\\" x W 13\\" x H 11\\".</li>\\n</ul>"\n            }\n          }\n        },\n        {\n          "uid": "2",\n          "product": {\n            "sku": "24-MB04",\n            "name": "Strive Shoulder Pack",\n            "description": {\n              "html": "<p>Convenience is next to nothing when your day is crammed with action. So whether you\'re heading to class, gym, or the unbeaten path, make sure you\'ve got your Strive Shoulder Pack stuffed with all your essentials, and extras as well.</p>\\n<ul>\\n<li>Zippered main compartment.</li>\\n<li>Front zippered pocket.</li>\\n<li>Side mesh pocket.</li>\\n<li>Cell phone pocket on strap.</li>\\n<li>Adjustable shoulder strap and top carry handle.</li>\\n</ul>"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CreateCompareListInput")," input object defines the product IDs for to be compared."),(0,o.mdx)("h3",{id:"createcomparelistinput-attributes"},"CreateCompareListInput attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CreateCompareListInput")," object contains the following attributes:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"products")),(0,o.mdx)("td",{parentName:"tr",align:null},"[ID!]"),(0,o.mdx)("td",{parentName:"tr",align:null},"An array of product ",(0,o.mdx)("inlineCode",{parentName:"td"},"id")," values to add to the comparison list. Note that these are not ",(0,o.mdx)("inlineCode",{parentName:"td"},"uid")," values")))),(0,o.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CompareList")," output object contains the following attributes:"),(0,o.mdx)(m.default,{mdxType:"CompareListOutput"}),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../queries/compare-list.md"},"compareList query")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"add-products-to-compare-list.md"},"addProductsToCompareList mutation")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"assign-compare-list.md"},"assignCompareListToCustomer mutation")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"delete-compare-list.md"},"deleteCompareList mutation")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"remove-from-compare-list.md"},"removeProductsFromCompareList mutation"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-mutations-create-compare-list-md-b47b2c1b343fe762d784.js.map