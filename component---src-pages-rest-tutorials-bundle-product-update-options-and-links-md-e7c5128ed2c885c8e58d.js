"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6671],{91327:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return s},default:function(){return _}});var o=t(58168),i=t(80045),a=(t(88763),t(15680)),d=t(83407);const p=["components"],s={},u=(l="CodeBlock",function(n){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)});var l;const r={_frontmatter:s},c=d.A;function _(n){let{components:e}=n,t=(0,i.A)(n,p);return(0,a.mdx)(c,(0,o.A)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"step-4-update-product-options-or-option-links-optional"},"Step 4. Update product options or option links (optional)"),(0,a.mdx)("p",null,"Updating bundle product options or option links requires the following steps:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Get bundle product details"),(0,a.mdx)("li",{parentName:"ol"},"Update bundle product options"),(0,a.mdx)("li",{parentName:"ol"},"Update bundle product links")),(0,a.mdx)("h2",{id:"1-get-bundle-product-details"},"1. Get bundle product details"),(0,a.mdx)("p",null,"The following example retrieves store-specific bundle product details for a multi-store configuration by using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"GET {store_code}/V1/products/{sku}")," call."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Request:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-html"},"GET http://domain.com/rest/default/V1/products/Desktop-Computer\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Response:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 25,\n    "sku": "Desktop-Computer",\n    "name": "Desktop Computer",\n    "attribute_set_id": 4,\n    "price": 0,\n    "status": 1,\n    "visibility": 4,\n    "type_id": "bundle",\n    "created_at": "2022-04-15 18:04:04",\n    "updated_at": "2022-04-15 18:04:04",\n    "weight": 0,\n    "extension_attributes": {\n        "website_ids": [\n            1\n        ],\n        "category_links": [\n            {\n                "position": 0,\n                "category_id": "32"\n            }\n        ],\n        "stock_item": {\n            "item_id": 25,\n            "product_id": 25,\n            "stock_id": 1,\n            "qty": 0,\n            "is_in_stock": true,\n            "is_qty_decimal": false,\n            "show_default_notification_message": false,\n            "use_config_min_qty": true,\n            "min_qty": 0,\n            "use_config_min_sale_qty": 1,\n            "min_sale_qty": 1,\n            "use_config_max_sale_qty": true,\n            "max_sale_qty": 10000,\n            "use_config_backorders": true,\n            "backorders": 0,\n            "use_config_notify_stock_qty": true,\n            "notify_stock_qty": 1,\n            "use_config_qty_increments": true,\n            "qty_increments": 0,\n            "use_config_enable_qty_inc": true,\n            "enable_qty_increments": false,\n            "use_config_manage_stock": true,\n            "manage_stock": true,\n            "low_stock_date": null,\n            "is_decimal_divided": false,\n            "stock_status_changed_auto": 0\n        },\n        "bundle_product_options": [\n            {\n                "option_id": 14,\n                "title": "RAM",\n                "required": true,\n                "type": "select",\n                "position": 1,\n                "sku": "Desktop-Computer",\n                "product_links": [\n                    {\n                        "id": "19",\n                        "sku": "RAM-12GB",\n                        "option_id": 14,\n                        "qty": 1,\n                        "position": 1,\n                        "is_default": false,\n                        "price": 25,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    },\n                    {\n                        "id": "20",\n                        "sku": "RAM-24GB",\n                        "option_id": 14,\n                        "qty": 1,\n                        "position": 2,\n                        "is_default": false,\n                        "price": 50,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    }\n                ]\n            },\n            {\n                "option_id": 15,\n                "title": "Monitor",\n                "required": true,\n                "type": "select",\n                "position": 2,\n                "sku": "Desktop-Computer",\n                "product_links": [\n                    {\n                        "id": "21",\n                        "sku": "Monitor-15",\n                        "option_id": 15,\n                        "qty": 1,\n                        "position": 1,\n                        "is_default": false,\n                        "price": 100,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    },\n                    {\n                        "id": "22",\n                        "sku": "Monitor-17",\n                        "option_id": 15,\n                        "qty": 1,\n                        "position": 2,\n                        "is_default": false,\n                        "price": 150,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    }\n                ]\n            }\n        ]\n    },\n    "options": [],\n    "media_gallery_entries": [],\n    "custom_attributes": [\n        {\n            "attribute_code": "shipment_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "options_container",\n            "value": "container2"\n        },\n        {\n            "attribute_code": "msrp_display_actual_price_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "url_key",\n            "value": "desktop-computer"\n        },\n        {\n            "attribute_code": "price_view",\n            "value": "0"\n        },\n        {\n            "attribute_code": "required_options",\n            "value": "0"\n        },\n        {\n            "attribute_code": "has_options",\n            "value": "0"\n        },\n        {\n            "attribute_code": "sku_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "price_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "tax_class_id",\n            "value": "2"\n        },\n        {\n            "attribute_code": "weight_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "category_ids",\n            "value": [\n                "32"\n            ]\n        }\n    ]\n}\n')),(0,a.mdx)("p",null,"Retrieve the ",(0,a.mdx)("inlineCode",{parentName:"p"},"option_id")," values from the bundle product options section of the response and use it to update the bundle product option and option links."),(0,a.mdx)("h2",{id:"2-update-bundle-product-options"},"2. Update bundle product options"),(0,a.mdx)("p",null,"The following example uses the ",(0,a.mdx)("inlineCode",{parentName:"p"},"PUT /V1/bundle-products/options/{optionId}")," call\nto update the bundle product option. For a store-specific request, add the ",(0,a.mdx)("inlineCode",{parentName:"p"},"store_code"),".\nFor example, ",(0,a.mdx)("inlineCode",{parentName:"p"},"PUT {store_code}/V1/bundle-products/options/{optionId}"),"."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-html"},"PUT http://domain.com/rest/default/V1/bundle-products/options/14\n")),(0,a.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"payload"},"Payload"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "option_id": 14,\n  "title": "RAM-Version-2",\n  "required": true,\n  "type": "select",\n  "position": 1,\n  "sku": "Desktop-Computer",\n  "product_links": [\n    {\n      "id": "19",\n      "sku": "RAM-12GB",\n      "option_id": 14,\n      "qty": 2,\n      "position": 1,\n      "is_default": false,\n      "price": 50,\n      "price_type": null,\n      "can_change_quantity": 0,\n      "extension_attributes": {}\n    },\n    {\n      "id": "20",\n      "sku": "RAM-24GB",\n      "option_id": 14,\n      "qty": 2,\n      "position": 2,\n      "is_default": false,\n      "price": 100,\n      "price_type": null,\n      "can_change_quantity": 0,\n      "extension_attributes": {}\n    }\n  ],\n  "extension_attributes": {}\n}\n')),(0,a.mdx)("h4",{id:"response"},"Response"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},"14\n")),(0,a.mdx)("h2",{id:"3-update-bundle-product-links"},"3. Update bundle product links"),(0,a.mdx)("p",null,"The following example uses the ",(0,a.mdx)("inlineCode",{parentName:"p"},"PUT /V1/bundle-products/{sku}/links/{optionId}")," call to update a bundle product option link."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-html"},"PUT http://domain.com/rest/default/V1/bundle-products/Desktop-Computer/links/14\n")),(0,a.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"payload-1"},"Payload"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "linkedProduct":\n  {\n    "id": "19",\n    "option_id": 14,\n    "sku": "RAM-12GB",\n    "qty": 2,\n    "is_default": false,\n    "can_change_quantity": 0,\n    "price": 50,\n    "price_type": 0,\n    "extension_attributes": { }\n  }\n}\n')),(0,a.mdx)("h4",{id:"response-1"},"Response"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")))}_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-bundle-product-update-options-and-links-md-e7c5128ed2c885c8e58d.js.map