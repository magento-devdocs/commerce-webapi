"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6721],{79489:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return _},default:function(){return u}});var a,o=t(87462),i=t(63366),d=(t(15007),t(64983)),r=t(91515),s=["components"],_={},m=(a="InlineAlert",function(n){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",n)}),p={_frontmatter:_},l=r.Z;function u(n){var e=n.components,t=(0,i.Z)(n,s);return(0,d.mdx)(l,(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"step-7-create-an-order"},"Step 7. Create an order"),(0,d.mdx)("p",null,"The shopping cart contains three items totaling $108. The shipping charges are $10, making the grand total $118. We're now ready to convert the quote to an order."),(0,d.mdx)("h3",{id:"send-payment-information"},"Send payment information"),(0,d.mdx)("p",null,"When you submit payment information, Adobe Commerce creates an order and sends an order confirmation to the customer. Since we are using an offline payment method in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information."),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"V1/guest-carts/<cartId>/payment-information")," endpoint to set the payment information on behalf of a guest. Do not include an authorization token.\nYou must include the ",(0,d.mdx)("inlineCode",{parentName:"p"},"email")," attribute in the payload at the same level as ",(0,d.mdx)("inlineCode",{parentName:"p"},"paymentMethod")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"billing_address"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/carts/mine/payment-information")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Headers:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <customer token>")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "paymentMethod": {\n    "method": "banktransfer"\n  },\n  "billing_address": {\n    "email": "jdoe@example.com",\n    "region": "New York",\n    "region_id": 43,\n    "region_code": "NY",\n    "country_id": "US",\n    "street": [\n      "123 Oak Ave"\n    ],\n    "postcode": "10577",\n    "city": "Purchase",\n    "telephone": "512-555-1111",\n    "firstname": "Jane",\n    "lastname": "Doe"\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("p",null,"An ",(0,d.mdx)("inlineCode",{parentName:"p"},"orderID"),", such as ",(0,d.mdx)("inlineCode",{parentName:"p"},"3"),"."),(0,d.mdx)("h3",{id:"review-the-order-as-an-admin"},"Review the order as an admin"),(0,d.mdx)("p",null,"When you request an order object, the response contains full details about the order, including customer information, payment details, as well as totals and subtotals for the order and each individual item."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/orders/3")),(0,d.mdx)("p",null,"where ",(0,d.mdx)("inlineCode",{parentName:"p"},"3")," is the ",(0,d.mdx)("inlineCode",{parentName:"p"},"orderid")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Headers:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <administrator token>")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Payload:")),(0,d.mdx)("p",null,"Not applicable"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("details",null,(0,d.mdx)("summary",null,(0,d.mdx)("b",null,"Show code sample")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_rule_ids": "1",\n  "base_currency_code": "USD",\n  "base_discount_amount": 0,\n  "base_grand_total": 165,\n  "base_discount_tax_compensation_amount": 0,\n  "base_shipping_amount": 5,\n  "base_shipping_discount_amount": 0,\n  "base_shipping_incl_tax": 5,\n  "base_shipping_tax_amount": 0,\n  "base_subtotal": 160,\n  "base_subtotal_incl_tax": 160,\n  "base_tax_amount": 0,\n  "base_total_due": 165,\n  "base_to_global_rate": 1,\n  "base_to_order_rate": 1,\n  "billing_address_id": 6,\n  "created_at": "2017-08-21 22:22:19",\n  "customer_email": "jdoe@example.com",\n  "customer_firstname": "Jane",\n  "customer_group_id": 1,\n  "customer_id": 3,\n  "customer_is_guest": 0,\n  "customer_lastname": "Doe",\n  "customer_note_notify": 1,\n  "discount_amount": 0,\n  "email_sent": 1,\n  "entity_id": 3,\n  "global_currency_code": "USD",\n  "grand_total": 165,\n  "discount_tax_compensation_amount": 0,\n  "increment_id": "000000003",\n  "is_virtual": 0,\n  "order_currency_code": "USD",\n  "protect_code": "61f76d",\n  "quote_id": 4,\n  "shipping_amount": 5,\n  "shipping_description": "Best Way - Table Rate",\n  "shipping_discount_amount": 0,\n  "shipping_discount_tax_compensation_amount": 0,\n  "shipping_incl_tax": 5,\n  "shipping_tax_amount": 0,\n  "state": "new",\n  "status": "pending",\n  "store_currency_code": "USD",\n  "store_id": 1,\n  "store_name": "Main Website\\nMain Website Store\\n",\n  "store_to_base_rate": 0,\n  "store_to_order_rate": 0,\n  "subtotal": 160,\n  "subtotal_incl_tax": 160,\n  "tax_amount": 0,\n  "total_due": 165,\n  "total_item_count": 7,\n  "total_qty_ordered": 4,\n  "updated_at": "2017-08-21 22:22:20",\n  "weight": 2,\n  "items": [\n    {\n      "amount_refunded": 0,\n      "applied_rule_ids": "1",\n      "base_amount_refunded": 0,\n      "base_discount_amount": 0,\n      "base_discount_invoiced": 0,\n      "base_discount_tax_compensation_amount": 0,\n      "base_original_price": 22,\n      "base_price": 22,\n      "base_price_incl_tax": 22,\n      "base_row_invoiced": 0,\n      "base_row_total": 22,\n      "base_row_total_incl_tax": 22,\n      "base_tax_amount": 0,\n      "base_tax_invoiced": 0,\n      "created_at": "2017-08-21 22:22:19",\n      "discount_amount": 0,\n      "discount_invoiced": 0,\n      "discount_percent": 0,\n      "free_shipping": 0,\n      "discount_tax_compensation_amount": 0,\n      "is_qty_decimal": 0,\n      "is_virtual": 0,\n      "item_id": 3,\n      "name": "Radiant Tee-M-Orange",\n      "no_discount": 0,\n      "order_id": 3,\n      "original_price": 22,\n      "price": 22,\n      "price_incl_tax": 22,\n      "product_id": 1553,\n      "product_type": "simple",\n      "qty_canceled": 0,\n      "qty_invoiced": 0,\n      "qty_ordered": 1,\n      "qty_refunded": 0,\n      "qty_shipped": 0,\n      "quote_item_id": 6,\n      "row_invoiced": 0,\n      "row_total": 22,\n      "row_total_incl_tax": 22,\n      "row_weight": 1,\n      "sku": "WS12-M-Orange",\n      "store_id": 1,\n      "tax_amount": 0,\n      "tax_invoiced": 0,\n      "tax_percent": 0,\n      "updated_at": "2017-08-21 22:22:19",\n      "weight": 1\n    },\n    ...\n  ],\n  "billing_address": {\n    "address_type": "billing",\n    "city": "Purchase",\n    "country_id": "US",\n    "email": "jdoe@example.com",\n    "entity_id": 6,\n    "firstname": "Jane",\n    "lastname": "Doe",\n    "parent_id": 3,\n    "postcode": "10577",\n    "region": "New York",\n    "region_code": "NY",\n    "region_id": 43,\n    "street": [\n      "123 Oak Ave"\n    ],\n    "telephone": "512-555-1111"\n  },\n  "payment": {\n    "account_status": null,\n    "additional_information": [\n      "Bank Transfer Payment",\n      ""\n    ],\n    "amount_ordered": 165,\n    "base_amount_ordered": 165,\n    "base_shipping_amount": 5,\n    "cc_last4": null,\n    "entity_id": 3,\n    "method": "banktransfer",\n    "parent_id": 3,\n    "shipping_amount": 5\n  },\n  "status_histories": [],\n  "extension_attributes": {\n    "shipping_assignments": [\n      {\n        "shipping": {\n          "address": {\n            "address_type": "shipping",\n            "city": "Purchase",\n            "country_id": "US",\n            "email": "jdoe@example.com",\n            "entity_id": 5,\n            "firstname": "Jane",\n            "lastname": "Doe",\n            "parent_id": 3,\n            "postcode": "10577",\n            "region": "New York",\n            "region_code": "NY",\n            "region_id": 43,\n            "street": [\n              "123 Oak Ave"\n            ],\n            "telephone": "512-555-1111"\n          },\n          "method": "tablerate_bestway",\n          "total": {\n            "base_shipping_amount": 5,\n            "base_shipping_discount_amount": 0,\n            "base_shipping_incl_tax": 5,\n            "base_shipping_tax_amount": 0,\n            "shipping_amount": 5,\n            "shipping_discount_amount": 0,\n            "shipping_discount_tax_compensation_amount": 0,\n            "shipping_incl_tax": 5,\n            "shipping_tax_amount": 0\n          }\n        },\n        "items": [\n          {\n            "amount_refunded": 0,\n            "applied_rule_ids": "1",\n            "base_amount_refunded": 0,\n            "base_discount_amount": 0,\n            "base_discount_invoiced": 0,\n            "base_discount_tax_compensation_amount": 0,\n            "base_original_price": 22,\n            "base_price": 22,\n            "base_price_incl_tax": 22,\n            "base_row_invoiced": 0,\n            "base_row_total": 22,\n            "base_row_total_incl_tax": 22,\n            "base_tax_amount": 0,\n            "base_tax_invoiced": 0,\n            "created_at": "2017-08-21 22:22:19",\n            "discount_amount": 0,\n            "discount_invoiced": 0,\n            "discount_percent": 0,\n            "free_shipping": 0,\n            "discount_tax_compensation_amount": 0,\n            "is_qty_decimal": 0,\n            "is_virtual": 0,\n            "item_id": 3,\n            "name": "Radiant Tee-M-Orange",\n            "no_discount": 0,\n            "order_id": 3,\n            "original_price": 22,\n            "price": 22,\n            "price_incl_tax": 22,\n            "product_id": 1553,\n            "product_type": "simple",\n            "qty_canceled": 0,\n            "qty_invoiced": 0,\n            "qty_ordered": 1,\n            "qty_refunded": 0,\n            "qty_shipped": 0,\n            "quote_item_id": 6,\n            "row_invoiced": 0,\n            "row_total": 22,\n            "row_total_incl_tax": 22,\n            "row_weight": 1,\n            "sku": "WS12-M-Orange",\n            "store_id": 1,\n            "tax_amount": 0,\n            "tax_invoiced": 0,\n            "tax_percent": 0,\n            "updated_at": "2017-08-21 22:22:19",\n            "weight": 1\n          },\n          ...\n        ]\n      }\n    ]\n  }\n}\n'))),(0,d.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Log in to the Luma store as the customer. The dashboard shows the order."),(0,d.mdx)("li",{parentName:"ol"},"Log in to Admin. Click ",(0,d.mdx)("strong",{parentName:"li"},"Sales")," > ",(0,d.mdx)("strong",{parentName:"li"},"Orders"),". The order is displayed in the grid. Its status is Pending.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-orders-order-create-order-md-2e993c079aa336006cf1.js.map