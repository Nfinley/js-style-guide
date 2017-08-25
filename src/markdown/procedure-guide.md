# Procedure Guide

Table of Contents

* [Git Workflow](#git-workflow)
  * [Instructions](#instructions)
  * [Starting a New Task](#starting-new-task)
    * [Naming Branches](#naming-branches)
  * [Workflow](#workflow)
    * [Starting a New Task](#starting-new-task)
    * [Committing Changes Locally](#committing-changes-locally)
    * [Merging Branches](#merging-branches)
    * [Clean Up After Merging](#cleanup-after-merging)
* [Desk Check](#desk-check)
* [Node Inspector Troubleshooting](#node-inspector-for-troubleshooting)

### Git Workflow

### Instructions

1. Always create a branch from master after pulling down the latest changes.
1. When task is completed and acceptance criteria is met, test locally on your branch. 
1. Commit your changes, checkout master and merge to master locally
1. Pull changes from remote master
1. Test on your local master branch
1. Get a "Desk Check"
1. Deploy changes if all tests pass.

### Naming Branches

All branches should correspond to a JIRA story or sub-task and be named using the following convention: 

`TICKETNUMBER-description (ie: LPC-558-building-components)`

### Workflow

<strong id="starting-new-task">Starting a New Task</strong>

```
git checkout master # Switches to master branch
git pull # Get fresh copy of repo
git checkout -b <LPC-jiratasknumber-description> # Create new branch and automatically git checkout <branch_name> # Switch to it
```

<strong id="committing-changes-locally">Committing Changes Locally</strong>

```
git add <filename>
git commit -m "<your-commit-message>"
```

<strong id="merging-branches">Merging Branches</strong>

```
git checkout master # After you have tested and committed in your local branch Switch back to master branch
git merge <your-branch-name> # Merge your branch with master
git pull # Get the latest commits from master (explicit) and fix conflicts if necessary
mvn clean install # Clean-Install & run JEST & API unit-tests
#DO A DESK CHECK BEFORE PUSHING NEW FEATURES
git push origin master # Deploy your changes to the cloud
git branch -d <your-branch-name> # Delete your branch locally
```

<strong id="delete-remote-local-branches">Delete Remote & Local Branch</strong>

```
git push origin --delete <branch-name> # Remote
git branch -d <branch-name> # Local
```

<strong id="cleanup-after-merging">Cleanup After Merging</strong>

`rm <filepath/name_BASE_ID.js> #Remove all files that include: .orig, _BASE, _BACKUP,_LOCAL, _REMOTE`

### Desk Check

1. Review the commit(s).
1. Check to see if code conforms to [JavaScript Guide](/javascript-guide) & [React Guide](/react-guide).
1. If code passes, push to `master` - otherwise give feedback and repeat Step 1.

### Node Inspector for Troubleshooting

```
npm install --global node-inspector
node --debug-brk ./node_modules/.bin/jest --runInBan # Runs Jest in a Node process an external debugger can detect
node-inspector # Open a new terminal window and run this command, then copy the link provided and copy in Chrome
```