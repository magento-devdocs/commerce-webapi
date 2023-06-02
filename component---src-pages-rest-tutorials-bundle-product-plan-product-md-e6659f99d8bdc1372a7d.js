"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[621],{63633:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var a,r=n(87462),l=n(63366),i=(n(15007),n(64983)),d=n(91515),m=["components"],o={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),u={_frontmatter:o},s=d.Z;function c(e){var t=e.components,n=(0,l.Z)(e,m);return(0,i.mdx)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"step-1-plan-the-product"},"Step 1. Plan the product"),(0,i.mdx)("p",null,"To create a bundle product with REST, you need:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The attribute names and values for the attribute set assigned to a bundle product."),(0,i.mdx)("li",{parentName:"ul"},"The category IDs assigned to a bundle product."),(0,i.mdx)("li",{parentName:"ul"},"Simple product SKUs assigned to a bundle product.")),(0,i.mdx)("p",null,"We will use a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Default")," attribute set."),(0,i.mdx)("p",null,'RAM and Monitor sizes will be the customizable aspect of the bundle product. We will create a simple product for each size of RAM and Monitor (12GB, 24GB, 15" and 20").'),(0,i.mdx)("h2",{id:"define-product-characteristics"},"Define product characteristics"),(0,i.mdx)("p",null,"The table below has the general characteristics of the desktop computer we are creating:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Characteristic"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Attribute Set"),(0,i.mdx)("td",{parentName:"tr",align:null},"Default")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Product Name"),(0,i.mdx)("td",{parentName:"tr",align:null},"Desktop Computer")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"SKU"),(0,i.mdx)("td",{parentName:"tr",align:null},"Desktop-Computer")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Tax Class"),(0,i.mdx)("td",{parentName:"tr",align:null},"Taxable Goods")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Visibility"),(0,i.mdx)("td",{parentName:"tr",align:null},"Catalog, Search")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Description"),(0,i.mdx)("td",{parentName:"tr",align:null},"Desktop computer")))),(0,i.mdx)("h2",{id:"find-attribute-values"},"Find attribute values"),(0,i.mdx)("p",null,"We will make several API calls to find values needed to create simple/bundle products. We will use ",(0,i.mdx)("inlineCode",{parentName:"p"},"default")," as the store code."),(0,i.mdx)("h3",{id:"find-attribute-set-id"},"Find attribute set ID"),(0,i.mdx)("p",null,"We will use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Default")," attribute set. We will need to find the corresponding ",(0,i.mdx)("inlineCode",{parentName:"p"},"attribute_set_id"),"."),(0,i.mdx)("p",null,"The following API call can be used to search for the attribute set named ",(0,i.mdx)("inlineCode",{parentName:"p"},"Default")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"entity_type_id")," equals ",(0,i.mdx)("inlineCode",{parentName:"p"},"4"),". The ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_product")," entity has an ",(0,i.mdx)("inlineCode",{parentName:"p"},"entity_type_id")," value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"4"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"GET http://domain.com/rest/default/V1/eav/attribute-sets/list?searchCriteria[filter_groups][0][filters][0][field]=attribute_set_name&searchCriteria[filter_groups][0][filters][0][value]=Default&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][1][filters][0][field]=entity_type_id&searchCriteria[filter_groups][1][filters][0][value]=4&searchCriteria[filter_groups][1][filters][0][condition_type]=eq\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"attribute_set_id")," for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Default")," attribute set is ",(0,i.mdx)("inlineCode",{parentName:"p"},"4"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "attribute_set_id": 4,\n            "attribute_set_name": "Default",\n            "sort_order": 1,\n            "entity_type_id": 4\n        }\n    ],\n    "search_criteria": {\n        "filter_groups": [\n            {\n                "filters": [\n                    {\n                        "field": "attribute_set_name",\n                        "value": "Default",\n                        "condition_type": "eq"\n                    }\n                ]\n            },\n            {\n                "filters": [\n                    {\n                        "field": "entity_type_id",\n                        "value": "4",\n                        "condition_type": "eq"\n                    }\n                ]\n            }\n        ],\n        "page_size": 20\n    },\n    "total_count": 1\n}\n')),(0,i.mdx)("h3",{id:"list-attributes-for-the-attribute-set"},"List attributes for the attribute set"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"GET http://domain.com/rest/default/V1/products/attribute-sets/4/attributes\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "attribute_id": 87,\n        "attribute_code": "image",\n        "frontend_input": "media_image",\n        "entity_type_id": "4",\n        "is_required": false,\n        "options": [],\n        "is_user_defined": false,\n        "default_frontend_label": "Base",\n        "frontend_labels": [],\n        "backend_type": "varchar",\n        "is_unique": "0",\n        "validation_rules": []\n    },\n    {\n        "attribute_id": 125,\n        "attribute_code": "shipment_type",\n        "frontend_input": "select",\n        "entity_type_id": "4",\n        "is_required": true,\n        "options": [\n            {\n                "label": "Together",\n                "value": "0"\n            },\n            {\n                "label": "Separately",\n                "value": "1"\n            }\n        ],\n        "is_user_defined": false,\n        "default_frontend_label": "Ship Bundle Items",\n        "frontend_labels": [],\n        "backend_type": "int",\n        "source_model": "Magento\\\\Bundle\\\\Model\\\\Product\\\\Attribute\\\\Source\\\\Shipment\\\\Type",\n        "default_value": "0",\n        "is_unique": "0",\n        "validation_rules": []\n    }\n]\n')),(0,i.mdx)("p",null,"Because this response can be very long, we have abbreviated the example response above. The table below has attributes that are relevant in this tutorial."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Admin label"),(0,i.mdx)("th",{parentName:"tr",align:null},"Selected value"),(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute ID"),(0,i.mdx)("th",{parentName:"tr",align:null},"attribute_code"),(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute value"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Tax Class"),(0,i.mdx)("td",{parentName:"tr",align:null},"Taxable Goods"),(0,i.mdx)("td",{parentName:"tr",align:null},"134"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"tax_class_id")),(0,i.mdx)("td",{parentName:"tr",align:null},"2")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Visibility"),(0,i.mdx)("td",{parentName:"tr",align:null},"Catalog, Search"),(0,i.mdx)("td",{parentName:"tr",align:null},"99"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"visibility")),(0,i.mdx)("td",{parentName:"tr",align:null},"4")))),(0,i.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The attribute ID and value numbers will vary between different installations. Check the values carefully before using them in your calls."),(0,i.mdx)("h3",{id:"list-category-values"},"List category values"),(0,i.mdx)("p",null,"We will assign our Desktop Computer to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"What's New")," category."),(0,i.mdx)("p",null,"Use the following endpoint to find out category's ID."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"GET http://domain.com/rest/default/V1/categories?searchCriteria[filter_groups][0][filters][0][field]=id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][0][filters][0][condition_type]=gte\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 2,\n    "parent_id": 1,\n    "name": "Default Category",\n    "is_active": true,\n    "position": 1,\n    "level": 1,\n    "product_count": 0,\n    "children_data": [\n        {\n            "id": 32,\n            "parent_id": 2,\n            "name": "What\'s New",\n            "is_active": true,\n            "position": 1,\n            "level": 2,\n            "product_count": 0,\n            "children_data": []\n        }\n    ]\n}\n')),(0,i.mdx)("p",null,"We can see from the above response that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," for ",(0,i.mdx)("inlineCode",{parentName:"p"},"What's New")," is equal to ",(0,i.mdx)("inlineCode",{parentName:"p"},"32"),"."),(0,i.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,i.mdx)("p",null,"Since we are only gathering information, there is nothing to verify."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-bundle-product-plan-product-md-e6659f99d8bdc1372a7d.js.map