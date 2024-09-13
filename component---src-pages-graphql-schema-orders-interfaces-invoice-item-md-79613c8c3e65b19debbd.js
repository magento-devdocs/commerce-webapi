"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1975],{43603:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return m},default:function(){return c}});var i=t(58168),a=t(80045),r=(t(88763),t(15680)),o=t(83407);const d=["components"],m={},l={_frontmatter:m},u=o.A;function c(n){let{components:e}=n,t=(0,a.A)(n,d);return(0,r.mdx)(u,(0,i.A)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"invoiceiteminterface-attributes-and-implementations"},"InvoiceItemInterface attributes and implementations"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"InvoiceItemInterface")," provides details about items in a customer's order history that were invoiced. It has the following implementations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"BundleInvoiceItem")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"DownloadableInvoiceItem")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"GiftCardInvoiceItem")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"InvoiceItem"))),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-InvoiceItemInterface"},(0,r.mdx)("inlineCode",{parentName:"a"},"InvoiceItemInterface"))," reference provides detailed information about the types and fields defined in this interface."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following query returns invoice details about order ID ",(0,r.mdx)("inlineCode",{parentName:"p"},"000000005"),". The ",(0,r.mdx)("inlineCode",{parentName:"p"},"BundleOrderItem")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"DownloadableOrderItem")," fragments return item-specific information."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer {\n    firstname\n    lastname\n    email\n    orders(\n      filter: {\n        number: {\n          match: "000000005"\n        }\n      }) {\n      items {\n        id\n        invoices {\n          id\n          items {\n            id\n            product_sku\n            product_name\n            quantity_invoiced\n            ... on BundleInvoiceItem {\n              bundle_options {\n                id\n                values {\n                  id\n                  product_name\n                  product_sku\n                  quantity\n                  price {\n                    value\n                    currency\n                  }\n                }\n              }\n            }\n            ... on DownloadableInvoiceItem {\n              id\n              downloadable_links {\n                uid\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "firstname": "Roni",\n      "lastname": "Costello",\n      "email": "roni_cost@example.com",\n      "orders": {\n        "items": [\n          {\n            "id": "NQ==",\n            "invoices": [\n              {\n                "id": "NA==",\n                "items": [\n                  {\n                    "id": "OQ==",\n                    "product_sku": "240-LV06",\n                    "product_name": "Yoga Adventure",\n                    "quantity_invoiced": 1,\n                    "downloadable_links": [\n                      {\n                        "uid": "ZG93bmxvYWRhYmxlLzM=",\n                        "title": "Yoga Adventure"\n                      }\n                    ]\n                  },\n                  {\n                    "id": "MTA=",\n                    "product_sku": "24-WG080-24-WG082-blue-24-WG084-24-WG087-24-WG088",\n                    "product_name": "Sprite Yoga Companion Kit",\n                    "quantity_invoiced": 1,\n                    "bundle_options": [\n                      {\n                        "id": "Mg==",\n                        "values": [\n                          {\n                            "id": "MTg=",\n                            "product_name": "Sprite Foam Yoga Brick",\n                            "product_sku": "24-WG084",\n                            "quantity": 1,\n                            "price": {\n                              "value": 5,\n                              "currency": "USD"\n                            }\n                          }\n                        ]\n                      },\n                      {\n                        "id": "NA==",\n                        "values": [\n                          {\n                            "id": "MjA=",\n                            "product_name": "Sprite Foam Roller",\n                            "product_sku": "24-WG088",\n                            "quantity": 1,\n                            "price": {\n                              "value": 19,\n                              "currency": "USD"\n                            }\n                          }\n                        ]\n                      },\n                      {\n                        "id": "MQ==",\n                        "values": [\n                          {\n                            "id": "MTc=",\n                            "product_name": "Sprite Stasis Ball 65 cm",\n                            "product_sku": "24-WG082-blue",\n                            "quantity": 1,\n                            "price": {\n                              "value": 27,\n                              "currency": "USD"\n                            }\n                          }\n                        ]\n                      },\n                      {\n                        "id": "Mw==",\n                        "values": [\n                          {\n                            "id": "MTk=",\n                            "product_name": "Sprite Yoga Strap 10 foot",\n                            "product_sku": "24-WG087",\n                            "quantity": 1,\n                            "price": {\n                              "value": 21,\n                              "currency": "USD"\n                            }\n                          }\n                        ]\n                      }\n                    ]\n                  },\n                  {\n                    "id": "MTU=",\n                    "product_sku": "WS12-XS-Orange",\n                    "product_name": "Radiant Tee",\n                    "quantity_invoiced": 1\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-orders-interfaces-invoice-item-md-79613c8c3e65b19debbd.js.map