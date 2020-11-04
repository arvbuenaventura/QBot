export const environment = {
    production: false,
    apiBaseUrl: "https://<<BaseResourceName>>.azurewebsites.net/api/Request/",
    
    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8fef4239-176e-4f68-960f-defc763764b3",
        clientId: "e76a361e-7f8d-415e-8327-0532c5aafe59",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};