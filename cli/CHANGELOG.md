# Changelog

## [1.0.0] - 2026-03-26

### Added

- **CLI for browsing and installing OpenLabor skills.** `openlabor list employees`, `openlabor list skills`, `openlabor search`, and `openlabor install` commands.
- **Multi-tool support.** Install into Claude Code, Cursor, Codex, OpenCode, Windsurf, or raw files via `--target` flag. Auto-detects your tool.
- **Remote registry.** When run outside the repo, fetches skills directly from GitHub.
- **Versioning system.** `openlabor version`, `openlabor update`, `openlabor outdated`, `openlabor update-skills` commands.
- **Config management.** `openlabor config` with `~/.openlabor/config.yaml` for `auto_upgrade`, `default_target`, `update_check`.
- **Shell-based update check.** `bin/openlabor-update-check` runs periodic checks with snooze escalation (24h → 48h → 7d).
- **Version tracking on installed skills.** Every installed file includes a version marker for outdated detection.
