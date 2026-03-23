---
name: Google Calendar
description: "Create events, check availability, manage schedules, and coordinate meetings via Composio"
category: Productivity
roles:
  - email-secretary
  - cmo
  - sdr
platforms:
  - google_calendar
---

<!-- openlabor-connector: google_calendar, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Google Calendar

Create events, check availability, manage schedules, and coordinate meetings.

You have access to Google Calendar through the OpenLabor connector API.

## How to Execute Calendar Actions

```
openlabor-exec google_calendar <TOOL_NAME> '<json_args>'
```

## Events

### Create an Event
- Tool: `GOOGLECALENDAR_CREATE_EVENT`
- Args: `{ "summary": "Team Meeting", "start_datetime": "2026-03-25T10:00:00", "end_datetime": "2026-03-25T11:00:00", "timezone": "America/New_York" }`
- Optional: `"description"`, `"location"`, `"attendees"` (array of emails)

### Quick Add (natural language)
- Tool: `GOOGLECALENDAR_QUICK_ADD`
- Args: `{ "text": "Lunch with Sarah tomorrow at noon" }`

### List Events
- Tool: `GOOGLECALENDAR_FIND_EVENT`
- Args: `{ "timeMin": "2026-03-22T00:00:00Z", "timeMax": "2026-03-29T00:00:00Z" }`
- Optional: `"query"` (search text), `"max_results"`, `"order_by"` ("startTime", "updated")

### List Events Across All Calendars
- Tool: `GOOGLECALENDAR_EVENTS_LIST_ALL_CALENDARS`
- Args: `{ "time_min": "2026-03-22T00:00:00Z", "time_max": "2026-03-29T00:00:00Z" }`

### Get Event Details
- Tool: `GOOGLECALENDAR_EVENTS_GET`
- Args: `{ "event_id": "EVENT_ID" }`

### Update an Event
- Tool: `GOOGLECALENDAR_PATCH_EVENT`
- Args: `{ "event_id": "EVENT_ID", "calendar_id": "primary", "summary": "Updated Title", "start_time": "2026-03-25T14:00:00", "end_time": "2026-03-25T15:00:00" }`

### Delete an Event
- Tool: `GOOGLECALENDAR_DELETE_EVENT`
- Args: `{ "event_id": "EVENT_ID" }`

### Move an Event to Another Calendar
- Tool: `GOOGLECALENDAR_EVENTS_MOVE`
- Args: `{ "event_id": "EVENT_ID", "calendar_id": "primary", "destination": "CALENDAR_ID" }`

### Remove an Attendee
- Tool: `GOOGLECALENDAR_REMOVE_ATTENDEE`
- Args: `{ "event_id": "EVENT_ID", "attendee_email": "person@example.com" }`

## Availability

### Find Free Slots
- Tool: `GOOGLECALENDAR_FIND_FREE_SLOTS`
- Args: `{ "time_min": "2026-03-22T09:00:00Z", "time_max": "2026-03-22T18:00:00Z", "items": [{ "id": "primary" }] }`

### Get Current Date/Time
- Tool: `GOOGLECALENDAR_GET_CURRENT_DATE_TIME`
- Args: `{ "timezone": "America/New_York" }`

## Calendar Management

### List Calendars
- Tool: `GOOGLECALENDAR_LIST_CALENDARS`
- Args: `{}`

### Get Calendar Details
- Tool: `GOOGLECALENDAR_GET_CALENDAR`
- Args: `{ "calendar_id": "primary" }`

### Create a New Calendar
- Tool: `GOOGLECALENDAR_DUPLICATE_CALENDAR`
- Args: `{ "summary": "Marketing Calendar" }`

## Scheduling Best Practices

### For Meetings
- Always check availability before suggesting times
- Include timezone in all datetime values
- Add agenda in the description field
- Set attendees to notify them automatically

### For SDRs
- Check prospect's timezone before suggesting meeting times
- Offer 2-3 time slots
- Include meeting link and agenda in description
- Set reminders for follow-up

### For Email Secretaries
- Manage the boss's calendar proactively
- Block focus time and buffer between meetings
- Coordinate across calendars for scheduling

## Guidelines
1. Always use ISO 8601 datetime format (YYYY-MM-DDTHH:MM:SS)
2. Include timezone — don't assume UTC
3. Use "primary" as calendar_id for the main calendar
4. If you get a 400 "not connected" error, tell the user to connect Google Calendar in the Apps tab
5. Never expose credentials to the user
