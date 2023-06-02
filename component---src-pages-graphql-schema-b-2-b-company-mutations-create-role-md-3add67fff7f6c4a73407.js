"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9754],{86820:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return x}});var a=t(87462),r=t(63366),m=(t(15007),t(64983)),o=t(91515),l=t(85273),d=t(70909),p=["components"],i={},s={_frontmatter:i},u=o.Z;function x(e){var n=e.components,t=(0,r.Z)(e,p);return(0,m.mdx)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"createcompanyrole-mutation"},"createCompanyRole mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCompanyRole")," mutation defines a new company role. To create a role, you must provide an array of permissions that determine which resources the user can access."),(0,m.mdx)(l.default,{mdxType:"B2BRoles"}),(0,m.mdx)("p",null,"Also, you can get the list of all resources defined within the company using the ",(0,m.mdx)("a",{parentName:"p",href:"../queries/company.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"company"))," query."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    createCompanyRole(\n        input: CompanyRoleCreateInput!\n    ) {\n        CreateCompanyRoleOutput\n    }\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"This example creates a new company role with a list of company permissions available to the company."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCompanyRole(\n    input: {\n      name: "Company Admin"\n      permissions: [\n        "Magento_Company::index"\n        "Magento_Company::view"\n        "Magento_Company::view_account"\n        "Magento_Company::edit_account"\n        "Magento_Company::view_address"\n        "Magento_Company::edit_address"\n        "Magento_Company::contacts"\n        "Magento_Company::payment_information"\n        "Magento_Company::shipping_information"\n        "Magento_Company::user_management"\n        "Magento_Company::roles_view"\n        "Magento_Company::roles_edit"\n        "Magento_Company::users_view"\n        "Magento_Company::users_edit"\n        "Magento_Company::credit"\n        "Magento_Company::credit_history"\n      ]\n    }\n  ) {\n    role {\n      id\n      name\n      permissions {\n        id\n        text\n        sort_order\n        children {\n          id\n          text\n          sort_order\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCompanyRole": {\n      "role": {\n        "id": "Mg==",\n        "name": "Company Admin",\n        "permissions": [\n          {\n            "id": "Magento_Company::index",\n            "text": "All",\n            "sort_order": 100,\n            "children": [\n              {\n                "id": "Magento_Company::view",\n                "text": "Company Profile",\n                "sort_order": 100\n              },\n              {\n                "id": "Magento_Company::user_management",\n                "text": "Company User Management",\n                "sort_order": 200\n              },\n              {\n                "id": "Magento_Company::credit",\n                "text": "Company Credit",\n                "sort_order": 500\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CompanyRoleCreateInput")," input object defines the company role data for creating."),(0,m.mdx)("h3",{id:"companyrolecreateinput-attributes"},"CompanyRoleCreateInput attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CompanyRoleCreateInput")," object contains the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"name")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the role to create")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"permissions")),(0,m.mdx)("td",{parentName:"tr",align:null},"[String!]","!"),(0,m.mdx)("td",{parentName:"tr",align:null},"A list of resources the role can access")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CreateCompanyRoleOutput")," output object contains the following attribute:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"role")),(0,m.mdx)("td",{parentName:"tr",align:null},"CompanyRole!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Contains company role data")))),(0,m.mdx)("h3",{id:"companyrole-attributes"},"CompanyRole attributes"),(0,m.mdx)(d.default,{mdxType:"CompanyRole"}),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"User role with this name already exists. Enter a different name to save this role.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The company cannot have multiple company roles with the same name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Unable to set "allow" for the resource because its parent resource(s) is set to "deny".')),(0,m.mdx)("td",{parentName:"tr",align:null},"To allow permission for the company role, you must allow all the permissions of the parent tree.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-create-role-md-3add67fff7f6c4a73407.js.map