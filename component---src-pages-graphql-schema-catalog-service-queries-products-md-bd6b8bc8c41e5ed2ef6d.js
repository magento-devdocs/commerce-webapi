"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4155],{15510:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return x}});var a,i=t(87462),r=t(63366),l=(t(15007),t(64983)),o=t(91515),s=t(31958),d=t(52085),u=["components"],p={},m=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),c={_frontmatter:p},h=o.Z;function x(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.mdx)(h,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"products-query"},"products query"),(0,l.mdx)("p",null,"The Catalog Service for Adobe Commerce ",(0,l.mdx)("inlineCode",{parentName:"p"},"products")," query returns details about the SKUs specified as input. Although this query has the same name as  the ",(0,l.mdx)("a",{parentName:"p",href:"../../products/queries/products.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"products")," query")," that is provided with core Adobe Commerce and Magento Open Source, there are some differences."),(0,l.mdx)("p",null,"The Catalog Service query requires one or more SKU values as input. The query is primarily designed to retrieve information to render the following types of content:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Product detail pages - You can provide full details about the product identified by the specified SKU.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Product compare pages - You can retrieve selected information about multiple products, such as the name, price and image."))),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Use the Live Search ",(0,l.mdx)("a",{parentName:"p",href:"../../live-search/queries/product-search.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"productSearch")," query")," to return product listing page content."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"ProductView")," output object is significantly different than the core ",(0,l.mdx)("inlineCode",{parentName:"p"},"products")," query ",(0,l.mdx)("inlineCode",{parentName:"p"},"Products")," output object. Key differences include:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Products are either simple or complex. Simple, virtual, downloadable, and gift card products map to ",(0,l.mdx)("inlineCode",{parentName:"p"},"SimpleProductView"),". All other product types map to ",(0,l.mdx)("inlineCode",{parentName:"p"},"ComplexProductView"),". Simple products have defined prices. Complex products have price ranges. Since complex products are comprised of multiple simple products, they have access to simple product prices.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Merchant-defined attributes are exposed in a top-level container and indicate their storefront roles. Roles include Show on PDP, Show on PLP, and Show on Search Results.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Images are also accessible as a top-level container and can be filtered by their role. An image can have a base, small, or thumbnail role."))),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"products (skus [String]) [ProductView]\n")),(0,l.mdx)("h2",{id:"required-headers"},"Required headers"),(0,l.mdx)("p",null,"You must specify the following HTTP headers to run this query."),(0,l.mdx)(s.Z,{mdxType:"Docs"}),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("h3",{id:"return-details-about-a-simple-product"},"Return details about a simple product"),(0,l.mdx)("p",null,"The following query returns details about a simple product."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n  products(skus: ["24-MB02"]) {\n    id\n    sku\n    name\n    url\n    description\n    shortDescription\n    attributes(roles: ["visible in Search"]) {\n      name\n      label\n      value\n      roles\n    }\n    ... on SimpleProductView {\n      price {\n        regular {\n          amount {\n            value\n            currency\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": [\n      {\n        "id": "TWpRdFRVSXdNZwBaR1ZtWVhWc2RBAE16UmxNamMwTUdFdE56UTNNeTAwWXpnNUxUZzNNekF0TlRjME1ETm1ZMlV5TjJGbABiV0ZwYmw5M1pXSnphWFJsWDNOMGIzSmwAWW1GelpRAFRVRkhVMVJITURBMU5UYzVNRE00",\n        "sku": "24-MB02",\n        "name": "Fusion Backpack 567890",\n        "url": "http://example.com/fusion-backpack.html",\n        "description": "<p>With the Fusion Backpack strapped on, every trek is an adventure - even a bus ride to work. That\'s partly because two large zippered compartments store everything you need, while a front zippered pocket and side mesh pouches are perfect for stashing those little extras, in case you change your mind and take the day off.</p>\\r\\n<ul>\\r\\n<li>Durable nylon construction.</li>\\r\\n<li>2 main zippered compartments.</li>\\r\\n<li>1 exterior zippered pocket.</li>\\r\\n<li>Mesh side pouches.</li>\\r\\n<li>Padded, adjustable straps.</li>\\r\\n<li>Top carry handle.</li>\\r\\n<li>Dimensions: 18\\" x 10\\" x 6\\".</li>\\r\\n</ul>",\n        "shortDescription": "",\n        "attributes": [\n          {\n            "name": "activity",\n            "label": "Activity",\n            "value": [\n              "Hiking",\n              "School",\n              "Yoga"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in compare list",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "features_bags",\n            "label": "Features",\n            "value": [\n              "Hydration Pocket",\n              "Audio Pocket",\n              "Waterproof",\n              "Lightweight"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "material",\n            "label": "Material",\n            "value": [\n              "Burlap",\n              "Nylon",\n              "Polyester"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "strap_bags",\n            "label": "Strap/Handle",\n            "value": [\n              "Adjustable",\n              "Double",\n              "Padded"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "style_bags",\n            "label": "Style Bags",\n            "value": [\n              "Backpack",\n              "Laptop"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          }\n        ],\n        "price": {\n          "regular": {\n            "amount": {\n              "value": 59,\n              "currency": "USD"\n            }\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,l.mdx)("h3",{id:"complex-product-example"},"Return details about a complex product"),(0,l.mdx)("p",null,"The following query returns details about a configurable product."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n  products(skus: ["24-MB02"]) {\n    id\n    sku\n    name\n    url\n    description\n    shortDescription\n    inStock\n    lowStock\n    attributes(roles: ["visible in Search"]) {\n      name\n      label\n      value\n      roles\n    }\n    ... on SimpleProductView {\n      price {\n        regular {\n          amount {\n            value\n            currency\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": [\n      {\n        "__typename": "ComplexProductView",\n        "id": "VFVneE1nAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",\n        "sku": "MH12",\n        "name": "Ajax Full-Zip Sweatshirt 2",\n        "url": "http://example.com/ajax-full-zip-sweatshirt.html",\n        "description": "<p>The Ajax Full-Zip Sweatshirt makes the optimal layering or outer piece for archers, golfers, hikers and virtually any other sportsmen. Not only does it have top-notch moisture-wicking abilities, but the tight-weave fabric also prevents pilling from repeated wash-and-wear cycles.</p>\\r\\n<p>&bull; Mint striped full zip hoodie.<br />&bull; 100% bonded polyester fleece.<br />&bull; Pouch pocket.<br />&bull; Rib cuffs and hem. <br />&bull; Machine washable.</p>",\n        "shortDescription": "",\n        "inStock": true,\n        "lowStock": false,\n        "attributes": [\n          {\n            "name": "climate",\n            "label": "Climate",\n            "value": [\n              "All-Weather",\n              "Cool",\n              "Indoor",\n              "Spring",\n              "Windy"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "customattribute",\n            "label": "customAttribute",\n            "value": "asd",\n            "roles": [\n              "visible in PDP",\n              "visible in PLP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "material",\n            "label": "Material",\n            "value": [\n              "Fleece",\n              "Polyester"\n            ],\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "pattern",\n            "label": "Pattern",\n            "value": "Striped",\n            "roles": [\n              "visible in PDP",\n              "visible in Search"\n            ]\n          },\n          {\n            "name": "testtttattribute",\n            "label": "testtttAttribute",\n            "value": "asd",\n            "roles": [\n              "visible in PDP",\n              "visible in PLP",\n              "visible in Search"\n            ]\n          }\n        ],\n        "priceRange": {\n          "maximum": {\n            "regular": {\n              "amount": {\n                "value": 69,\n                "currency": "USD"\n              }\n            }\n          },\n          "minimum": {\n            "regular": {\n              "amount": {\n                "value": 69,\n                "currency": "USD"\n              }\n            }\n          }\n        },\n        "options": [\n          {\n            "id": "color",\n            "required": false,\n            "title": "Color",\n            "values": [\n              {\n                "id": "Y29uZmlndXJhYmxlLzkzLzU5",\n                "title": "Blue"\n              },\n              {\n                "id": "Y29uZmlndXJhYmxlLzkzLzY3",\n                "title": "Red"\n              },\n              {\n                "id": "Y29uZmlndXJhYmxlLzkzLzYy",\n                "title": "Green"\n              }\n            ]\n          },\n          {\n            "id": "size",\n            "required": false,\n            "title": "Size",\n            "values": [\n              {\n                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzU=",\n                "title": "XS"\n              },\n              {\n                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzY=",\n                "title": "S"\n              },\n              {\n                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzc=",\n                "title": "M"\n              },\n              {\n                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",\n                "title": "L"\n              },\n              {\n                "id": "Y29uZmlndXJhYmxlLzE4Ni8xNzk=",\n                "title": "XL"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,l.mdx)("h2",{id:"output-fields"},"Output fields"),(0,l.mdx)(d.default,{mdxType:"Docs2"}))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-catalog-service-queries-products-md-bd6b8bc8c41e5ed2ef6d.js.map