---
name: Airtable Manager
description: "Create, read, update, and delete records in Airtable bases — manage data, CRM, and project tracking via Composio"
category: Productivity
roles:
  - cmo
  - analyst
  - sdr
platforms:
  - airtable
---

<!-- openlabor-connector: airtable, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Airtable Manager

Create, read, update, and delete records in Airtable — manage data, CRM, and project tracking.

You have access to Airtable through the OpenLabor connector API.

## How to Execute Airtable Actions

```
openlabor-exec airtable <TOOL_NAME> '<json_args>'
```

## Getting Started

### List All Bases
- Tool: `AIRTABLE_LIST_BASES`
- Args: `{}`

### Get Base Schema
- Tool: `AIRTABLE_GET_BASE_SCHEMA`
- Args: `{ "baseId": "appXXXXXXXXXXXXXX" }`

### Get User Info
- Tool: `AIRTABLE_GET_USER_INFO`
- Args: `{}`

## Records

### List Records
- Tool: `AIRTABLE_LIST_RECORDS`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table Name", "pageSize": "100" }`
- Optional: `"filterByFormula"`, `"sort"`, `"fields"`, `"view"`, `"maxRecords"`
- Filter example: `"filterByFormula": "{Status} = 'Active'"`
- Sort example: `"sort": [{"field": "Created", "direction": "desc"}]`

### Get Single Record
- Tool: `AIRTABLE_GET_RECORD`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table Name", "recordId": "recXXX" }`

### Create Records (up to 10)
- Tool: `AIRTABLE_CREATE_RECORDS`
- Args:
```json
{
  "baseId": "appXXX",
  "tableIdOrName": "Table Name",
  "records": [
    { "fields": { "Name": "John", "Email": "john@example.com", "Status": "New" } }
  ]
}
```

### Create Record from Natural Language
- Tool: `AIRTABLE_CREATE_RECORD_FROM_NATURAL_LANGUAGE`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Contacts", "nl_query": "Add John Smith, email john@smith.com, status is new lead" }`

### Update Records
- Tool: `AIRTABLE_UPDATE_RECORD`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table Name", "recordId": "recXXX", "fields": { "Status": "Contacted" } }`
- PATCH update — only modifies specified fields

### Update Multiple Records
- Tool: `AIRTABLE_UPDATE_MULTIPLE_RECORDS`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table Name", "records": [{ "id": "recXXX", "fields": { "Status": "Done" } }] }`

### Delete Record
- Tool: `AIRTABLE_DELETE_RECORD`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table Name", "recordId": "recXXX" }`

### Delete Multiple Records
- Tool: `AIRTABLE_DELETE_MULTIPLE_RECORDS`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table Name", "recordIds": ["recXXX", "recYYY"] }`

## Tables & Fields

### Create Table
- Tool: `AIRTABLE_CREATE_TABLE`
- Args: `{ "baseId": "appXXX", "name": "Leads", "fields": [{ "name": "Name", "type": "singleLineText" }, { "name": "Email", "type": "email" }] }`

### Create Field
- Tool: `AIRTABLE_CREATE_FIELD`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Leads", "name": "Score", "type": "number" }`

## Comments

### Add Comment
- Tool: `AIRTABLE_CREATE_COMMENT`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table", "recordId": "recXXX", "text": "Following up on this" }`

### List Comments
- Tool: `AIRTABLE_LIST_COMMENTS`
- Args: `{ "baseId": "appXXX", "tableIdOrName": "Table", "recordId": "recXXX" }`

## Use Cases

### As a CRM
- Track leads, contacts, deals in Airtable tables
- Filter by status: `"filterByFormula": "{Stage} = 'Qualified'"`
- Update deal stages as they progress
- Add notes via comments on records

### As a Content Calendar
- Create records for each piece of content
- Track status (Draft → Review → Published)
- Filter by date and platform
- Link to published posts

### As a Project Tracker
- List tasks by assignee or status
- Update completion status
- Add comments for updates

## Guidelines
1. Rate limit: 5 requests/second per base
2. Max 10 records per create/update/delete batch
3. Use `AIRTABLE_CREATE_RECORDS` (not the deprecated singular versions)
4. Always get the base schema first to understand available tables and fields
5. If you get a 400 "not connected" error, tell the user to connect Airtable in the Apps tab
