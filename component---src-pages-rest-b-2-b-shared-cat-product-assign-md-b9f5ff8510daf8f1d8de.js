"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1944],{91814:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return u}});var t=n(87462),d=n(63366),o=(n(15007),n(64983)),r=n(91515),s=["components"],l={},m=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",a)}},i=m("InlineAlert"),p=m("CodeBlock"),g={_frontmatter:l},c=r.Z;function u(e){var a=e.components,n=(0,d.Z)(e,s);return(0,o.mdx)(c,(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"assign-categories-and-products-to-a-shared-catalog"},"Assign categories and products to a shared catalog"),(0,o.mdx)("p",null,"The shared catalog configuration process includes assigning categories and products to the shared catalog. To assign these items to a shared catalog, the following conditions must be met:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The category structure must already be defined. You cannot create a new category to be included in a shared catalog. Use endpoints like ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST /V1/categories")," to create a new category.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Each category must already be populated with products. You cannot add a new product to a category to be included in a shared catalog. Use endpoints like ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST /V1/products")," to create a new product."))),(0,o.mdx)("h2",{id:"assign-categories"},"Assign categories"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"sharedCatalogCategoryManagementV1")," service is based on ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalogCategoryManagementV1"),". To view a store's category structure, call ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET /V1/categories"),"."),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Products that are defined within a category are not included when you assign a category to a shared catalog. You must add products separately."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"sharedCatalogCategoryManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"POST /V1/sharedCatalog/:id/assignCategories\nPOST /V1/sharedCatalog/:id/unassignCategories\nGET  /V1/sharedCatalog/:id/categories\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Category parameters:")),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Although you can specify other parameters defined within a ",(0,o.mdx)("inlineCode",{parentName:"p"},"categories")," object, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," is the only one used to assign or unassign a category to a shared catalog."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Format"),(0,o.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"id")),(0,o.mdx)("td",{parentName:"tr",align:null},"The category ID number"),(0,o.mdx)("td",{parentName:"tr",align:null},"integer"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required to assign or unassign a category")))),(0,o.mdx)("h3",{id:"assign-categories-to-shared-catalog"},"Assign categories to shared catalog"),(0,o.mdx)("p",null,"The following example adds the Luma Gear category (",(0,o.mdx)("inlineCode",{parentName:"p"},"id=3"),") as well as its subcategories (",(0,o.mdx)("inlineCode",{parentName:"p"},"id=4,5,6"),") to a custom shared catalog."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/sharedCatalog/2/assignCategories")),(0,o.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "categories": [\n    {\n      "id": 3\n    },\n    {\n      "id": 4\n    },\n    {\n      "id": 5\n    },\n    {\n      "id": 6\n    }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the operation was successful\n")),(0,o.mdx)("h3",{id:"unassign-categories-from-a-shared-catalog"},"Unassign categories from a shared catalog"),(0,o.mdx)("p",null,"When you unassign a category from a shared catalog, Commerce also removes its products from the shared catalog. If a product is assigned to multiple categories, then Commerce removes the product from the unassigned category only."),(0,o.mdx)("p",null,"The following example removes two categories from the shared catalog."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/sharedCatalog/2/unassignCategories")),(0,o.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-1"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "categories": [\n    {\n      "id": 7\n    },\n\n    {\n      "id": 8\n    }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"response-1"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the operation was successful\n")),(0,o.mdx)("h3",{id:"list-the-shared-catalog-categories"},"List the shared catalog categories"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," call returns an array of catalog IDs."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/sharedCatalog/2/categories")),(0,o.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-2"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,o.mdx)("h4",{id:"response-2"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"[\n  3,\n  4,\n  5,\n  6\n]\n")),(0,o.mdx)("h2",{id:"assign-products"},"Assign products"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"sharedCatalogProductManagementV1")," service is based on ",(0,o.mdx)("inlineCode",{parentName:"p"},"catalogProductManagementV1"),". To return a list of products defined within a category, call ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET /V1/categories/:categoryId/products"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"sharedCatalogProductManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"REST endpoints:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"POST  /V1/sharedCatalog/:id/assignProducts\nPOST  /V1/sharedCatalog/:id/unassignProducts\nGET  /V1/sharedCatalog/:id/products\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Category parameters:")),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Although you can specify other parameters defined within a ",(0,o.mdx)("inlineCode",{parentName:"p"},"products")," object, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"sku")," is the only one used to assign or unassign a product to a shared catalog."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Format"),(0,o.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"sku")),(0,o.mdx)("td",{parentName:"tr",align:null},"The product's SKU identifier"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required to assign or unassign a product to a shared catalog")))),(0,o.mdx)("h3",{id:"assign-products-to-shared-catalog"},"Assign products to shared catalog"),(0,o.mdx)("p",null,"The following example adds two products each in the Bags, Fitness Equipment, and Watches categories to a custom shared catalog. The specified products do not have to be in the same category."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/sharedCatalog/2/assignProducts")),(0,o.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-3"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "products": [\n     {\n         "sku": "24-MB01"\n     },\n     {\n         "sku": "24-MB04"\n     },\n     {\n         "sku": "24-UG06"\n     },\n     {\n         "sku": "24-UG07"\n     },\n     {\n         "sku": "24-MG04"\n     },\n     {\n         "sku": "24-MG01"\n     }\n ]\n}\n')),(0,o.mdx)("h4",{id:"response-3"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the operation was successful\n")),(0,o.mdx)("h3",{id:"unassign-products-from-the-shared-catalog"},"Unassign products from the shared catalog"),(0,o.mdx)("p",null,"Unassigning a product does not remove it from its category or categories."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/sharedCatalog/2/unassignProducts")),(0,o.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-4"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "products": [\n   {\n     "sku": "24-MG01"\n   }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"response-4"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the operation was successful\n")),(0,o.mdx)("h3",{id:"list-the-shared-catalog-products"},"List the shared catalog products"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," call returns an array of SKUs."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/sharedCatalog/2/products")),(0,o.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-5"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,o.mdx)("h4",{id:"response-5"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  "24-MB01",\n  "24-MB04",\n  "24-UG06",\n  "24-UG07",\n  "24-MG04"\n]\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-b-2-b-shared-cat-product-assign-md-b9f5ff8510daf8f1d8de.js.map