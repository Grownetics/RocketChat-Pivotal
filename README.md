# RocketChat-Pivotal
Integration script for Rocket.Chat to accept and parse Webhooks from Pivotal Tracker integrations.

# Installation
In Rocket.Chat go into Administration -> Integrations. Create a new Integration called Pivotal, set the channel you want it to post to, set Script Enabled to True, and paste the contents of script.js into the Script box. Copy the provided Webhook URL, go to a Pivotal Tracker project, open the Settings -> Integrations page. Under 'Activity Web Hook' paste the URL copied earlier, keep it on v5, and hit 'Add'. Now create a new story in the Pivotal project, and you should see a message appear in the channel you designated.
