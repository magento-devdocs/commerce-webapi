"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2090],{50194:function(n,t,e){e.r(t),e.d(t,{_frontmatter:function(){return d},default:function(){return m}});var a=e(58168),o=e(80045),i=(e(88763),e(15680)),_=e(83407);const r=["components"],d={},s={_frontmatter:d},p=_.A;function m(n){let{components:t}=n,e=(0,o.A)(n,r);return(0,i.mdx)(p,(0,a.A)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"step-8-create-an-invoice"},"Step 8. Create an invoice"),(0,i.mdx)("p",null,"You create an invoice after you receive payment for an order. In this example, the order was paid offline via a bank transfer. Therefore, you must tell Adobe Commerce that payment for the order has been captured."),(0,i.mdx)("h3",{id:"capture-payment"},"Capture payment"),(0,i.mdx)("p",null,"This example creates a full invoice. You can create a partial invoice by adding to the payload an array of items to be invoiced."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/order/3/invoice")),(0,i.mdx)("p",null,"where ",(0,i.mdx)("inlineCode",{parentName:"p"},"3")," is the ",(0,i.mdx)("inlineCode",{parentName:"p"},"orderid")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Headers:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"<administrator token>")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Payload:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "capture": true,\n  "notify": true\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"An invoice ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),", such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"3"),"."),(0,i.mdx)("h3",{id:"view-the-invoice"},"View the invoice"),(0,i.mdx)("p",null,"An invoice is structurally similar to an order, but an order contains more details."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/invoices/3")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Headers:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <administrator token>")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Payload:")),(0,i.mdx)("p",null,"Not applicable"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"You will use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"order_item_id")," values to create a shipment in the next step."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,(0,i.mdx)("b",null,"Show code sample")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "base_currency_code": "USD",\n  "base_discount_amount": 0,\n  "base_grand_total": 165,\n  "base_discount_tax_compensation_amount": 0,\n  "base_shipping_amount": 5,\n  "base_shipping_incl_tax": 5,\n  "base_shipping_tax_amount": 0,\n  "base_subtotal": 160,\n  "base_subtotal_incl_tax": 160,\n  "base_tax_amount": 0,\n  "base_to_global_rate": 1,\n  "base_to_order_rate": 1,\n  "billing_address_id": 6,\n  "can_void_flag": 0,\n  "created_at": "2017-08-21 22:36:02",\n  "discount_amount": 0,\n  "email_sent": 1,\n  "entity_id": 3,\n  "global_currency_code": "USD",\n  "grand_total": 165,\n  "discount_tax_compensation_amount": 0,\n  "increment_id": "000000003",\n  "order_currency_code": "USD",\n  "order_id": 3,\n  "shipping_address_id": 5,\n  "shipping_amount": 5,\n  "shipping_discount_tax_compensation_amount": 0,\n  "shipping_incl_tax": 5,\n  "shipping_tax_amount": 0,\n  "state": 2,\n  "store_currency_code": "USD",\n  "store_id": 1,\n  "store_to_base_rate": 0,\n  "store_to_order_rate": 0,\n  "subtotal": 160,\n  "subtotal_incl_tax": 160,\n  "tax_amount": 0,\n  "total_qty": 9,\n  "updated_at": "2017-08-21 22:36:03",\n  "items": [\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 22,\n      "base_price_incl_tax": 22,\n      "base_row_total": 22,\n      "base_row_total_incl_tax": 22,\n      "base_tax_amount": 0,\n      "entity_id": 3,\n      "discount_tax_compensation_amount": 0,\n      "name": "Radiant Tee-M-Orange",\n      "parent_id": 3,\n      "price": 22,\n      "price_incl_tax": 22,\n      "product_id": 1553,\n      "row_total": 22,\n      "row_total_incl_tax": 22,\n      "sku": "WS12-M-Orange",\n      "tax_amount": 0,\n      "order_item_id": 3,\n      "qty": 1\n    },\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 18,\n      "base_price_incl_tax": 18,\n      "base_row_total": 18,\n      "base_row_total_incl_tax": 18,\n      "base_tax_amount": 0,\n      "entity_id": 4,\n      "discount_tax_compensation_amount": 0,\n      "name": "Advanced Pilates & Yoga (Strength)",\n      "parent_id": 3,\n      "price": 18,\n      "price_incl_tax": 18,\n      "product_id": 49,\n      "row_total": 18,\n      "row_total_incl_tax": 18,\n      "sku": "240-LV08",\n      "tax_amount": 0,\n      "order_item_id": 4,\n      "qty": 1\n    },\n    {\n      "base_price": 68,\n      "base_price_incl_tax": 68,\n      "entity_id": 5,\n      "name": "Sprite Yoga Companion Kit",\n      "parent_id": 3,\n      "price": 68,\n      "price_incl_tax": 68,\n      "product_id": 51,\n      "sku": "24-WG080-24-WG084-24-WG088-24-WG082-blue-24-WG086",\n      "order_item_id": 5,\n      "qty": 1\n    },\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 27,\n      "base_price_incl_tax": 27,\n      "base_row_total": 27,\n      "base_row_total_incl_tax": 27,\n      "base_tax_amount": 0,\n      "entity_id": 6,\n      "discount_tax_compensation_amount": 0,\n      "name": "Sprite Stasis Ball 65 cm",\n      "parent_id": 3,\n      "price": 27,\n      "price_incl_tax": 27,\n      "product_id": 29,\n      "row_total": 27,\n      "row_total_incl_tax": 27,\n      "sku": "24-WG082-blue",\n      "tax_amount": 0,\n      "order_item_id": 6,\n      "qty": 1\n    },\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 5,\n      "base_price_incl_tax": 5,\n      "base_row_total": 5,\n      "base_row_total_incl_tax": 5,\n      "base_tax_amount": 0,\n      "entity_id": 7,\n      "discount_tax_compensation_amount": 0,\n      "name": "Sprite Foam Yoga Brick",\n      "parent_id": 3,\n      "price": 5,\n      "price_incl_tax": 5,\n      "product_id": 21,\n      "row_total": 5,\n      "row_total_incl_tax": 5,\n      "sku": "24-WG084",\n      "tax_amount": 0,\n      "order_item_id": 7,\n      "qty": 1\n    },\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 17,\n      "base_price_incl_tax": 17,\n      "base_row_total": 17,\n      "base_row_total_incl_tax": 17,\n      "base_tax_amount": 0,\n      "entity_id": 8,\n      "discount_tax_compensation_amount": 0,\n      "name": "Sprite Yoga Strap 8 foot",\n      "parent_id": 3,\n      "price": 17,\n      "price_incl_tax": 17,\n      "product_id": 34,\n      "row_total": 17,\n      "row_total_incl_tax": 17,\n      "sku": "24-WG086",\n      "tax_amount": 0,\n      "order_item_id": 8,\n      "qty": 1\n    },\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 19,\n      "base_price_incl_tax": 19,\n      "base_row_total": 19,\n      "base_row_total_incl_tax": 19,\n      "base_tax_amount": 0,\n      "entity_id": 9,\n      "discount_tax_compensation_amount": 0,\n      "name": "Sprite Foam Roller",\n      "parent_id": 3,\n      "price": 19,\n      "price_incl_tax": 19,\n      "product_id": 22,\n      "row_total": 19,\n      "row_total_incl_tax": 19,\n      "sku": "24-WG088",\n      "tax_amount": 0,\n      "order_item_id": 9,\n      "qty": 1\n    },\n    {\n      "base_discount_tax_compensation_amount": 0,\n      "base_price": 52,\n      "base_price_incl_tax": 52,\n      "base_row_total": 52,\n      "base_row_total_incl_tax": 52,\n      "base_tax_amount": 0,\n      "entity_id": 10,\n      "discount_tax_compensation_amount": 0,\n      "name": "Chaz Kangeroo Hoodie",\n      "parent_id": 3,\n      "price": 52,\n      "price_incl_tax": 52,\n      "product_id": 67,\n      "row_total": 52,\n      "row_total_incl_tax": 52,\n      "sku": "MH01-S-Gray",\n      "tax_amount": 0,\n      "order_item_id": 10,\n      "qty": 1\n    },\n    {\n      "base_price": 0,\n      "entity_id": 11,\n      "name": "Chaz Kangeroo Hoodie-S-Gray",\n      "parent_id": 3,\n      "price": 0,\n      "product_id": 56,\n      "sku": "MH01-S-Gray",\n      "order_item_id": 11,\n      "qty": 1\n    }\n  ],\n  "comments": []\n}\n'))),(0,i.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,i.mdx)("p",null,"Log in to Admin. Click ",(0,i.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,i.mdx)("strong",{parentName:"p"},"Invoices"),". The invoice is displayed in the grid. The status is Paid. Then click ",(0,i.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,i.mdx)("strong",{parentName:"p"},"Orders"),". The status is Processing."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-orders-order-create-invoice-md-bb998acf9dfe5289b843.js.map