"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5847],{77857:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t=a(58168),o=a(80045),p=(a(88763),a(15680)),r=a(83407);const m=["components"],d={},l={_frontmatter:d},i=r.A;function u(e){let{components:n}=e,a=(0,o.A)(e,m);return(0,p.mdx)(i,(0,t.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"step-7-apply-a-coupon"},"Step 7. Apply a coupon"),(0,p.mdx)("p",null,"Use ",(0,p.mdx)("a",{parentName:"p",href:"apply-coupon.md"},"applyCouponToCart")," to apply a discount coupon to the specified ",(0,p.mdx)("inlineCode",{parentName:"p"},"cart_id"),"."),(0,p.mdx)("p",null,(0,p.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," is the unique shopping cart ID from ",(0,p.mdx)("a",{parentName:"p",href:"../../tutorials/checkout/add-product-to-cart.md"},"Step 2. Create empty cart"),"."),(0,p.mdx)("p",null,(0,p.mdx)("inlineCode",{parentName:"p"},"{ COUPON_CODE }")," is an existing coupon code. It cannot be generated with GraphQL."),(0,p.mdx)("h2",{id:"create-a-coupon"},"Create a coupon"),(0,p.mdx)("p",null,"Coupons must be generated from the Admin."),(0,p.mdx)("p",null,"Creating a coupon is described in ",(0,p.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/marketing/price-rules-cart-coupon.html"},"Coupon Codes"),".\nFor the purpose of this tutorial, create a Cart Price Rule with:"),(0,p.mdx)("p",null,"For ",(0,p.mdx)("strong",{parentName:"p"},"Rule Information"),":"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Rule Name"),": Watch Coupon"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Active"),": Yes"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Websites"),": Main Website"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Customer Groups"),": Select all of them"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Coupon"),": Specific Coupon"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Coupon Code"),": Watch20"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Uses per Coupon"),": 5"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Uses per Customer"),": 5")),(0,p.mdx)("p",null,"For ",(0,p.mdx)("strong",{parentName:"p"},"Actions")),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Apply"),": Percent of product price discount"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Discount Amount"),": 20")),(0,p.mdx)("p",null,"Save this rule.\nThe ",(0,p.mdx)("strong",{parentName:"p"},"Coupon Code")," value is the name of the coupon the end user enters.\nTo verify the coupon works, create an order with a product using guest checkout.\nWhen checking out, enter ",(0,p.mdx)("inlineCode",{parentName:"p"},"Watch20")," in the Apply Discount Code field and press the Apply Discount button.\nThe discount should be applied in the cart."),(0,p.mdx)("p",null,"When the coupon is set up, we can apply it via GraphQL. Replace the ",(0,p.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," with your generated ID and replace the ",(0,p.mdx)("inlineCode",{parentName:"p"},"{ COUPON_CODE }")," with ",(0,p.mdx)("inlineCode",{parentName:"p"},"Watch20")," below."),(0,p.mdx)("p",null,"For logged-in customers, send the customer's authorization token in the ",(0,p.mdx)("inlineCode",{parentName:"p"},"Authorization")," parameter of the header. See ",(0,p.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},"Authorization tokens")," for more information."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Request:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  applyCouponToCart(\n    input: {\n      cart_id: "{ CART_ID }"\n      coupon_code: "{ COUPON_CODE }"\n    }\n  ) {\n    cart {\n      applied_coupons {\n        code\n      }\n    }\n  }\n}\n')),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Response:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "applyCouponToCart": {\n      "cart": {\n        "applied_coupons": [\n          {\n            "code": "Watch20"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,p.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Sign in as a customer to the website using the email ",(0,p.mdx)("inlineCode",{parentName:"p"},"john.doe@example.com")," and password ",(0,p.mdx)("inlineCode",{parentName:"p"},"b1b2b3l@w+"),".")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Go to Checkout.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"The discount is displayed in the Order Summary block."))),(0,p.mdx)("h2",{id:"remove-a-coupon"},"Remove a coupon"),(0,p.mdx)("p",null,"Use ",(0,p.mdx)("a",{parentName:"p",href:"../../schema/cart/mutations/remove-coupon.md"},"removeCouponFromCart")," to remove a discount coupon from the shopping cart."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Request:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  removeCouponFromCart(input: { cart_id: "{ CART_ID }" }) {\n    cart {\n      applied_coupons {\n        code\n      }\n    }\n  }\n}\n')),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Response:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "removeCouponFromCart": {\n      "cart": {\n        "applied_coupons": {\n          "applied_coupon": null\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-apply-coupon-md-7a821570bfc2469c355c.js.map