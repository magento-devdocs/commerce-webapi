"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4360],{4168:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t=a(58168),o=a(80045),r=(a(88763),a(15680)),m=a(83407),i=a(95607);const p=["components"],d={},l={_frontmatter:d},s=m.A;function u(e){let{components:n}=e,a=(0,o.A)(e,p);return(0,r.mdx)(s,(0,t.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"createcompanyrole-mutation"},"createCompanyRole mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"createCompanyRole")," mutation defines a new company role. To create a role, you must provide an array of permissions that determine which resources the user can access."),(0,r.mdx)(i.A,{mdxType:"B2BRoles"}),(0,r.mdx)("p",null,"Also, you can get the list of all resources defined within the company using the ",(0,r.mdx)("a",{parentName:"p",href:"../queries/company.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"company"))," query."),(0,r.mdx)("p",null,"This mutation requires a valid ",(0,r.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    createCompanyRole(\n        input: CompanyRoleCreateInput!\n    ) {\n        CreateCompanyRoleOutput\n    }\n}\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCompanyRole"},(0,r.mdx)("inlineCode",{parentName:"a"},"createCompanyRole"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"This example creates a new company role with a list of company permissions available to the company."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCompanyRole(\n    input: {\n      name: "Company Admin"\n      permissions: [\n        "Magento_Company::index"\n        "Magento_Company::view"\n        "Magento_Company::view_account"\n        "Magento_Company::edit_account"\n        "Magento_Company::view_address"\n        "Magento_Company::edit_address"\n        "Magento_Company::contacts"\n        "Magento_Company::payment_information"\n        "Magento_Company::shipping_information"\n        "Magento_Company::user_management"\n        "Magento_Company::roles_view"\n        "Magento_Company::roles_edit"\n        "Magento_Company::users_view"\n        "Magento_Company::users_edit"\n        "Magento_Company::credit"\n        "Magento_Company::credit_history"\n      ]\n    }\n  ) {\n    role {\n      id\n      name\n      permissions {\n        id\n        text\n        sort_order\n        children {\n          id\n          text\n          sort_order\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCompanyRole": {\n      "role": {\n        "id": "Mg==",\n        "name": "Company Admin",\n        "permissions": [\n          {\n            "id": "Magento_Company::index",\n            "text": "All",\n            "sort_order": 100,\n            "children": [\n              {\n                "id": "Magento_Company::view",\n                "text": "Company Profile",\n                "sort_order": 100\n              },\n              {\n                "id": "Magento_Company::user_management",\n                "text": "Company User Management",\n                "sort_order": 200\n              },\n              {\n                "id": "Magento_Company::credit",\n                "text": "Company Credit",\n                "sort_order": 500\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"User role with this name already exists. Enter a different name to save this role.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The company cannot have multiple company roles with the same name.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Unable to set "allow" for the resource because its parent resource(s) is set to "deny".')),(0,r.mdx)("td",{parentName:"tr",align:null},"To allow permission for the company role, you must allow all the permissions of the parent tree.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-create-role-md-a4d832bc5ca5f40a4203.js.map