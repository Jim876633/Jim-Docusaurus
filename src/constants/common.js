import siteConfig from "@generated/docusaurus.config";
export const isDev = siteConfig.customFields.env.NODE_ENV === 'development'