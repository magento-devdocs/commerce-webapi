"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9186],{94278:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return u}});var n=a(58168),r=a(80045),i=(a(88763),a(15680)),s=a(83407);const o=["components"],m={},l={_frontmatter:m},d=s.A;function u(e){let{components:t}=e,a=(0,r.A)(e,o);return(0,i.mdx)(d,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"search-for-the-status-of-a-bulk-operation"},"Search for the status of a bulk operation"),(0,i.mdx)("p",null,"The Status Operation Search endpoint (",(0,i.mdx)("inlineCode",{parentName:"p"},"GET /V1/bulk/?searchCriteria"),") allows you to search for bulk operation statuses."),(0,i.mdx)("p",null,"You can specify any of the following fields to filter on operation statuses:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"start_time")," - The time that a bulk operation started."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"status")," - The operation status:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"1")," = Complete"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"2")," = The operation failed, but you can try to perform it again."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"3")," = The operation failed. You must change something to retry it."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"4")," = Open"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"5")," = Rejected"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"bulk_uuid")," - UUID generated by an ",(0,i.mdx)("a",{parentName:"li",href:"/commerce-webapi/rest/asynchronous-web-endpoints"},"asynchronous API request")," or ",(0,i.mdx)("a",{parentName:"li",href:"/commerce-webapi/rest/use-rest/bulk-endpoints/"},"Bulk API request"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"topic_name")," - Queue topic name")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,i.mdx)("p",null,"The following call returns bulk operations that contain an error that cannot be retried."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-http"},"GET <host>/rest/<store_code>/V1/bulk/?\nsearchCriteria[filter_groups][0][filters][0][field]=status&\nsearchCriteria[filter_groups][0][filters][0][value]=3&\nsearchCriteria[filter_groups][0][filters][0][condition_type]=eq\n")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/performing-searches/"},"Search using REST APIs")," for more information about the syntax of search requests."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"The operation with bulk UUID ",(0,i.mdx)("inlineCode",{parentName:"p"},"c43ed402-3dd3-4100-92e2-dc5852d3009b")," contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"status")," code of 3."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "extension_attributes": {\n                "start_time": "2018-07-11 20:07:14"\n            },\n            "id": 4,\n            "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n            "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n            "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"mshaw@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Melanie Shaw\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Doe\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n            "result_serialized_data": null,\n            "status": 3,\n            "result_message": "A customer with the same email address already exists in an associated website.",\n            "error_code": 0\n        },\n        {\n            "extension_attributes": {\n                "start_time": "2018-07-11 20:07:14"\n            },\n            "id": 5,\n            "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n            "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n            "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"bmartin@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Bryce\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Martin\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n            "result_serialized_data": null,\n            "status": 3,\n            "result_message": "A customer with the same email address already exists in an associated website.",\n            "error_code": 0\n        },\n        {\n            "extension_attributes": {\n                "start_time": "2018-07-11 20:07:14"\n            },\n            "id": 6,\n            "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n            "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n            "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"bmartin@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Bryce\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Martin\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n            "result_serialized_data": null,\n            "status": 3,\n            "result_message": "A customer with the same email address already exists in an associated website.",\n            "error_code": 0\n        },\n        {\n            "extension_attributes": {\n                "start_time": "2018-07-11 20:07:14"\n            },\n            "id": 7,\n            "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n            "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n            "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"tgomez@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Teresa\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Gomez\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n            "result_serialized_data": null,\n            "status": 3,\n            "result_message": "A customer with the same email address already exists in an associated website.",\n            "error_code": 0\n        },\n        {\n            "extension_attributes": {\n                "start_time": "2018-07-11 20:58:31"\n            },\n            "id": 10,\n            "bulk_uuid": "799a59c0-09ca-4d60-b432-2953986c1c38",\n            "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n            "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"bmartin@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Bryce\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Martin\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n            "result_serialized_data": null,\n            "status": 3,\n            "result_message": "A customer with the same email address already exists in an associated website.",\n            "error_code": 0\n        }\n    ],\n    "search_criteria": {\n        "filter_groups": [\n            {\n                "filters": [\n                    {\n                        "field": "status",\n                        "value": "3",\n                        "condition_type": "eq"\n                    }\n                ]\n            }\n        ]\n    },\n    "total_count": 5\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-use-rest-operation-status-search-md-602b1f63a88322f4c197.js.map