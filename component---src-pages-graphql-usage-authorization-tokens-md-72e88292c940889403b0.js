"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6657],{31743:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return c}});var n=t(58168),o=t(80045),s=(t(88763),t(15680)),r=t(83407);const i=["components"],m={},d={_frontmatter:m},p=r.A;function c(e){let{components:a}=e,t=(0,o.A)(e,i);return(0,s.mdx)(p,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"graphql-authorization"},"GraphQL authorization"),(0,s.mdx)("p",null,"Adobe Commerce and Magento Open Source provide two mechanisms for authorizing GraphQL calls:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("strong",{parentName:"p"},"Authorization tokens"),". Commerce generates a JSON Web Token (JWT), a set of cryptographically signed credentials. All calls that perform an action on behalf of a logged-in customer or admin provide an authorization token. Authorization tokens are stateless. Commerce does not need to know the state of a client to execute a request--the token contains all of the information needed for authorization and authentication.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("strong",{parentName:"p"},"Session cookies"),". A session cookie is information generated by Commerce that is stored in the client's browser. It contains details about the session, including the time period the user can access resources. Cookies are stateful, thereby increasing complexity and possibly latency."))),(0,s.mdx)("p",null,"Adobe recommends that you use authorization tokens instead of session cookies for GraphQL requests. By default, session cookies are enabled. As of Commerce 2.4.5, you can disable session cookies, eliminating the chances of encountering problems caused by the differences between the two authorization methods. However, merchants with existing implementations that rely on cookies can continue using this method. ",(0,s.mdx)("a",{parentName:"p",href:"#session-cookies"},"Session cookies")," describes how to enable or disable cookies for GraphQL."),(0,s.mdx)("h2",{id:"authorization-tokens"},"Authorization tokens"),(0,s.mdx)("p",null,"Adobe Commerce provides separate token services for customers and administrators. When you request a token from one of these services, the service returns a unique access token in exchange for the account's username and password."),(0,s.mdx)("p",null,"GraphQL provides a mutation that returns a token on behalf of a logged-in customer, but you must use a REST call to fetch an admin token. Any time you make a GraphQL or REST call that requires a token, specify the HTTP ",(0,s.mdx)("inlineCode",{parentName:"p"},"Authorization")," request header and assign the value as ",(0,s.mdx)("inlineCode",{parentName:"p"},"Bearer <token>"),". ",(0,s.mdx)("a",{parentName:"p",href:"headers.md#request-headers"},"Request headers")," provides an example."),(0,s.mdx)("h3",{id:"customer-tokens"},"Customer tokens"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"../schema/customer/mutations/generate-token.md"},(0,s.mdx)("inlineCode",{parentName:"a"},"generateCustomerToken")," mutation")," requires the customer email address and password in the payload, as shown in the following example."),(0,s.mdx)("p",null,"By default, a customer token is valid for 1 hour. You can change these values from Admin by selecting ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,s.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,s.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Services")," > ",(0,s.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,s.mdx)("strong",{parentName:"p"},"Access Token Expiration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Customer Token Lifetime"),"."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  generateCustomerToken(email: "customer@example.com", password: "password") {\n    token\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},' {\n   "data": {\n     "generateCustomerToken": {\n       "token": "hoyz7k697ubv5hcpq92yrtx39i7x10um"\n     }\n   }\n }\n')),(0,s.mdx)("p",null,"You can now use this token in the Authorization request header field for any queries and mutations."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"845px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.750000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/5530d/graphql-authorization.webp 320w","/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/0c8fb/graphql-authorization.webp 640w","/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/3a5f0/graphql-authorization.webp 845w"],sizes:"(max-width: 845px) 100vw, 845px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/dd4a7/graphql-authorization.png 320w","/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/0f09e/graphql-authorization.png 640w","/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/13d24/graphql-authorization.png 845w"],sizes:"(max-width: 845px) 100vw, 845px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/84da91e4ba026a305d86bbdc82b7cd34/13d24/graphql-authorization.png",alt:"GraphQL Authorization Bearer",title:"GraphQL Authorization Bearer",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"You can also ",(0,s.mdx)("a",{parentName:"p",href:"../schema/customer/mutations/revoke-token.md"},"revoke the customer's token")," when the customer logs out or changes their password."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"../schema/customer/mutations/generate-token-as-admin.md"},(0,s.mdx)("inlineCode",{parentName:"a"},"generateCustomerTokenAsAdmin"))," mutation generates a new customer token as an admin so that an administrator can perform remote shopping assistance.\nThe customer must have enabled the ",(0,s.mdx)("inlineCode",{parentName:"p"},"allow_remote_shopping_assistance")," feature while creating the customer profile. The mutation requires the customer email address in the payload, as shown in the following example."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation{\n  generateCustomerTokenAsAdmin(input: {\n    customer_email: "customer1@mail.com"\n  }){\n    customer_token\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "generateCustomerTokenAsAdmin": {\n      "customer_token": "cr0717abzoagxty1xjn4lj13kim36r6x"\n    }\n  }\n}\n')),(0,s.mdx)("h3",{id:"admin-tokens"},"Admin tokens"),(0,s.mdx)("p",null,"In Adobe Commerce and Magento Open Source GraphQL, you specify an admin token only if you need to query products, categories, price rules, or other entities that are scheduled to be in a campaign (staged content). Staging is supported in Adobe Commerce only. See ",(0,s.mdx)("a",{parentName:"p",href:"staging-queries.md"},"Staging queries")," for more information."),(0,s.mdx)("p",null,"Adobe Commerce and Magento Open Source do not provide a GraphQL mutation that generates an admin token. You must use a REST endpoint such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST /V1/tfa/provider/google/authenticate")," instead. ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/tutorials/prerequisite-tasks/"},"Generate the admin token")," shows how to use this endpoint."),(0,s.mdx)("p",null,"By default, an admin token is valid for 4 hours. You can change these values from Admin by selecting ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,s.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,s.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Services")," > ",(0,s.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,s.mdx)("strong",{parentName:"p"},"Access Token Expiration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Admin Token Lifetime"),"."),(0,s.mdx)("h2",{id:"session-cookies"},"Session cookies"),(0,s.mdx)("p",null,"The client's browser will use a session cookie if the server provides one. Prior to version 2.4.5, Commerce automatically generated session cookies even if an authorization token was specified."),(0,s.mdx)("p",null,"Browser-based applications that make GraphQL calls can continue implementing these cookies without changing the default setting. If you use cookies, avoid specifying Authorization headers to prevent problems caused by using two different authorization methods."),(0,s.mdx)("p",null,"Adobe recommends that you do not use session cookies when developing a Commerce-based application. If you adhere to this best practice, you should configure GraphQL so that the server doesn't generate them. Disabling cookies also prevents system file locks and race conditions on server resources. These problems cause slower HTTP GET request throughputs under peak traffic conditions."),(0,s.mdx)("p",null,"Run the following command to disable session cookies for GraphQL:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"bin/magento config:set graphql/session/disable 1")),(0,s.mdx)("p",null,"To re-enable these cookies, run:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"bin/magento config:set graphql/session/disable 0")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-usage-authorization-tokens-md-72e88292c940889403b0.js.map