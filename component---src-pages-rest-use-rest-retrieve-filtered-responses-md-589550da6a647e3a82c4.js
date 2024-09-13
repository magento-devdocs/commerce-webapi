"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8158],{99970:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return c}});var t=a(58168),i=a(80045),r=(a(88763),a(15680)),l=a(83407);a(90507);const o=["components"],d={},s=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var m;const p={_frontmatter:d},u=l.A;function c(e){let{components:n}=e,a=(0,i.A)(e,o);return(0,r.mdx)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"retrieve-filtered-responses-for-rest-endpoints"},"Retrieve filtered responses for REST endpoints"),(0,r.mdx)("p",null,"Some REST calls return dozens or even hundreds of parameters, and parsing through all this data can be unwieldy. In addition, mobile app developers might find the bandwidth needed to process a request to be excessive. To resolve these problems, Adobe Commerce provides a query parameter-based syntax for REST requests that return partial responses."),(0,r.mdx)(s,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"This feature is not available for SOAP, because SOAP does not allow partial responses."),(0,r.mdx)("p",null,"You can append ",(0,r.mdx)("inlineCode",{parentName:"p"},"?fields=<field_or_object1>,<field_or_object2>,...")," to any GET, POST, or PUT operation to filter unimportant information from the response. ",(0,r.mdx)("inlineCode",{parentName:"p"},"<field_or_object>")," can be any of the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Simple top-level field"),(0,r.mdx)("li",{parentName:"ul"},"Top-level object that includes all fields"),(0,r.mdx)("li",{parentName:"ul"},"Top-level object with selected fields"),(0,r.mdx)("li",{parentName:"ul"},"Nested objects")),(0,r.mdx)("p",null,"Separate each field or object with a comma."),(0,r.mdx)("p",null,"On POST and PUT requests, Commerce ignores the ",(0,r.mdx)("inlineCode",{parentName:"p"},"fields")," parameter as input, but the response includes only the requested fields and objects."),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("p",null,"All examples use Luma sample data."),(0,r.mdx)("h2",{id:"simple-fields"},"Simple fields"),(0,r.mdx)("p",null,"The following example returns only the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sku"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"price"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," for the specified product:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/products/24-MB01?fields=sku,price,name")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sku": "24-MB01"\n  "name": "Joust Duffle Bag"\n  "price": 24.99\n}\n')),(0,r.mdx)("h2",{id:"simple-fields-and-top-level-objects-with-all-fields"},"Simple fields and top-level objects with all fields"),(0,r.mdx)("p",null,"The following example returns only the customer first name, last name, and the entire ",(0,r.mdx)("inlineCode",{parentName:"p"},"billing_address")," object from a specified order. Do not include brackets ",(0,r.mdx)("inlineCode",{parentName:"p"},"[]")," after an object name when you want to return all of the object's contents."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/orders/2?fields=billing_address,customer_firstname,customer_lastname")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"customer_firstname": "Veronica"\n"customer_lastname": "Costello"\n"billing_address": {\n  "address_type": "billing"\n  "city": "Calder"\n  "country_id": "US"\n  "customer_address_id": 1\n  "email": "roni_cost@example.com"\n  "entity_id": 4\n  "firstname": "Veronica"\n  "lastname": "Costello"\n  "parent_id": 2\n  "postcode": "49628-7978"\n  "region": "Michigan"\n  "region_code": "MI"\n  "region_id": 33\n  "street": "6146 Honey Bluff Parkway"\n  "telephone": "(555) 229-3326"\n  }\n}\n')),(0,r.mdx)("h2",{id:"top-level-object-with-selected-fields"},"Top-level object with selected fields"),(0,r.mdx)("p",null,"The following example returns only the ",(0,r.mdx)("inlineCode",{parentName:"p"},"name"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"qty"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"sku")," fields defined in an ",(0,r.mdx)("inlineCode",{parentName:"p"},"items")," object from a specified shipment:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/shipment/2?fields=items[name,qty,sku]")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"items": [\n   {\n     "name": "Minerva LumaTech&trade; V-Tee-XS-Blue",\n     "qty": 1,\n     "sku": "WS08-XS-Blue",\n   }\n]\n')),(0,r.mdx)("h2",{id:"nested-objects"},"Nested objects"),(0,r.mdx)("p",null,"This example returns only the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The product's ",(0,r.mdx)("inlineCode",{parentName:"li"},"sku")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"name")),(0,r.mdx)("li",{parentName:"ul"},"The entire ",(0,r.mdx)("inlineCode",{parentName:"li"},"category_links")," object, which is defined in ",(0,r.mdx)("inlineCode",{parentName:"li"},"extension_attributes")),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"item_id")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"qty")," fields of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"stock_item")," object, which is also defined in ",(0,r.mdx)("inlineCode",{parentName:"li"},"extension_attributes"))),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/products/MT12?fields=name,sku,extension_attributes[category_links,stock_item[item_id,qty]]")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sku": "MT12"\n  "name": "Cassius Sparring Tank"\n  "extension_attributes": {\n    "category_links": {\n      "position": 1\n      "category_id": "18"\n    }\n    "stock_item": {\n      "item_id": 732\n      "qty": 0\n      }\n  }\n}\n')),(0,r.mdx)("h2",{id:"post-operation"},"POST operation"),(0,r.mdx)("p",null,"The following POST operation and payload creates a catalog category named ",(0,r.mdx)("inlineCode",{parentName:"p"},"New Category"),". Commerce returns only the ",(0,r.mdx)("inlineCode",{parentName:"p"},"id"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent_id"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," attributes"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/categories?fields=id,parent_id,name")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "category": {\n    "name": "New Category",\n    "is_active": true\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"id": 43\n"parent_id": 2\n"name": "New Category"\n}\n')),(0,r.mdx)("h2",{id:"using-with-searchcriteria"},"Using with searchCriteria"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/performing-searches/"},(0,r.mdx)("inlineCode",{parentName:"a"},"searchCriteria")," query parameter")," allows you to search across multiple objects in a collection. You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"fields")," query parameter in conjunction with ",(0,r.mdx)("inlineCode",{parentName:"p"},"searchCriteria")," to limit the output. The question mark (?) that precedes ",(0,r.mdx)("inlineCode",{parentName:"p"},"fields")," in all the other examples in this document is replaced with an ampersand (","&",")."),(0,r.mdx)("p",null,"The following query returns only the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sku")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," parameters for product items whose ",(0,r.mdx)("inlineCode",{parentName:"p"},"category_gear")," attribute includes the value ",(0,r.mdx)("inlineCode",{parentName:"p"},"86"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_gear&searchCriteria[filter_groups][0][filters][0][value]=86&searchCriteria[filter_groups][0][filters][0][condition_type]=finset&fields=items[sku,name]")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"items":\n  {\n    "sku": "24-MG04"\n    "name": "Aim Analog Watch"\n  }\n  {\n    "sku": "24-MG01"\n    "name": "Endurance Watch"\n  }\n  {\n    "sku": "24-MG03"\n    "name": "Summit Watch"\n  }\n  {\n    "sku": "24-MG05"\n    "name": "Cruise Dual Analog Watch"\n  }\n  {\n    "sku": "24-MG02"\n    "name": "Dash Digital Watch"\n  }\n  {\n    "sku": "24-WG09"\n    "name": "Luma Analog Watch"\n  }\n  {\n    "sku": "24-WG01"\n    "name": "Bolo Sport Watch"\n  }\n  {\n    "sku": "24-WG03"\n      "name": "Clamber Watch"\n  }\n  {\n    "sku": "24-WG02"\n    "name": "Didi Sport Watch"\n  }\n}\n')),(0,r.mdx)("h3",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/commerce-webapi/rest/use-rest/performing-searches/"},"Search using REST APIs"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-use-rest-retrieve-filtered-responses-md-589550da6a647e3a82c4.js.map