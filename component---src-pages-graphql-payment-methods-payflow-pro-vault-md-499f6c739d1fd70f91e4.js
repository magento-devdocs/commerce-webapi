"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1489],{74119:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var n,o=a(87462),m=a(63366),r=(a(15007),a(64983)),p=a(91515),l=["components"],d={},i=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:d},h=p.Z;function u(e){var t=e.components,a=(0,m.Z)(e,l);return(0,r.mdx)(h,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"paypal-payflow-pro-vault-payment-method"},"PayPal Payflow Pro Vault payment method"),(0,r.mdx)("p",null,"PayPal Payflow Pro Vault payment method processes credit and debit card payments using information stored in the vault. This payment method is available for customers of the United States, Canada, Australia, and New Zealand."),(0,r.mdx)("p",null,"The following conditions must be true to use this payment method:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The shopper must be a logged-in customer.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The customer must have previously saved their payment information in the vault."))),(0,r.mdx)("p",null,"You cannot use this payment method if the customer decides to use a credit or debit card that is not stored in the vault."),(0,r.mdx)("p",null,"If the customer's stored payment information becomes outdated, use the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/checkout/mutations/delete-payment-token.md"},"deletePaymentToken mutation")," to remove the token. Then perform the actions described in the ",(0,r.mdx)("a",{parentName:"p",href:"../payment-methods/payflow-pro.md"},"PayPal Payflow Pro payment method")," to generate a new token and process the order."),(0,r.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/store/queries/store-config.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"storeConfig")," query")," and specify the ",(0,r.mdx)("inlineCode",{parentName:"p"},"payment_payflowpro_cc_vault_active")," attribute to determine whether the Vault feature is enabled for Payflow Pro."),(0,r.mdx)("h2",{id:"payflow-pro-workflow"},"Payflow Pro workflow"),(0,r.mdx)("p",null,"The following diagram shows the workflow for placing an order when Payflow Pro Vault is the selected payment method."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/0f354ba21fec5df99d6693e1103fb5f8/paypal-payflow-pro-vault.svg",alt:"PayPal Payflow Pro Vault sequence diagram"})),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Use the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/checkout/queries/customer-payment-tokens.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"customerPaymentTokens"))," query to retrieve the payment tokens the customer has stored in the vault.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The application returns an array of payment tokens.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The client renders the token information, and the customer selects a payment method."),(0,r.mdx)("p",{parentName:"li"},"When the customer selects a stored payment method, the PWA uses the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation to set the payment method to ",(0,r.mdx)("inlineCode",{parentName:"p"},"payflowpro_cc_vault"),". The vaulted public hash is passed in the ",(0,r.mdx)("a",{parentName:"p",href:"#payflowpro_cc_vault-attributes"},(0,r.mdx)("inlineCode",{parentName:"a"},"payflowpro_cc_vault"))," object.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The application returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Cart")," object.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The client runs the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/place-order.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"placeOrder"))," mutation.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The application sends an authorization request to the gateway.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The gateway sends the response to Magento.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The application creates an order and sends an order ID in response to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation."))),(0,r.mdx)("h2",{id:"additional-payment-information"},"Additional Payment information"),(0,r.mdx)("p",null,"When you set the payment method to Payflow Pro Vault in the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"payment_method")," object must contain a ",(0,r.mdx)("inlineCode",{parentName:"p"},"payflowpro_cc_vault")," object, which contains the customer's public hash."),(0,r.mdx)("h3",{id:"payflowpro_cc_vault-attributes"},"payflowpro_cc_vault attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"payflowpro_cc_vault")," object must contain the following attribute:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"public_hash")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The public hash of the payment token")))),(0,r.mdx)("h3",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example shows the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation constructed for the Payflow Pro payment method."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setPaymentMethodOnCart(input: {\n    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"\n    payment_method: {\n      code: "payflowpro_cc_vault"\n      payflowpro_cc_vault: {\n          public_hash: "<public-hash-value>"\n        }\n      }\n    }\n  })\n  {\n    cart {\n      selected_payment_method {\n        code\n      }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodOnCart": {\n      "cart": {\n        "selected_payment_method": {\n          "code": "payflowpro_cc_vault"\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-payment-methods-payflow-pro-vault-md-499f6c739d1fd70f91e4.js.map