---
author: "Ryan Dunn"
date: "2020-02-11T00:00:00.000Z"
title: "Using my command history to decide some aliases"
description: "Today I finally decided to set up some aliases to make my life easier in the terminal, however I was not so sure what would be most useful for me."
slug: "using-my-command-history-to-decide-some-aliases"
---

Today I finally decided to set up some aliases to make my life easier in the terminal, however I was not so sure what would be most useful for me. There are a lot of resources out there with collections of aliases, but everyone's workflow is different - plus there are commands that I use just for the project I'm currently working on.

The shell I use is zshell, which has a stored history of all the commands I have ever typed in the `.zsh_history` file, there is a similar file for other shells. I decided to take a little dive into this history to see which commands I was using the most, then make some aliases based on that.

## The history file

Opening the history file from here `code ~/.zsh_history`, the file looks something like this with thousands of lines for me:

```
: 1580312682:0;docker-compose up -d
: 1574942146:0;git rebase -i HEAD~2
: 1575637243:0;git push -u origin hotfix/edge_bugs
: 1575637313:0;git checkout master
: 1575637328:0;git checkout -b hotfix/autocomplete
: 1581072502:0;cd ../
: 1581072502:0;ls
: 1575637359:0;git cherry-pick 3538df76a00a16aa04190d075
...
```

## Some very basic analysis

I decided to try to take all of those commands and count how many times I had used each one, then sort them by most used - just to get a basic look at what I was typing the most.

I made a quick nodejs script to do this. First reading the file, splitting each line into an array and removing the timestamp from the beginning. Then finally rewriting the file back into a text file in the same directory.

```javascript
const path = require("path");
const fs = require("fs");

const historyFile = path.join(process.env["HOME"], ".zsh_history");

fs.readFile(historyFile, "utf8", (err, buffer) => {
  const commands = buffer.split("\n").map((line) => line.substring(15));

  const output = commands.join("\n");
  fs.writeFile("result.txt", output, () => {
    console.log("Success");
  });
});
```

From the directory, running `node analyse.js` this outputs a list of commands with no timestamps on them in a new text file in the same directory. Great.

Next I needed to group and count all the commands, with some slight refactoring of the code:

```javascript
// count all instances of each command
const counts = {};
buffer.split("\n").forEach((line) => {
  const command = line.substring(15);
  counts[command] = counts[command] || 0;
  counts[command]++;
});

// convert into a sorted list of commands
const output = Object.entries(counts)
  .sort(([, countA], [, countB]) => countB - countA)
  .map(([command, count]) => `${count} | ${command}`)
  .join("\n");
```

This outputs the sorted list, which looks something like this:

```
118 | cd ../
114 | code .
114 | git push
93 | git pull
92 | yarn middleware
80 | yarn
79 | git add .
67 | yarn start --reset-cache
66 | docker-compose exec php-fpm bash
...
1 | git merge develop_SIT-608
1 | git merge develop_SIT-611
1 | git merge develop_SIT-615
```

The top of the list contains the most obvious commands I type all the time, but towards the bottom there are the things I use a lot but aren't unique (eg: `git merge`, `git checkout`, etc). This could be made more accurate by adding a fuzzy search but I thought it was fun just to scan over the list and get a general idea.

## Creating the aliases

To add an alias you need to edit the config file for your shell. For zshell that's the `.zshrc` file, for bash it's the `.bashrc` file. From looking at my command usage I decided on just a few that were going to make my life easier:

```shell
# Misc helpers
alias pr="cd ~/projects"
alias yarnclean="rm -rf node_modules && yarn"

#[company] helpers
alias rdw="cd ~/projects/[company]-web"
alias rdc="cd ~/projects/[company]-cms"
alias sda="cd ~/projects/[company]-app"
alias ym="yarn middleware"
alias cp="docker-compose exec php-fpm clean-pimcore"

# Git helpers
alias gclean="git remote prune origin && git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d"
alias gps="git push"
alias gpsu="gps -u origin HEAD"

alias gpl="git pull"
alias gplo="git pull origin" #branch-name
alias gplod="gplo develop"

alias gc="git checkout"
alias gb="gc -b"
alias gcd="gc develop"
```

What's best for me isn't necessarily best for everyone else. For example, I like to do my commits from the vscode git diff screen because it's more obvious to me what's happening in my commits from there. As such I don't really need any `git add` or `git commit` aliases to speed up my workflow, but somebody else would. This applies to all kinds of ways your workflow is personal to you.

Having used just these few for a day or so now I can really feel the difference.
