"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7288],{31829:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return h}});var n,r=a(87462),o=a(63366),m=(a(15007),a(64983)),d=a(91515),l=["components"],i={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:i},c=d.Z;function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,m.mdx)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"paypal-payflow-pro-payment-method"},"PayPal Payflow Pro payment method"),(0,m.mdx)("p",null,"Payflow Pro is a payment gateway that processes debit and credit card payments. It is available for customers of the United States, Canada, Australia, and New Zealand."),(0,m.mdx)("p",null,"Other PayPal solutions have the same GraphQL workflow as Payflow Pro. The information in this topic also applies to the following PayPal solution:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Payments Pro")),(0,m.mdx)("p",null,"If Payflow Pro has been configured to implement Express Checkout, use the ",(0,m.mdx)("a",{parentName:"p",href:"payflow-express.md"},"PayPal Express Checkout for Payflow payment method")," instead."),(0,m.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"If the ",(0,m.mdx)("inlineCode",{parentName:"p"},"is_active_payment_token_enabler")," attribute is set to ",(0,m.mdx)("inlineCode",{parentName:"p"},"1")," (true), in future orders, the logged-in customer can use the ",(0,m.mdx)("a",{parentName:"p",href:"payflow-pro-vault.md"},"Payflow Pro Vault payment method"),"."),(0,m.mdx)("h2",{id:"payflow-pro-workflow"},"Payflow Pro workflow"),(0,m.mdx)("p",null,"The following diagram shows the workflow for placing an order when Payflow Pro is the selected payment method."),(0,m.mdx)("p",null,(0,m.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/fc946607efaf15c5d115fd44dc87b432/paypal-payflow-pro.svg",alt:"PayPal Payflow Pro sequence diagram"})),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"On the checkout page, the customer selects ",(0,m.mdx)("strong",{parentName:"p"},"Credit Card")," as the payment method and enters the credit card information as well as the billing and shipping addresses. When the customer clicks ",(0,m.mdx)("strong",{parentName:"p"},"Place Order"),", the PWA client uses the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation to set the payment method to ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflowpro"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The mutation returns a ",(0,m.mdx)("inlineCode",{parentName:"p"},"Cart")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The client runs the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/checkout/mutations/create-payflow-pro-token.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createPayflowProToken"))," mutation to initiate a transaction.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application requests a secure token from the PayPal gateway. The request also contains billing and shipping information, which the application extracts from the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Cart")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The gateway response includes a secure token, a secure token ID, and result codes and descriptions.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application returns the secure token, a secure token ID, and result codes and descriptions in response to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"createPayflowProToken")," mutation.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The client uses a hidden iframe to send a silent post request directly to the PayPal gateway for account verification. For live requests, send the silent post to ",(0,m.mdx)("inlineCode",{parentName:"p"},"https://payflowlink.paypal.com"),". Send test requests to ",(0,m.mdx)("inlineCode",{parentName:"p"},"https://pilot-payflowlink.paypal.com"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The gateway responds directly to the client. The response contains a payload that includes secure token information and billing and shipping information.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The client uses the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/checkout/mutations/handle-payflow-pro-response.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"handlePayflowProResponse"))," mutation to send the payload to the application. The application stores this information without modifying the cart.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The mutation returns a ",(0,m.mdx)("inlineCode",{parentName:"p"},"Cart")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The client runs the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/place-order.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"placeOrder"))," mutation, which creates an order and begins the authorization process.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application sends an authorization request to the gateway.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The gateway sends the response to Magento.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application creates an order and sends an order ID in response to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation."))),(0,m.mdx)("h2",{id:"additional-payment-information"},"Additional Payment information"),(0,m.mdx)("p",null,"When you set the payment method to Payflow Pro in the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_method")," object must contain a ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflowpro")," object and a ",(0,m.mdx)("inlineCode",{parentName:"p"},"CreditCardDetailsInput")," object."),(0,m.mdx)("h3",{id:"payflowpro-object"},"payflowpro object"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"payflowpro")," object must contain the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc_details")),(0,m.mdx)("td",{parentName:"tr",align:null},"CreditCardDetailsInput!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Required input for credit card related information")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"is_active_payment_token_enabler")),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"States whether details about the customer's credit/debit card should be tokenized for later use. Required only if Vault is enabled for PayPal Payflow Pro payment integration.")))),(0,m.mdx)("h3",{id:"creditcarddetailsinput-object"},"CreditCardDetailsInput object"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CreditCardDetailsInput")," object must contain the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc_exp_month")),(0,m.mdx)("td",{parentName:"tr",align:null},"Int!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Credit card expiration month")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc_exp_year")),(0,m.mdx)("td",{parentName:"tr",align:null},"Int!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Credit card expiration year")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc_last_4")),(0,m.mdx)("td",{parentName:"tr",align:null},"Int!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Last four digits of the credit card")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc_type")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Credit card type")))),(0,m.mdx)("h3",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example shows the ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation constructed for the Payflow Pro payment method."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setPaymentMethodOnCart(input: {\n    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"\n    payment_method: {\n      code: "payflowpro"\n      payflowpro: {\n        cc_details: {\n          cc_exp_month: 12\n          cc_exp_year: 2023\n          cc_last_4: 1111\n          cc_type: "VI"\n        }\n        is_active_payment_token_enabler: 1\n      }\n    }\n  })\n  {\n    cart {\n      selected_payment_method {\n        code\n      }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodOnCart": {\n      "cart": {\n        "selected_payment_method": {\n          "code": "payflowpro"\n        }\n      }\n    }\n  }\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-payment-methods-payflow-pro-md-00c2ec3d2a0396dfc065.js.map