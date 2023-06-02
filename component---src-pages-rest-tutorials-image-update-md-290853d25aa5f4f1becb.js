"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[675],{8547:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return x}});var n=t(87462),i=t(63366),m=(t(15007),t(64983)),p=t(91515),o=["components"],d={},r=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",a)}},s=r("InlineAlert"),l=r("CodeBlock"),c={_frontmatter:d},g=p.Z;function x(e){var a=e.components,t=(0,i.Z)(e,o);return(0,m.mdx)(g,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"step-3-update-an-image"},"Step 3. Update an image"),(0,m.mdx)("p",null,"In this step, we will update an existing image with the ",(0,m.mdx)("inlineCode",{parentName:"p"},"id")," of ",(0,m.mdx)("inlineCode",{parentName:"p"},"694"),". We previously retrieved this ",(0,m.mdx)("inlineCode",{parentName:"p"},"id")," number in ",(0,m.mdx)("a",{parentName:"p",href:"list.md"},"Step 1. Getting a list of product images"),"."),(0,m.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"id")," on the sample data images might not match the ",(0,m.mdx)("inlineCode",{parentName:"p"},"id")," listed in this tutorial, refer back to the ",(0,m.mdx)("a",{parentName:"p",href:"list.md"},"list call")," for information on how to get a list of images for a SKU."),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Using the following image, open a bash terminal and convert the image into ",(0,m.mdx)("inlineCode",{parentName:"p"},"base64"),":"),(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"284px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"115.49295774647888%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/8a33e8c1e81465eea22af0c821d0f143/951e3/update-new-image.webp 284w"],sizes:"(max-width: 284px) 100vw, 284px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/8a33e8c1e81465eea22af0c821d0f143/18db4/update-new-image.png 284w"],sizes:"(max-width: 284px) 100vw, 284px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/8a33e8c1e81465eea22af0c821d0f143/18db4/update-new-image.png",alt:"New Image",title:"New Image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("p",{parentName:"li"},"Command:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"base64 -i ~/update-new-image.png\n")),(0,m.mdx)("p",{parentName:"li"},"Response:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"iVBORw0KGgoAAAANSUhEUgAAARwAAAFICAYAAACC60EBAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU8kax+fem16AkBABKaE3QToBpITQQpcONkISIJQQA0HFriwu4FpQEcGKLooouBZA1oootkWxANYNsqgo62LBhsq7wCG4+85777zvnDnzu//7zTffzJm557sAUNX4UmkmrAZAliRXFhngw4pPSGThnwIyIAIacAYIX5Aj5....[more characters]\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Make the following API call using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"base64-encoded")," string."))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"PUT http://domain.com/rest/default/V1/products/MJ03/media/694\n")),(0,m.mdx)(l,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"payload"},"Payload"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "entry": {\n        "id": 694,\n        "media_type": "image",\n        "label": "Custom Image Number 2",\n        "position": 1,\n        "disabled": false,\n        "types": [\n            "image",\n            "small_image",\n            "thumbnail"\n        ],\n        "content": {\n            "base64_encoded_data": "iVBORw0KGgoAAAANSUhEUgAAARwAAAFICAYAAACC60EBAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU8kax+fem16AkBABKaE3QToBpITQQpcONkISIJQQA0HFriwu4FpQEcGKLooouBZA1oootkWxANYNsqgo62LBhsq7wCG4+85777zvnDnzu//7zTffzJm557sAUNX4UmkmrAZAliRXFhngw4pPSGThnwIyIAIacAYIX5Aj5UREhADUJvq/2/tOAI32t61HY/37+/9qNKEoRwAAFIFysjBHkIXycbS9EEhluQAgu1HdaEGudJRbUWbI0ARR7h7l1HEeGOXkMcaAMZ/oSC7KDAAIFD5flgoAhYXqrDxBKhqH4o2yrUQolqAsRdkzKytbiPIRlM1RH1SjjMZnJ38XJ/VvMZOVMfn8VCWPr2XMCL7iHGkmf9H/uR3/27Iy5RNzmKKNkiYLjER7dXTPujOyg5UsSQ4Ln2CxcMx/jNPkgTETLMjhJk6wkO8brBybGRYywSlif54yTi4veoJFOX5REyzLjlTOlSLjciaYL5ucV54Ro9TTRDxl/Py06LgJzhPHhk1wTkZU8KQPV6nL5JHK/EWSAJ/Jef2Va8/K+W69Yp5ybG5adKBy7fzJ/EUSzmTMnHhlbkKRr9+kT4zSX5rro5xLmhmh9BdlBij1nLwo5dhc9EBOjo1Q7mE6PyhiggEXZINMtMkAC4SgT74A5IoW5o4uhJstXSQTp6blsjjoDROxeBKBzTSWva29PQCj93X8OLxljt1DiHl1UstqQo8xgt6RokkteRAAVAa01knN1BoA1a8AnFYI5LK8cW3sLmEBCagCBtACesAImANrYI9....[more characters]",\n            "type": "image/png",\n            "name": "custom_image_2.png"\n        }\n    }\n}\n')),(0,m.mdx)("h4",{id:"response"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,m.mdx)("p",null,"The request might take 30 seconds or so depending on the host."),(0,m.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,m.mdx)("p",null,"Refresh the ",(0,m.mdx)("inlineCode",{parentName:"p"},"MJ03")," product page and see if the existing image was updated."),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/5530d/update-image-frontend.webp 320w","/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/0c8fb/update-image-frontend.webp 640w","/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/94b1e/update-image-frontend.webp 1280w","/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/837a1/update-image-frontend.webp 1718w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/dd4a7/update-image-frontend.png 320w","/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/0f09e/update-image-frontend.png 640w","/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/bbbf7/update-image-frontend.png 1280w","/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/954d4/update-image-frontend.png 1718w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/c884e32b11e8a59d77acf82642466638/bbbf7/update-image-frontend.png",alt:"Updated Image",title:"Updated Image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-image-update-md-290853d25aa5f4f1becb.js.map