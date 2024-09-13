"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[177],{94733:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return s}});var a=n(58168),d=n(80045),r=(n(88763),n(15680)),l=n(83407);const m=["components"],i={},p={_frontmatter:i},o=l.A;function s(e){let{components:t}=e,n=(0,d.A)(e,m);return(0,r.mdx)(o,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"setnegotiablequoteshippingmethods-mutation"},"setNegotiableQuoteShippingMethods mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"setNegotiableQuoteShippingMethods")," mutation sets one or more delivery methods on a negotiable quote. By default, the following delivery methods are supported:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Label"),(0,r.mdx)("th",{parentName:"tr",align:null},"Carrier code"),(0,r.mdx)("th",{parentName:"tr",align:null},"Method code"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"DHL"),(0,r.mdx)("td",{parentName:"tr",align:null},"dhl"),(0,r.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Federal Express"),(0,r.mdx)("td",{parentName:"tr",align:null},"fedex"),(0,r.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Flat Rate"),(0,r.mdx)("td",{parentName:"tr",align:null},"flatrate"),(0,r.mdx)("td",{parentName:"tr",align:null},"flatrate")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Free Shipping"),(0,r.mdx)("td",{parentName:"tr",align:null},"freeshipping"),(0,r.mdx)("td",{parentName:"tr",align:null},"freeshipping")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Best Way"),(0,r.mdx)("td",{parentName:"tr",align:null},"tablerate"),(0,r.mdx)("td",{parentName:"tr",align:null},"bestway")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"United Parcel Service"),(0,r.mdx)("td",{parentName:"tr",align:null},"ups"),(0,r.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"United States Postal Service"),(0,r.mdx)("td",{parentName:"tr",align:null},"usps"),(0,r.mdx)("td",{parentName:"tr",align:null},"Varies")))),(0,r.mdx)("p",null,"The negotiable quote must be in the UPDATED state to successfully set a shipping address."),(0,r.mdx)("p",null,"This query requires a valid ",(0,r.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"setNegotiableQuoteShippingMethods(\n    input: SetNegotiableQuoteShippingMethodsInput!\n): SetNegotiableQuoteShippingMethodsOutput\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuoteShippingMethods"},(0,r.mdx)("inlineCode",{parentName:"a"},"setNegotiableQuoteShippingMethods"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example sets the shipping method for a negotiable quote."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'\nmutation {\n  setNegotiableQuoteShippingMethods(\n    input: {\n      quote_uid: "z13H2xRCqEiyVoPJmSmekvhOo4GdsVSp",\n      shipping_methods: [\n        {\n          carrier_code: "tablerate"\n          method_code: "bestway"\n        }\n      ]\n    }\n  ) {\n    quote {\n      uid\n      shipping_addresses {\n        selected_shipping_method {\n          carrier_code\n          carrier_title\n          method_code\n          method_title\n          amount {\n            value\n            currency\n          }\n        }\n      }\n    }\n  }\n}\n\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setNegotiableQuoteShippingMethods": {\n      "quote": {\n        "uid": "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS",\n        "shipping_addresses": [\n          {\n            "selected_shipping_method": {\n              "carrier_code": "tablerate",\n              "carrier_title": "Best Way",\n              "method_code": "bestway",\n              "method_title": "Table Rate",\n              "amount": {\n                "value": 29.95,\n                "currency": "USD"\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-negotiable-quote-mutations-set-shipping-methods-md-50d702995972d02b602c.js.map