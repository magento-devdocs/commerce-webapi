"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[959],{71831:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return u},default:function(){return s}});var a=t(87462),r=t(63366),l=(t(15007),t(64983)),i=t(91515),d=t(51394),m=["components"],u={},o={_frontmatter:u},p=i.Z;function s(e){var n=e.components,t=(0,r.Z)(e,m);return(0,l.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"country-query"},"country query"),(0,l.mdx)("p",null,"Use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"country")," query to retrieve information about a specific country."),(0,l.mdx)("p",null,"Use the ",(0,l.mdx)("a",{parentName:"p",href:"../../store/queries/countries.md"},"countries")," query to retrieve a list of countries available in the system."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"{country(id: String) {Country}}")),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,'The following query uses a two-letter abbreviation for the country ID (id: "AU"), which returns information about Australia.'),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n    country(id: "AU") {\n        id\n        two_letter_abbreviation\n        three_letter_abbreviation\n        full_name_locale\n        full_name_english\n        available_regions {\n            id\n            code\n            name\n        }\n    }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "country": {\n      "id": "AU",\n      "two_letter_abbreviation": "AU",\n      "three_letter_abbreviation": "AUS",\n      "full_name_locale": "Australia",\n      "full_name_english": "Australia",\n      "available_regions": [\n        {\n          "id": 569,\n          "code": "ACT",\n          "name": "Australian Capital Territory"\n        },\n        {\n          "id": 570,\n          "code": "NSW",\n          "name": "New South Wales"\n        },\n        {\n          "id": 576,\n          "code": "NT",\n          "name": "Northern Territory"\n        },\n        {\n          "id": 572,\n          "code": "QLD",\n          "name": "Queensland"\n        },\n        {\n          "id": 573,\n          "code": "SA",\n          "name": "South Australia"\n        },\n        {\n          "id": 574,\n          "code": "TAS",\n          "name": "Tasmania"\n        },\n        {\n          "id": 571,\n          "code": "VIC",\n          "name": "Victoria"\n        },\n        {\n          "id": 575,\n          "code": "WA",\n          "name": "Western Australia"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"country")," query requires the following input:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"A unique ID for the country")))),(0,l.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,l.mdx)("p",null,"The query returns a single ",(0,l.mdx)("inlineCode",{parentName:"p"},"Country")," object."),(0,l.mdx)(d.default,{mdxType:"CountryOutput"}),(0,l.mdx)("h2",{id:"related-topics"},"Related topics"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"../../store/queries/countries.md"},"countries query")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"../../store/queries/currency.md"},"currency query"))),(0,l.mdx)("h2",{id:"errors"},"Errors"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Error"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},'Country \\"id\\" value should be specified"')),(0,l.mdx)("td",{parentName:"tr",align:null},"The Country ID value must be specified to find the mapped country.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"The country isn't available")),(0,l.mdx)("td",{parentName:"tr",align:null},"There is no country mapped to the given country ID.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-store-queries-country-md-d3f6b26d3736e765b00f.js.map