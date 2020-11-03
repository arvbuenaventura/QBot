export const environment = {
    production: false,
    apiBaseUrl: "https://contosoqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://contosoqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8fef4239-176e-4f68-960f-defc763764b3",
        clientId: "6cc4cbef-4521-402e-8680-d9422d3bcb2e",
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
    gid: "",
    cname: ""
};