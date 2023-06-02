"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4451],{7673:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),m=a(91515),l=["components"],o={},p={_frontmatter:o},i=m.Z;function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,d.mdx)(i,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"protected-mutations"},"Protected mutations"),(0,d.mdx)("p",null,"If CAPTCHA or reCAPTCHA is enabled on pages requiring shopper input, then in most cases, the corresponding mutations that send requests to the application server must include an HTTP header that contains a value entered by the shopper (for CAPTCHA) or generated by the Google API (for reCAPTCHA). However, if you specify an integration authorization token in the header of the mutation, then you do not supply a header specific to CAPTCHA or reCAPTCHA."),(0,d.mdx)("p",null,"The HTTP ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Captcha")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-ReCaptcha")," headers:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Cannot be received by an automated script or a non-UI API call. They are captured and returned by the UI Web form only."),(0,d.mdx)("li",{parentName:"ul"},"Are optional in protected mutation API calls that provide ",(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("em",{parentName:"strong"},"integration authorization"))," tokens only. They cannot be skipped when you provide an Admin or Bearer token.")),(0,d.mdx)("h2",{id:"captcha"},"CAPTCHA"),(0,d.mdx)("p",null,"The following table lists the forms that can be configured to require CAPTCHA. Go to ",(0,d.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,d.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,d.mdx)("strong",{parentName:"p"},"Customers")," > ",(0,d.mdx)("strong",{parentName:"p"},"Customer Configuration")," > ",(0,d.mdx)("strong",{parentName:"p"},"CAPTCHA")," > ",(0,d.mdx)("strong",{parentName:"p"},"Forms")," to enable or disable CAPTCHA on these forms."),(0,d.mdx)("p",null,"The mutation that corresponds to a CAPTCHA-enabled form must include the HTTP ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Captcha")," header, along with the text the shopper entered in response to the CAPTCHA challenge."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Form name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mutation"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Add Gift Card Code"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"applyGiftCardToCart"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Applying Coupon Code"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"applyCouponToCart"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Change password"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"changeCustomerPassword"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout/Placing Order"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodOnCart"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodAndPlaceOrder"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Contact Us"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Create company"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Create user"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"createCustomer"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Forgot password"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Login"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"generateCustomerToken"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Payflow Pro"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodOnCart"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodAndPlaceOrder"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Send to Friend Form"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sendEmailToFriend"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Share Wishlist Form"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")))),(0,d.mdx)("h2",{id:"recaptcha"},"reCAPTCHA"),(0,d.mdx)("p",null,"The following table lists the forms that can be configured to require reCAPTCHA. Go to ",(0,d.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,d.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,d.mdx)("strong",{parentName:"p"},"Security")," > ",(0,d.mdx)("strong",{parentName:"p"},"Google reCAPTCHA Storefront")," > ",(0,d.mdx)("strong",{parentName:"p"},"Storefront")," to enable or disable reCAPTCHA on these forms. If reCAPTCHA is enabled, unless an integration token is provided, always specify the HTTP ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-ReCaptcha")," header and the value generated by the Google API."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Field name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mutation"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Customer Login"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"generateCustomerToken"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Forgot Password"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"changeCustomerPassword"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Create New Customer Account"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"createCustomer"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"createCustomerV2"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Edit Customer Account"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"updateCustomer"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"updateCustomerV2"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Contact Us"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Product Review"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"createProductReview"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Newsletter Subscription"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"subscribeEmailToNewsletter"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Send To Friend"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sendEmailToFriend"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for PayPal PayflowPro payment form"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"createPayflowProToken"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Braintree payment form"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Checkout/Placing Order"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodOnCart"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodAndPlaceOrder"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Coupon Codes"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"applyCouponToCart"))))),(0,d.mdx)("h2",{id:"related-topics"},"Related topics"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"../../get-started/gs-web-api-request.md"},"Construct a request")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-usage-protected-mutations-md-50fc00608b7c55b6f944.js.map