
# GIT+

Git plus is a hack for Git, it smart for you.

## Feature

* Execute commands post git clone.

## Install

```
$ npm install gitplus -g
```

## Usage

~/.gitplusrc:

```yaml
post-clone:
  gitlab.example.com:
    - git config user.name Lizzie
    - git config user.email lizzie@example.com
  gitlab.company.com:
    - git config user.name hotoo
    - git config user.email hotoo@company.com
```

~/.zshrc or ~/.bashrc

```
alias git='gitplus'
```
