"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6537],{77319:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return l}});var a=t(87462),o=t(63366),r=(t(15007),t(64983)),s=t(91515),m=["components"],d={},i={_frontmatter:d},p=s.Z;function l(e){var n=e.components,t=(0,o.Z)(e,m);return(0,r.mdx)(p,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-6-create-a-customer-and-generate-a-customer-token"},"Step 6. Create a customer and generate a customer token"),(0,r.mdx)("p",null,"This step creates a customer that lives close to several stores that serve as in-store pickup locations. Although this tutorial ships the order using a traditional shipping method, the GraphQL tutorial shows how in-store pickup can be implemented."),(0,r.mdx)("h2",{id:"create-a-customer"},"Create a customer"),(0,r.mdx)("p",null,"If you prefer to use a customer that is already defined on your installation, scroll down to ",(0,r.mdx)("a",{parentName:"p",href:"#generate-the-customers-access-token"},"Generate the customer's access token"),"."),(0,r.mdx)("p",null,"The response of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST /V1/customers")," endpoint includes an address ID. This value will be used in a later step."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/customers")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <admin_token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "customer" : {\n      "lastname" : "Doe",\n      "firstname" : "Jane",\n      "email" : "jdoe@example.com",\n      "addresses" : [\n         {\n            "defaultBilling" : true,\n            "defaultShipping" : true,\n            "firstname" : "Jane",\n            "lastname" : "Doe",\n            "region" : {\n               "regionCode" : "NY",\n               "regionId" : 43,\n               "region" : "New York"\n            },\n            "countryId" : "US",\n            "postcode" : "11501",\n            "city" : "Mineola",\n            "street" : [\n               "160 1st St."\n            ],\n            "telephone" : "516-555-1111"\n         }\n      ]\n   },\n   "password" : "Password1"\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"The customer ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"2"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 2,\n    "group_id": 1,\n    "default_billing": "2",\n    "default_shipping": "2",\n    "created_at": "2020-07-22 23:12:47",\n    "updated_at": "2020-07-22 23:13:15",\n    "created_in": "Default Store View",\n    "email": "jdoe@example.com",\n    "firstname": "Jane",\n    "lastname": "Doe",\n    "store_id": 1,\n    "website_id": 1,\n    "addresses": [\n        {\n            "id": 2,\n            "customer_id": 2,\n            "region": {\n                "region_code": "NY",\n                "region": "New York",\n                "region_id": 43\n            },\n            "region_id": 43,\n            "country_id": "US",\n            "street": [\n                "160 1st St."\n            ],\n            "telephone": "516-555-1111",\n            "postcode": "11501",\n            "city": "Mineola",\n            "firstname": "Jane",\n            "lastname": "Doe",\n            "default_shipping": true,\n            "default_billing": true\n        }\n    ],\n    "disable_auto_group_change": 0,\n    "extension_attributes": {\n        "is_subscribed": false\n    }\n}\n')),(0,r.mdx)("h2",{id:"generate-the-customers-access-token"},"Generate the customer's access token"),(0,r.mdx)("p",null,"To generate a customer's access token, you must specify the customer's username and password in the payload. You do not specify an admin authorization token."),(0,r.mdx)("p",null,"By default, a customer token is valid for 1 hour. To change this value, click ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,r.mdx)("strong",{parentName:"p"},"Access Token Expiration"),". Then enter a new value for ",(0,r.mdx)("strong",{parentName:"p"},"Customer Token Lifetime (hours)"),"."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/integration/customer/token")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"username": "jdoe@example.com",\n"password": "Password1"\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"Adobe Commerce returns the customer's access token. Your integration must specify a customer token in the authorization header of every call customers make on their own behalf."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"fl0o0yr1xota4w88negpwfsle38807yb")),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Log in to the Test website using the email ",(0,r.mdx)("inlineCode",{parentName:"li"},"jdoe@example.com")," and password ",(0,r.mdx)("inlineCode",{parentName:"li"},"Password1"),"."),(0,r.mdx)("li",{parentName:"ol"},"Click the account name (Jane) in the upper right corner and select ",(0,r.mdx)("strong",{parentName:"li"},"My Account"),"."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Address Book")," to view the default billing and shipping addresses.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-create-customer-md-e4661c8e29691a4404ab.js.map