"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9270],{16984:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a=t(58168),r=t(80045),d=(t(88763),t(15680)),o=t(83407);const i=["components"],m={},s={_frontmatter:m},l=o.A;function u(e){let{components:n}=e,t=(0,r.A)(e,i);return(0,d.mdx)(l,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"createcustomeraddress-mutation"},"createCustomerAddress mutation"),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"createCustomerAddress")," mutation to create the customer's address."),(0,d.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"mutation: {createCustomerAddress(input: CustomerAddressInput!) {CustomerAddress}}")),(0,d.mdx)("h2",{id:"reference"},"Reference"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCustomerAddress"},(0,d.mdx)("inlineCode",{parentName:"a"},"createCustomerAddress"))," reference provides detailed information about the types and fields defined in this mutation."),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("h3",{id:"create-a-customer-address"},"Create a customer address"),(0,d.mdx)("p",null,"The following call creates an address for the specified customer."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCustomerAddress(input: {\n    region: {\n      region: "Arizona"\n      region_code: "AZ"\n    }\n    country_code: US\n    street: ["123 Main Street"]\n    telephone: "7777777777"\n    postcode: "77777"\n    city: "Phoenix"\n    firstname: "Bob"\n    lastname: "Loblaw"\n    default_shipping: true\n    default_billing: false\n  }) {\n    id\n    region {\n      region\n      region_code\n    }\n    country_code\n    street\n    telephone\n    postcode\n    city\n    default_shipping\n    default_billing\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCustomerAddress": {\n      "id": 4,\n      "region": {\n        "region": "Arizona",\n        "region_code": "AZ"\n      },\n      "country_code": "US",\n      "street": [\n        "123 Main Street"\n      ],\n      "telephone": "7777777777",\n      "postcode": "77777",\n      "city": "Phoenix",\n      "default_shipping": true,\n      "default_billing": false\n    }\n  }\n}\n')),(0,d.mdx)("h3",{id:"create-an-address-with-custom-attributes"},"Create an address with custom attributes"),(0,d.mdx)("p",null,"The following call creates an address for the specified customer, assigning values for custom attributes."),(0,d.mdx)("p",null,"The merchant has previously created the custom attributes ",(0,d.mdx)("inlineCode",{parentName:"p"},"station")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"services")," for customer addresses."),(0,d.mdx)("h4",{id:"request"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCustomerAddress(input: {\n    region: {\n      region_id: 4\n      region: "Arizona"\n      region_code: "AZ"\n    }\n    country_code: US\n    street: ["123 Main Street"]\n    telephone: "7777777777"\n    postcode: "77777"\n    city: "Phoenix"\n    firstname: "Bob"\n    lastname: "Loblaw"\n    default_shipping: true\n    default_billing: false\n    custom_attributesV2: [\n      {\n        attribute_code: "station"\n        value: "Encanto/Central Ave"\n      },\n      {\n        attribute_code: "services"\n        value: "507,508"\n        selected_options: [\n          {\n            uid: "NTA3"\n            value: "507"\n          },\n          {\n            uid: "NTA4"\n            value: "508"\n          }\n        ]\n      }\n    ]\n  }) {\n    region {\n      region_id\n      region\n      region_code\n    }\n    country_code\n    street\n    telephone\n    postcode\n    city\n    default_shipping\n    default_billing\n    custom_attributesV2 {\n      code\n      ... on AttributeValue {\n        value\n      }\n      ... on AttributeSelectedOptions {\n        selected_options {\n          label\n          value\n        }\n      }\n    }\n  }\n}\n')),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCustomerAddress": {\n      "id": 4,\n      "region": {\n        "region": "Arizona",\n        "region_code": "AZ"\n      },\n      "country_code": "US",\n      "street": [\n        "123 Main Street"\n      ],\n      "telephone": "7777777777",\n      "postcode": "77777",\n      "city": "Phoenix",\n      "default_shipping": true,\n      "default_billing": false,\n      "custom_attributesV2": [\n        {\n          "code": "station",\n          "value": "Encanto/Central Ave"\n        },\n        {\n          "code": "services",\n          "selected_options": [\n            {\n              "label": "hospital",\n              "value": "507"\n            },\n            {\n              "label": "police",\n              "value": "508"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Expected type CustomerAddressInput!, found "".')),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input")," attribute contains an empty value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'"input" value should be specified')),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input")," argument is specified but is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Required parameters are missing: firstname")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input.firstname")," argument was omitted or contains an empty value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'"Street Address" cannot contain more than 2 lines.')),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input.street")," argument contains array with more than two elements.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Syntax Error: Expected Name, found )")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input")," argument was omitted.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))),(0,d.mdx)("h2",{id:"related-topics"},"Related topics"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"create.md"},"createCustomer mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"update.md"},"updateCustomer mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"update-address.md"},"updateCustomerAddress mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-create-address-md-767d3e08fffa2f1c2c7f.js.map