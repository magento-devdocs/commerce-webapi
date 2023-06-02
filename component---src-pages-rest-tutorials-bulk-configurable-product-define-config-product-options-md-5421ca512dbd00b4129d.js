"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2288],{71158:function(e,a,n){n.r(a),n.d(a,{default:function(){return l}});var t,i=n(87462),p=n(63366),r=(n(15007),n(64983)),d=n(91515),s=["components"],o=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={},m=d.Z;function l(e){var a=e.components,n=(0,p.Z)(e,s);return(0,r.mdx)(m,(0,i.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-3-define-configurable-product-options"},"Step 3. Define configurable product options"),(0,r.mdx)("p",null,"  Now that we've created all the Champ Tee products, we need to assign ",(0,r.mdx)("inlineCode",{parentName:"p"},"size")," as the configurable attribute and link the simple products to the configurable product."),(0,r.mdx)("h2",{id:"set-the-configurable-attribute"},"Set the configurable attribute"),(0,r.mdx)("p",null," The ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST async/bulk/V1/configurable-products/bySku/options")," call assigns the specified ",(0,r.mdx)("inlineCode",{parentName:"p"},"attribute_id")," to be the configurable attribute."),(0,r.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null," The ",(0,r.mdx)("inlineCode",{parentName:"p"},"attribute_id")," and its value may be different on your installation. Check the values carefully before using them in your calls. To get the correct ",(0,r.mdx)("inlineCode",{parentName:"p"},"attribute_id"),", see ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/configurable-product/plan-product/#get-the-list-of-attributes-defined-in-an-attribute-searchcriteria"},"Get the list of attributes defined in an attribute searchCriteria")," for more information."),(0,r.mdx)("p",null," The value assigned to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"value_index")," must be unique within the system."),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null," ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/async/bulk/V1/configurable-products/bySku/options")),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[{\n "sku": "MS-Champ",\n "option": {\n   "attribute_id": "141",\n   "label": "Size",\n   "position": 0,\n   "is_use_default": true,\n   "values": [\n     {\n       "value_index": 9\n     }\n   ]\n }\n}]\n')),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "bulk_uuid": "98c46050-cd66-4b49-9d45-69bfa04efc78",\n   "request_items": [\n       {\n           "id": 0,\n           "data_hash": "17c5e6b0d6fdf98ea83f600c8cc7e9f5a437e7f51e21a9c40070bb6208e1334c",\n           "status": "accepted"\n       }\n   ],\n   "errors": false\n}\n')),(0,r.mdx)("h2",{id:"link-the-simple-products-to-the-configurable-product"},"Link the simple products to the configurable product"),(0,r.mdx)("p",null,"Now that you have set the configurable attribute to be ",(0,r.mdx)("inlineCode",{parentName:"p"},"sku"),", you can link all simple products to the configurable product and execute a single call with a payload that contains an array of simple products. To do this, specify the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sku")," of the configurable product, and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"childSku")," of each simple product."),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Bulk endpoint routes cannot contain input parameters, such as a ",(0,r.mdx)("inlineCode",{parentName:"p"},"sku")," value.  You must replace input parameters with a string that begins with ",(0,r.mdx)("inlineCode",{parentName:"p"},"by")," and ends with the input parameter name, such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"bySku"),". See ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/bulk-endpoints/"},(0,r.mdx)("inlineCode",{parentName:"a"},"bulk endpoints"))," for more information."),(0,r.mdx)("p",null," ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/async/bulk/V1/configurable-products/bySku/child")),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n   "sku": "MS-Champ",\n   "childSku": "MS-Champ-S"\n },\n {\n   "sku": "MS-Champ",\n   "childSku": "MS-Champ-M"\n },\n {\n   "sku": "MS-Champ",\n   "childSku": "MS-Champ-L"\n },\n // .... you can link as many products at the same time as required ....\n]\n')),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "bulk_uuid": "e78042d1-de13-4260-8f56-d5dd13f89e3c",\n   "request_items": [\n       {\n           "id": 0,\n           "data_hash": "b4cfe401d84fbfadc94dd86782f18104dcaa162649f032fe105420037a44f795",\n           "status": "accepted"\n       },\n       {\n           "id": 1,\n           "data_hash": "b4cfe401d84fbfadc94dd86782f18104dcaa162649f032fe105420037a44f795",\n           "status": "accepted"\n       },\n       {\n           "id": 2,\n           "data_hash": "b4cfe401d84fbfadc94dd86782f18104dcaa162649f032fe105420037a44f795",\n           "status": "accepted"\n       }\n   ],\n   "errors": false\n}\n')),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Log in to the Luma website and select ",(0,r.mdx)("strong",{parentName:"p"},"Catalog > Products"),". Click on the ",(0,r.mdx)("strong",{parentName:"p"},"Champ Tee")," configurable product and expand the ",(0,r.mdx)("strong",{parentName:"p"},"Configurations")," section."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1116px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/5530d/configurations-section.webp 320w","/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/0c8fb/configurations-section.webp 640w","/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/230f6/configurations-section.webp 1116w"],sizes:"(max-width: 1116px) 100vw, 1116px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/dd4a7/configurations-section.png 320w","/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/0f09e/configurations-section.png 640w","/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/6f641/configurations-section.png 1116w"],sizes:"(max-width: 1116px) 100vw, 1116px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/6d3cca296ba24678ca47f32d7bf8ab0b/6f641/configurations-section.png",alt:"Product page with configurable and simple products",title:"Product page with configurable and simple products",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"On the Luma storefront page, search for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Champ"),"."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"787px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/5530d/search-results.webp 320w","/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/0c8fb/search-results.webp 640w","/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/68152/search-results.webp 787w"],sizes:"(max-width: 787px) 100vw, 787px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/dd4a7/search-results.png 320w","/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/0f09e/search-results.png 640w","/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/19dcc/search-results.png 787w"],sizes:"(max-width: 787px) 100vw, 787px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/b7e426d99b77b61a8acd4d48cbda6456/19dcc/search-results.png",alt:"Search results",title:"Search results",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Call ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/default/V1/products/MS-Champ"),". The response includes the ",(0,r.mdx)("inlineCode",{parentName:"p"},"configurable_product_options")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"configurable_product_links")," arrays."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'...\n"configurable_product_options": [\n   {\n       "id": 338,\n       "attribute_id": "141",\n       "label": "Size",\n       "position": 0,\n       "values": [\n           {\n               "value_index": 168\n           },\n           {\n               "value_index": 169\n           },\n           {\n               "value_index": 170\n           }\n       ],\n       "product_id": 2078\n   }\n],\n"configurable_product_links": [\n   2079,\n   2080,\n   2081\n]\n},\n...\n')))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\n\nexport const _frontmatter = {}\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-bulk-configurable-product-define-config-product-options-md-5421ca512dbd00b4129d.js.map