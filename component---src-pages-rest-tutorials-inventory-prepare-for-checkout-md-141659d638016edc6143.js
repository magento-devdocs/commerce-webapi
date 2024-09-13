"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6315],{64401:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return s},default:function(){return m}});var a=t(58168),i=t(80045),o=(t(88763),t(15680)),l=t(83407);const p=["components"],s={},r={_frontmatter:s},d=l.A;function m(n){let{components:e}=n,t=(0,i.A)(n,p);return(0,o.mdx)(d,(0,a.A)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-8-prepare-for-checkout"},"Step 8. Prepare for checkout"),(0,o.mdx)("p",null,"Now that all the items have been added to the cart, we can prepare the quote for checkout. This process includes the following steps:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Estimate shipping costs"),(0,o.mdx)("li",{parentName:"ul"},"Set shipping and billing information")),(0,o.mdx)("h3",{id:"estimate-shipping-costs"},"Estimate shipping costs"),(0,o.mdx)("p",null,"Adobe Commerce calculates shipping costs for each shipping method that can be applied to the order. In this tutorial, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"flatrate")," ($5 per item) shipping method is active."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine/estimate-shipping-methods")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scope:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Headers:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bearer <customer token>")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Payload:")),(0,o.mdx)("p",null,"The payload contains the shipping address."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{  "address": {\n      "region": "New York",\n      "region_id": 43,\n      "region_code": "NY",\n      "country_id": "US",\n      "street": [\n        "160 1st St."\n        ],\n      "postcode": "11501",\n      "city": "Mineola",\n      "firstname": "Jane",\n      "lastname": "Doe",\n      "customer_id": 5,\n      "email": "jdoe@example.com",\n      "telephone": "(516) 555-1111",\n      "same_as_billing": 1\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("p",null,"The cost for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"flatrate")," shipping method is $300 (60 items x $5 each). The downloadable item does not have a shipping charge because it is not a physical product."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "carrier_code": "flatrate",\n        "method_code": "flatrate",\n        "carrier_title": "Flat Rate",\n        "method_title": "Fixed",\n        "amount": 300,\n        "base_amount": 300,\n        "available": true,\n        "error_message": "",\n        "price_excl_tax": 300,\n        "price_incl_tax": 300\n    }\n]\n')),(0,o.mdx)("h3",{id:"set-shipping-and-billing-information"},"Set shipping and billing information"),(0,o.mdx)("p",null,"In this call, you specify the shipping and billing addresses, as well as the selected ",(0,o.mdx)("inlineCode",{parentName:"p"},"carrier_code")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"method_code"),". The customer has selected the Flat Rate shipping method."),(0,o.mdx)("p",null,"Commerce returnsa list of payment options and calculates the order totals."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine/shipping-information")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scope:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Headers:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bearer <customer token>")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"addressInformation": {\n    "shipping_address": {\n        "region": "New York",\n        "region_id": 43,\n        "region_code": "NY",\n        "country_id": "US",\n        "street": [\n            "160 1st St."\n        ],\n        "postcode": "11501",\n        "city": "Mineola",\n        "firstname": "Jane",\n        "lastname": "Doe",\n        "email": "jdoe@example.com",\n        "telephone": "516-555-1111"\n    },\n    "billing_address": {\n        "region": "New York",\n        "region_id": 43,\n        "region_code": "NY",\n        "country_id": "US",\n        "street": [\n            "160 1st St."\n        ],\n        "postcode": "11501",\n        "city": "Mineola",\n        "firstname": "Jane",\n        "lastname": "Doe",\n        "email": "jdoe@example.com",\n        "telephone": "516-555-1111"\n    },\n    "shipping_carrier_code": "flatrate",\n    "shipping_method_code": "flatrate"\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("p",null,"The subtotal of the order is $2022, and shipping charges are $300. The grand total is $2322."),(0,o.mdx)("p",null,"The available payment methods are ",(0,o.mdx)("inlineCode",{parentName:"p"},"banktransfer")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"checkmo"),". The customer will specify a payment method in the next step."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "payment_methods": [\n        {\n            "code": "checkmo",\n            "title": "Check / Money order"\n        },\n        {\n            "code": "banktransfer",\n            "title": "Bank Transfer Payment"\n        }\n    ],\n    "totals": {\n        "grand_total": 1917.6,\n        "base_grand_total": 1917.6,\n        "subtotal": 2022,\n        "base_subtotal": 2022,\n        "discount_amount": -404.4,\n        "base_discount_amount": -404.4,\n        "subtotal_with_discount": 1617.6,\n        "base_subtotal_with_discount": 1617.6,\n        "shipping_amount": 300,\n        "base_shipping_amount": 300,\n        "shipping_discount_amount": 0,\n        "base_shipping_discount_amount": 0,\n        "tax_amount": 0,\n        "base_tax_amount": 0,\n        "weee_tax_applied_amount": null,\n        "shipping_tax_amount": 0,\n        "base_shipping_tax_amount": 0,\n        "subtotal_incl_tax": 2022,\n        "shipping_incl_tax": 300,\n        "base_shipping_incl_tax": 300,\n        "base_currency_code": "USD",\n        "quote_currency_code": "USD",\n        "items_qty": 61,\n        "items": [\n            {\n                "item_id": 5,\n                "price": 36,\n                "base_price": 36,\n                "qty": 20,\n                "row_total": 720,\n                "base_row_total": 720,\n                "row_total_with_discount": 0,\n                "tax_amount": 0,\n                "base_tax_amount": 0,\n                "tax_percent": 0,\n                "discount_amount": 144,\n                "base_discount_amount": 144,\n                "discount_percent": 20,\n                "price_incl_tax": 36,\n                "base_price_incl_tax": 36,\n                "row_total_incl_tax": 720,\n                "base_row_total_incl_tax": 720,\n                "options": "[]",\n                "weee_tax_applied_amount": null,\n                "weee_tax_applied": null,\n                "name": "Driven Backpack"\n            },\n            {\n                "item_id": 6,\n                "price": 32,\n                "base_price": 32,\n                "qty": 40,\n                "row_total": 1280,\n                "base_row_total": 1280,\n                "row_total_with_discount": 0,\n                "tax_amount": 0,\n                "base_tax_amount": 0,\n                "tax_percent": 0,\n                "discount_amount": 256,\n                "base_discount_amount": 256,\n                "discount_percent": 20,\n                "price_incl_tax": 32,\n                "base_price_incl_tax": 32,\n                "row_total_incl_tax": 1280,\n                "base_row_total_incl_tax": 1280,\n                "options": "[]",\n                "weee_tax_applied_amount": null,\n                "weee_tax_applied": null,\n                "name": "Voyage Yoga Bag"\n            },\n            {\n                "item_id": 9,\n                "price": 22,\n                "base_price": 22,\n                "qty": 1,\n                "row_total": 22,\n                "base_row_total": 22,\n                "row_total_with_discount": 0,\n                "tax_amount": 0,\n                "base_tax_amount": 0,\n                "tax_percent": 0,\n                "discount_amount": 4.4,\n                "base_discount_amount": 4.4,\n                "discount_percent": 20,\n                "price_incl_tax": 22,\n                "base_price_incl_tax": 22,\n                "row_total_incl_tax": 22,\n                "base_row_total_incl_tax": 22,\n                "options": "[{\\"value\\":\\"Yoga Adventure\\",\\"label\\":\\"Downloads\\"}]",\n                "weee_tax_applied_amount": null,\n                "weee_tax_applied": null,\n                "name": "Yoga Adventure"\n            }\n        ],\n        "total_segments": [\n            {\n                "code": "subtotal",\n                "title": "Subtotal",\n                "value": 2022\n            },\n            {\n                "code": "giftwrapping",\n                "title": "Gift Wrapping",\n                "value": null,\n                "extension_attributes": {\n                    "gw_item_ids": [],\n                    "gw_price": "0.0000",\n                    "gw_base_price": "0.0000",\n                    "gw_items_price": "0.0000",\n                    "gw_items_base_price": "0.0000",\n                    "gw_card_price": "0.0000",\n                    "gw_card_base_price": "0.0000"\n                }\n            },\n            {\n                "code": "discount",\n                "title": "Discount",\n                "value": -404.4\n            },\n            {\n                "code": "shipping",\n                "title": "Shipping & Handling (Flat Rate - Fixed)",\n                "value": 300\n            },\n            {\n                "code": "tax",\n                "title": "Tax",\n                "value": 0,\n                "extension_attributes": {\n                    "tax_grandtotal_details": []\n                }\n            },\n            {\n                "code": "grand_total",\n                "title": "Grand Total",\n                "value": 1917.6,\n                "area": "footer"\n            },\n            {\n                "code": "customerbalance",\n                "title": "Store Credit",\n                "value": -0\n            },\n            {\n                "code": "reward",\n                "title": "0 Reward points",\n                "value": -0\n            }\n        ],\n        "extension_attributes": {\n            "reward_points_balance": 0,\n            "reward_currency_amount": 0,\n            "base_reward_currency_amount": 0\n        }\n    }\n}\n')),(0,o.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,o.mdx)("p",null,"Sign in to the US store (",(0,o.mdx)("inlineCode",{parentName:"p"},"http://<host>/us"),") as the customer and go to the checkout page."),(0,o.mdx)("p",null,"The payment method is Bank Transfer, the billing and shipping addresses are displayed, and the shipping charges and shipping charges calculate and display."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-prepare-for-checkout-md-141659d638016edc6143.js.map