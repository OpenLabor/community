---
name: Daily Code Review Sweep
role: CTO
schedule: Daily at 9:00 AM
estimatedCredits: 12
tags: [code review, pull requests, security, engineering, daily]
---

# Daily Code Review Sweep

Review all open pull requests for bugs, security issues, and style violations.

## Steps

1. Scan all open pull requests
2. Review for bugs, logic errors, and edge cases
3. Run security audit for vulnerabilities
4. Verify coding standards compliance
5. Post review comments and generate summary

## Prompt

Use #Code review to scan all open pull requests in the repository. Check each PR for bugs, logic errors, and edge cases. Apply #Security audits to flag any vulnerabilities such as SQL injection, XSS, or exposed secrets. Verify adherence to coding standards using #Technical documentation guidelines. Leave detailed review comments with suggested fixes. Generate a summary report listing PRs reviewed, issues found, and approval status.
