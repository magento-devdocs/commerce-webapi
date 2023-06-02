"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1008],{64551:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return c}});var a,r=n(87462),o=n(63366),m=(n(15007),n(64983)),d=n(91515),s=["components"],p={},i=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),l={_frontmatter:p},u=d.Z;function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,m.mdx)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"customerpaymenttokens-query"},"customerPaymentTokens query"),(0,m.mdx)("p",null,"When the ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/payments-integrations/vault/"},"vault")," feature is supported by a payment integration and enabled, customers have the option during checkout to save their credit card information. (Braintree supports the vault feature. Third-party payment integrations may support this feature as well.) During subsequent checkouts, the customer is presented with a list of saved payment options. If Instant Purchase is enabled, customers can even by-pass the two-step checkout process and place the order from the product page."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"customerPaymentTokens")," query returns an array of stored payment methods. Use the ",(0,m.mdx)("a",{parentName:"p",href:"../mutations/delete-payment-token.md"},"deletePaymentToken mutation")," to delete a payment token from the system."),(0,m.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"You must specify the customer's authorization token in the header of the call."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"{customerPaymentTokens{CustomerPaymentTokens}}")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerPaymentTokens"},(0,m.mdx)("inlineCode",{parentName:"a"},"customerPaymentTokens"))," reference provides detailed information about the types and fields defined in this query."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example returns all the current customer's payment tokens. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"public_hash")," output values will be unique to your application."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"query {\n  customerPaymentTokens {\n    items {\n      details\n      public_hash\n      payment_method_code\n      type\n    }\n  }\n}\n")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customerPaymentTokens": {\n      "items": [\n        {\n          "details": "{\\"type\\":\\"VI\\",\\"maskedCC\\":\\"1111\\",\\"expirationDate\\":\\"09\\\\/2022\\"}",\n          "public_hash": "377c1514e0...",\n          "payment_method_code": "braintree",\n          "type": "card"\n        },\n        {\n          "details": "{\\"type\\":\\"DI\\",\\"maskedCC\\":\\"1117\\",\\"expirationDate\\":\\"11\\\\/2023\\"}",\n          "public_hash": "f5816fe2ab...",\n          "payment_method_code": "braintree",\n          "type": "card"\n        }\n      ]\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"../mutations/delete-payment-token.md"},"deletePaymentToken mutation")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-checkout-queries-customer-payment-tokens-md-460f6811763e02e6bd2f.js.map