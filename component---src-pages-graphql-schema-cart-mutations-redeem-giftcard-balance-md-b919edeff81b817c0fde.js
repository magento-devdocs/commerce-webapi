"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8589],{72457:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return s}});var a=t(58168),r=t(80045),d=(t(88763),t(15680)),o=t(83407);const i=["components"],m={},l=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var c;const p={_frontmatter:m},u=o.A;function s(e){let{components:n}=e,t=(0,r.A)(e,i);return(0,d.mdx)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"redeemgiftcardbalanceasstorecredit-mutation"},"redeemGiftCardBalanceAsStoreCredit mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"redeemGiftCardBalanceAsStoreCredit")," mutation converts the entire balance of a gift card to store credit. The gift card must be redeemable and cannot have a balance of 0 at the time you run the mutation. After successfully running the mutation, the value of the gift card changes to 0."),(0,d.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Run this mutation on behalf of logged-in customers only. ",(0,d.mdx)("a",{parentName:"p",href:"../../../usage/authorization-tokens.md"},"Authorization tokens")," describes how to send a request as a customer."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  redeemGiftCardBalanceAsStoreCredit(\n    input: GiftCardAccountInput\n  ) {\n    GiftCardAccount\n  }\n}\n")),(0,d.mdx)("h2",{id:"reference"},"Reference"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-redeemGiftCardBalanceAsStoreCredit"},(0,d.mdx)("inlineCode",{parentName:"a"},"redeemGiftCardBalanceAsStoreCredit"))," reference provides detailed information about the types and fields defined in this mutation."),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following example redeems the gift card with code ",(0,d.mdx)("inlineCode",{parentName:"p"},'"056MHP57TJ5C"'),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  redeemGiftCardBalanceAsStoreCredit(\n    input: {\n      gift_card_code: "056MHP57TJ5C"\n    }\n  ) {\n    balance {\n      currency\n      value\n    }\n    code\n    expiration_date\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "redeemGiftCardBalanceAsStoreCredit": {\n      "balance": {\n        "currency": "USD",\n        "value": 0\n      },\n      "code": "056MHP57TJ5C",\n      "expiration_date": null\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Gift card not found")),(0,d.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,d.mdx)("inlineCode",{parentName:"td"},"gift_card_code")," value does not exist in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"giftcardaccount")," table or the amount has been already redeemed.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field GiftCardAccountInput.gift_card_code of required type String! was not provided")),(0,d.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"GiftCardAccountInput.gift_card_code")," argument is empty.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-redeem-giftcard-balance-md-b919edeff81b817c0fde.js.map