# Events bot 

This is one of 3 old event bots from TorontoJS that used to exist in the components/ folder

Currently the [most recent one by @kieran](https://github.com/kieran/torontojs-event-bot) updates the Slack `#events` channel 

## Add your meetup to our events feed

If you use meetup.com to host your events, then you can create a public Google Calendar Feed with the following steps:

1. Go to https://calendar.google.com/calendar/
2. On the sidebar, find the menu Other Calendars and then choose Add By URL
3. Go to your meetup home page and click the Our calendar link. 
4. At the bottom of the page, find the iCal link and copy the address of the link. 
5. Paste the URL in the dialog box that pops up at step 2 and also check the option to make it publically accessible. 
6. You should now see the calendar in the sidebar. Click the arrow icon and choose the Calendar settings option.
7. The section Calendar Address shows the unqie ID of the calendar. 
8. Submit a PR to the [events.js](torontojs.com/blob/master/src/data/events.js) file with the ID
