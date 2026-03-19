---
description: Create or update PR with auto-generated description
argument-hint: [target-branch=main]
allowed-tools: Bash(git *), Bash(gh *)
model: sonnet
---

# Create or Update Pull Request

Create or update a pull request from the current branch to `$1` (defaults to `main` when omitted) with an auto-generated description.

## Workflow

1. **Commit pending changes**: If there are uncommitted changes, stage and commit them with a descriptive message. If there are no changes, continue.

2. **Get repository information**:
   - Get current branch name: `git branch --show-current`
   - Get repository owner and name from remote URL: `git remote get-url origin`

3. **Push changes to remote**:
   - Push current branch with: `git push -u origin HEAD`
   - If push fails, report the error and stop

4. **Check for existing PR**:
   - Use `gh pr list --head <current-branch> --base <target-branch> --json number,title,url` to check if a PR already exists
   - Parse JSON output to determine if an open PR exists

5. **Analyze changes for PR description**:
   - Determine target branch as `$1` or `main` if not provided
   - Get commit history since divergence: `git log <target-branch>..HEAD --oneline`
   - Get full diff: `git diff <target-branch>...HEAD`
   - Review the changed files and identify what was built

6. **Generate PR title**:
   - Create a concise, descriptive title (50-72 characters)
   - Use conventional commit prefixes (feat:, fix:, refactor:, etc.)

7. **Generate PR description** following this template:

```markdown
## TLDR

[One-to-two sentence summary of what this PR does]

## What was built

[Describe the component/feature built, key technical decisions, and how it works]

## Workshop notes

- **Participant**: [branch name or folder name]
- **Prompts used**: [number of turns/prompts needed]
```

8. **Create or update the PR**:
   - **If PR exists**: Update using `gh pr edit <pr-number> --title "<title>" --body "<description>"`
   - **If PR doesn't exist**: Create using:
     ```bash
     gh pr create --base "$TARGET_BRANCH" --title "$TITLE" --body "$(cat <<'EOF'
     <generated description>
     EOF
     )"
     ```

9. **Report results**:
   - Confirm if PR was created or updated
   - Provide the PR URL

## Error Handling

- If target branch doesn't exist, stop and notify user
- If push fails, report error and stop
- If no changes exist between branches, notify user

## Example Usage

```
/create-pr          # defaults to main
/create-pr main
/create-pr develop
```
