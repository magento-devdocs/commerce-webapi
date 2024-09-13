"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3742],{13430:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return r},default:function(){return p}});var i=t(58168),s=t(80045),a=(t(88763),t(15680)),d=t(83407);const o=["components"],r={},u={_frontmatter:r},m=d.A;function p(n){let{components:e}=n,t=(0,s.A)(n,o);return(0,a.mdx)(m,(0,i.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"copyproductsbetweenwishlists-mutation"},"copyProductsBetweenWishlists mutation"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"copyProductsBetweenWishlists")," mutation copies the specified quantities of one or more products to a different wish list. The original wish list is unchanged."),(0,a.mdx)("p",null,"Use the ",(0,a.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,a.mdx)("inlineCode",{parentName:"a"},"customer")," query")," to return a list of wish list IDs and item IDs."),(0,a.mdx)("p",null,"This mutation requires a valid ",(0,a.mdx)("a",{parentName:"p",href:"../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,a.mdx)("h2",{id:"syntax"},"Syntax"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  copyProductsBetweenWishlists(\n    sourceWishlistUid: ID!,\n    destinationWishlistUid: ID!,\n    wishlistItems: [WishlistItemCopyInput!]!\n  ){\n    CopyProductsBetweenWishlistsOutput\n  }\n}\n")),(0,a.mdx)("h2",{id:"reference"},"Reference"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-copyProductsBetweenWishlists"},(0,a.mdx)("inlineCode",{parentName:"a"},"copyProductsBetweenWishlists"))," reference provides detailed information about the types and fields defined in this mutation."),(0,a.mdx)("h2",{id:"example-usage"},"Example usage"),(0,a.mdx)("p",null,"The following example copies two items to another wish list."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Request:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation{\n  copyProductsBetweenWishlists(sourceWishlistUid: 1, destinationWishlistUid: 2, wishlistItems: [\n    {\n      wishlist_item_id: 6\n      quantity: 1\n    }\n    {\n      wishlist_item_id: 7\n      quantity: 1\n    }\n  ]){\n    destination_wishlist {\n      id\n      items_v2 {\n        items {\n          id\n          product {\n            uid\n            sku\n            name\n          }\n        }\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Response:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "copyProductsBetweenWishlists": {\n      "destination_wishlist": {\n        "id": "2",\n        "items_v2": {\n          "items": [\n            {\n              "id": "8",\n              "product": {\n                "uid": "NDk=",\n                "sku": "240-LV08",\n                "name": "Advanced Pilates & Yoga (Strength)"\n              }\n            },\n            {\n              "id": "9",\n              "product": {\n                "uid": "MTg=",\n                "sku": "24-UG02",\n                "name": "Pursuit Lumaflex&trade; Tone Band"\n              }\n            },\n            {\n              "id": "10",\n              "product": {\n                "uid": "MTQ1MA==",\n                "sku": "WS04",\n                "name": "Layla Tee"\n              }\n            },\n            {\n              "id": "11",\n              "product": {\n                "uid": "MTU2Mg==",\n                "sku": "WS12",\n                "name": "Radiant Tee"\n              }\n            },\n            {\n              "id": "12",\n              "product": {\n                "uid": "MTYxMA==",\n                "sku": "WB01",\n                "name": "Electra Bra Top"\n              }\n            },\n            {\n              "id": "13",\n              "product": {\n                "uid": "MTY0Mg==",\n                "sku": "WB03",\n                "name": "Celeste Sports Bra"\n              }\n            },\n            {\n              "id": "15",\n              "product": {\n                "uid": "MTcyMg==",\n                "sku": "WT03",\n                "name": "Nora Practice Tank"\n              }\n            },\n            {\n              "id": "16",\n              "product": {\n                "uid": "MTY5MA==",\n                "sku": "WT01",\n                "name": "Bella Tank"\n              }\n            }\n          ]\n        }\n      },\n      "user_errors": []\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-wishlist-mutations-copy-products-md-fd4b23899a225060fbff.js.map