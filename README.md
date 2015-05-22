
# GIT+

Git plus is a hack of Git, it smart for you.

## Feature

* Execute commands after git clone.

## Install

```
$ npm install gitplus -g
```

## Usage

~/.gitplusrc:

```yaml
post-clone:
  gitlab.example.com:
    - git config user.name lizzie
    - git config user.email lizzie@example.com
  gitlab.company.com:
    - git config user.name hotoo
    - git config user.email hotoo@company.com
```

~/.zshrc or ~/.bashrc

```
alias git='gitplus'
```
