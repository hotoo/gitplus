
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

## Example

```
$ git config --global user.email
hotoo.cn@gmail.com
$ git clone git@gitlab.example.com:test/repo.git test
$ cd test
$ git config user.email
lizzie@example.com
$ git clone git@gitlab.company.com:test/repo.git
$ cd repo
$ git config user.email
hotoo@company.com
```
