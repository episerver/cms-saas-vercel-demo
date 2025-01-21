[Back to readme](../README.md)

## Enable on page / in context editing
So, after you've configured the CMS and successfully deployed the frontend, you now need to make a few changes to fully enable on-page editing.

### Prerequisites
- You will need to domain at which the site is available to the public. If you've deployed to Vercel, this will be something like `my-project.vercel.app`

### Finish CMS Configuration
First of we need to tell the CMS where the frontend has been deployed, so it can use it to provide on-page editing. This is leveraging the normal production deployment, so it's not needed to create or maintain additional branches.

Within the CMS, take the following steps:

* Register the frontend with the Application:
  - Navigate to "Settings" (cog icon on the left-hand side) - and then go to "Applications"
  - Click on the ***Name*** of the website you've just created.
  - Click on "Hostnames"
  - Click on "Add Hostname..." and fill out the form according to the table below:
  - Click on "Add" at the bottom
  - Clink on "< Applications" at the left top of the screen

| Field | Instruction |
| - | - |
| Host Name | The domain name of your frontend (for example: `my-project.vercel.app`) |
| Use a secure connection | Make sure this is checked |
| Locale | Set this to the primary language ("en") |
  
* Make sure Optimizely Graph reflects the updates
   - Navigate to "Scheduled Jobs", under "Data & Sync Management"
   - Click the "Start"-button on the line of "Optimizely Graph Full Synchronization"
   - The "Status" will change to "RUNNING", this task is completed when it reverts back to either "IDLE" or "MANUAL"


### Update cache of Vercel application
With the changes above, we've made massive updates to the data in Optimizely Graph. In order to ensure that these updates are reflected correctly, take the following steps within your Vercel project:
- Go to "Settings"
- Go to "Data Cache" within "Settings"
- Click "Purge Everything" and confirm the action

### Automatic cache purging
The build-script includes the registration of the web-hook needed to refresh the cache at Vercel once a content-item gets published.

To make sure this webhook gets invoked on the right domain, make sure to configure the following envionment variable to point the webhook to the right location.

`SITE_DOMAIN=my-project.vercel.app`

Replace the "my-project" in the example above, with the domain of your site. Don't forget to re-deploy to trigger the registration of the correct webhook.

[Back to readme](../README.md)