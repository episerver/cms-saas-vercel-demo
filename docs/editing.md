[Back to readme](../README.md)

## Enable on page / in context editing
So, after you've configured the CMS and successfully deployed the frontend, you now need to make a few changes to fully enable on-page editing.

### Prerequisites
- You will need to domain at which the site is available to the public. If you've deployed to Vercel, this will be something like `my-project.vercel.app`

### CMS Side
First of we need to tell the CMS where the frontend has been deployed, so it can use it to provide on-page editing. This is leveraging the normal production deployment, so it's not needed to create or maintain additional branches.

Within the CMS, take the following steps:
- Navigate to "Settings" (cog icon on the left-hand side) - and then go to "Manage Websites" under "Config"
- Click on the ***Name*** of the website you've just created.
- Click on "Add Host" and fill out the form accordingly:

| Field | Instruction |
| - | - |
| Host Name | The domain name of your frontend (for example: `my-project.vercel.app`) |
| Type | Set to `Primary` |
| Culture | Set this to the primary language ("en") |
| Scheme | Set this to the correct value for your frontend, typically:  `HTTPS` |

- Click on "Add Host"
- Click on the "triple dot" menu at the right of the CMS domain, select "Edit", and change the following fields there - none-listed fields need to remain the same:

| Field | Instruction |
| - | - |
| Type | Set to blank |
| Scheme | Set to `HTTPS` |

- Click on "Save Host"
- Click on "Save Website"

If you now visit a content item in the CMS, you should be able to switch to On-Page-Editing and see the outlines for the editable fields.

### Vercel application
The build-script includes the registration of the web-hook needed to refresh the cache at Vercel once a content-item gets published.

To make sure this webhook gets invoked on the right domain, make sure to configure the following envionment variable to point the webhook to the right location.

`SITE_DOMAIN=my-project.vercel.app`

Replace the "my-project" in the example above, with the domain of your site. Don't forget to re-deploy to trigger the registration of the correct webhook.

[Back to readme](../README.md)