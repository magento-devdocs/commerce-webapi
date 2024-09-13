"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7187],{42703:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return m}});var a=t(58168),o=t(80045),r=(t(88763),t(15680)),i=t(83407);const p=["components"],d={},l={_frontmatter:d},s=i.A;function m(e){let{components:n}=e,t=(0,o.A)(e,p);return(0,r.mdx)(s,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-14-create-an-order-for-in-store-pickup-optional"},"Step 14. Create an order for in-store pickup (optional)"),(0,r.mdx)("p",null,"The in-store pickup feature allows shoppers to select a physical location where they can pick up an entire order. As a result, any orders that are fulfilled with this method bypass the shipping steps in the standard workflow."),(0,r.mdx)("p",null,"An order must meet the following requirements to be eligible for in-store pickup:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"All physical products must be assigned to the source that serves as the in-store pickup location."),(0,r.mdx)("li",{parentName:"ul"},"All items must be in stock.")),(0,r.mdx)("p",null,"In this step, we will create a second order from the same customer. In ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/create-sources/"},"Step 2. Create sources"),", we created three stores in the New York City area. The customer will be able to choose from these stores when she selects a pickup location. We will skip some of the steps we performed earlier that provides information we already know."),(0,r.mdx)("h2",{id:"create-a-new-cart"},"Create a new cart"),(0,r.mdx)("p",null,"We must create a new cart for the customer."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <customer_token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("p",null,"None"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"The response is the ",(0,r.mdx)("inlineCode",{parentName:"p"},"quoteId"),": 6"),(0,r.mdx)("h2",{id:"add-products-to-the-new-cart"},"Add products to the new cart"),(0,r.mdx)("p",null,"This time, we will add two Voyage Yoga Bags (",(0,r.mdx)("inlineCode",{parentName:"p"},"24-WB01"),")."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine/items")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <customer_token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "cartItem": {\n    "sku": "24-WB01",\n    "qty": 2,\n    "quote_id": "6"\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "item_id": 11,\n    "sku": "24-WB01",\n    "qty": 2,\n    "name": "Voyage Yoga Bag",\n    "price": 32,\n    "product_type": "simple",\n    "quote_id": "6"\n}\n')),(0,r.mdx)("h2",{id:"search-for-pickup-locations"},"Search for pickup locations"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/in-store-pickup/pickup-locations")," endpoint searches for locations, given a city name or postal code and a radius, in kilometers. You must also specify the sales channel code to search in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"scopeCode")," parameter. The endpoint is described in detail in the ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/inventory/in-store-pickup/"},"In-Store Pickup")," reference topic."),(0,r.mdx)("p",null,"In this example, we will search for locations within 50 km of New York, New York that are pickup locations for product ",(0,r.mdx)("inlineCode",{parentName:"p"},"24-WB01"),"."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET http://<host>/rest/default/V1/inventory/in-store-pickup/pickup-locations/?\nsearchRequest[area][radius]=50&\nsearchRequest[area][searchTerm]=New%20York&\nsearchRequest[scopeCode]=base&\nsearchRequest[extensionAttributes][productsInfo][0][sku]=24-WB01")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("p",null,"Not applicable"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"The endpoint returns the Manhattan, Brooklyn, and Long Island stores. The Northeast warehouse is within the specified radius, but it is not listed, because it is not a pickup location."),(0,r.mdx)("p",null,"In the previous step, we transferred the entire stock of Voyage Yoga Bags from the Long Island (",(0,r.mdx)("inlineCode",{parentName:"p"},"huntington"),") store to the Northeast warehouse. Although the store is out of stock locally, it can still be used as a pick-up location."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "pickup_location_code": "manhattan",\n            "name": "Manhattan Store",\n            "contact_name": "Kiara Smith",\n            "description": "Greenwich Village, Manhattan",\n            "latitude": 40.7346,\n            "longitude": -73.99849,\n            "country_id": "US",\n            "region_id": 43,\n            "region": "New York",\n            "city": "New York",\n            "street": "70 W. 10th St",\n            "postcode": "10011",\n            "phone": "555 838-4500"\n        },\n        {\n            "pickup_location_code": "brooklyn",\n            "name": "Brooklyn Store",\n            "contact_name": "Tai Hozie",\n            "description": "Williamsburg, Brooklyn",\n            "latitude": 40.71007,\n            "longitude": -73.95716,\n            "country_id": "US",\n            "region_id": 43,\n            "region": "New York",\n            "city": "Brooklyn",\n            "street": "263 S 4th St",\n            "postcode": "11211",\n            "phone": "555 737-8088"\n        },\n        {\n            "pickup_location_code": "huntington",\n            "name": "Long Island Store",\n            "contact_name": "Leslie Arzy",\n            "description": "Huntington, Long Island",\n            "latitude": 40.87251,\n            "longitude": -73.429352,\n            "country_id": "US",\n            "region_id": 43,\n            "region": "New York",\n            "city": "Huntington",\n            "street": "55 Gerard St,",\n            "postcode": "11743",\n            "phone": "555 939-4444"\n        }\n    ],\n    "search_request": {\n        "area": {\n            "radius": 50,\n            "search_term": "New York"\n        },\n        "current_page": 1,\n        "scope_type": "website",\n        "scope_code": "base",\n        "extension_attributes": {\n            "products_info": [\n                {\n                    "sku": "24-WB01"\n                }\n            ]\n        }\n    },\n    "total_count": 3\n}\n')),(0,r.mdx)("h2",{id:"set-the-shipping-and-billing-information"},"Set the shipping and billing information"),(0,r.mdx)("p",null,"The customer has chosen to pick up the order at the Brooklyn store. Once again, we will use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST /V1/carts/mine/shipping-information")," endpoint to set the shipping and billing information. This time we will make the following changes to the payload:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The shipping address is that of the Brooklyn store but includes the customer's first and last name to help the store personnel identify who placed the order. The shipping address also includes the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pickup_location_code")," extension attribute.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The billing address includes the customer's billing address ID. In ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/create-customer/"},"Step 6. Create a customer and generate a customer token"),", the ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST /V1/customers")," endpoint returned an address ID of ",(0,r.mdx)("inlineCode",{parentName:"p"},"2"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"shipping_method_code")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"shipping_carrier_code")," attributes are set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"pickup")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"instore"),", respectively."))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine/shipping-information")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <customer_token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"addressInformation": {\n  "shipping_address": {\n    "region_id": 43,\n    "country_id": "US",\n    "street": [\n      "263 S 4th St"\n    ],\n    "postcode": "11211",\n    "city": "Brooklyn",\n    "firstname": "Jane",\n    "lastname": "Doe",\n    "telephone": "516-555-1111",\n    "extension_attributes": {\n      "pickup_location_code": "brooklyn"\n    }\n  },\n    "billing_address": {\n      "id": 2\n    },\n    "shipping_method_code": "pickup",\n    "shipping_carrier_code": "instore"\n   }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "payment_methods": [\n        {\n            "code": "checkmo",\n            "title": "Check / Money order"\n        },\n        {\n            "code": "banktransfer",\n            "title": "Bank Transfer Payment"\n        }\n    ],\n    "totals": {\n        "grand_total": 64,\n        "base_grand_total": 64,\n        "subtotal": 64,\n        "base_subtotal": 64,\n        "discount_amount": 0,\n        "base_discount_amount": 0,\n        "subtotal_with_discount": 64,\n        "base_subtotal_with_discount": 64,\n        "shipping_amount": 0,\n        "base_shipping_amount": 0,\n        "shipping_discount_amount": 0,\n        "base_shipping_discount_amount": 0,\n        "tax_amount": 0,\n        "base_tax_amount": 0,\n        "weee_tax_applied_amount": null,\n        "shipping_tax_amount": 0,\n        "base_shipping_tax_amount": 0,\n        "subtotal_incl_tax": 64,\n        "shipping_incl_tax": 0,\n        "base_shipping_incl_tax": 0,\n        "base_currency_code": "USD",\n        "quote_currency_code": "USD",\n        "items_qty": 2,\n        "items": [\n            {\n                "item_id": 11,\n                "price": 32,\n                "base_price": 32,\n                "qty": 2,\n                "row_total": 64,\n                "base_row_total": 64,\n                "row_total_with_discount": 0,\n                "tax_amount": 0,\n                "base_tax_amount": 0,\n                "tax_percent": 0,\n                "discount_amount": 0,\n                "base_discount_amount": 0,\n                "discount_percent": 0,\n                "price_incl_tax": 32,\n                "base_price_incl_tax": 32,\n                "row_total_incl_tax": 64,\n                "base_row_total_incl_tax": 64,\n                "options": "[]",\n                "weee_tax_applied_amount": null,\n                "weee_tax_applied": null,\n                "name": "Voyage Yoga Bag"\n            }\n        ],\n        "total_segments": [\n            {\n                "code": "subtotal",\n                "title": "Subtotal",\n                "value": 64\n            },\n            {\n                "code": "giftwrapping",\n                "title": "Gift Wrapping",\n                "value": null,\n                "extension_attributes": {\n                    "gw_item_ids": [],\n                    "gw_price": "0.0000",\n                    "gw_base_price": "0.0000",\n                    "gw_items_price": "0.0000",\n                    "gw_items_base_price": "0.0000",\n                    "gw_card_price": "0.0000",\n                    "gw_card_base_price": "0.0000"\n                }\n            },\n            {\n                "code": "shipping",\n                "title": "Shipping & Handling (In-Store Pickup Delivery - Brooklyn (Williamsburg) Store)",\n                "value": 0\n            },\n            {\n                "code": "tax",\n                "title": "Tax",\n                "value": 0,\n                "extension_attributes": {\n                    "tax_grandtotal_details": []\n                }\n            },\n            {\n                "code": "grand_total",\n                "title": "Grand Total",\n                "value": 64,\n                "area": "footer"\n            },\n            {\n                "code": "customerbalance",\n                "title": "Store Credit",\n                "value": -0\n            },\n            {\n                "code": "reward",\n                "title": "0 Reward points",\n                "value": -0\n            }\n        ],\n        "extension_attributes": {\n            "reward_points_balance": 0,\n            "reward_currency_amount": 0,\n            "base_reward_currency_amount": 0\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"send-payment-information"},"Send payment information"),(0,r.mdx)("p",null,"Send the payment information to create an order."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine/payment-information")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <customer token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "paymentMethod": {\n    "method": "banktransfer"\n  },\n  "billing_address": {\n    "email": "jdoe@example.com",\n    "region": "New York",\n    "region_id": 43,\n    "region_code": "NY",\n    "country_id": "US",\n    "street": ["160 1st St."],\n    "postcode": "11501",\n    "city": "Mineola",\n    "telephone": "516-555-1111",\n    "firstname": "Jane",\n    "lastname": "Doe"\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"An ",(0,r.mdx)("inlineCode",{parentName:"p"},"orderID"),", such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"6")),(0,r.mdx)("h2",{id:"mark-the-order-as-ready-for-pick-up"},"Mark the order as ready for pick-up"),(0,r.mdx)("p",null,"When the order is ready to be picked up, send a notification email to the customer. The payload contains an array of order IDs."),(0,r.mdx)("p",null,"This call creates a shipment."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/order/notify-orders-are-ready-for-pickup")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <admin token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "orderIds": [\n    6\n  ]\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"The response includes the success status as well as an array of error messages for each failed order."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "successful": true,\n  "failed": []\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-in-store-pickup-md-e155c97b09d902c5a11e.js.map