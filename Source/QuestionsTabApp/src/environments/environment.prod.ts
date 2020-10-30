export const environment = {
    production: false,
    apiBaseUrl: "https://contosoqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://contosoqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "8fef4239-176e-4f68-960f-defc763764b3",
        clientId: "0f8b0b02-d8d1-4178-b822-ac31505ddeca",
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