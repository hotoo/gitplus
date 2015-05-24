
# git+

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gitplus.svg?style=flat
[npm-url]: https://npmjs.org/package/gitplus

git+ is a hack of git, smart for you.

## Feature

* Execute commands before `git subcommand` executed, `git commit` for example.

  ```yaml
  pre-commit:
    '*':
      - jshint .
      - git status
  ```

* Execute commands after `git subcommand` executed, `git clone` for example.

  ```yaml
  post-clone:
    'gitlab.example.com':
      - git config user.name hotoo
      - git config user.email hotoo@example.com
      - git config user.email
  ```

## Install

```
$ npm install gitplus -g
```

## Configure

~/.gitplusrc:

```yaml
git-path: /usr/bin/git
post-clone:
  gitlab.example.com:
    - git config user.name lizzie
    - git config user.email lizzie@example.com
  gitlab.company.com:
    - git config user.name hotoo
    - git config user.email hotoo@company.com
pre-commit:
  '*':
    - jshint .
```

~/.zshrc or ~/.bashrc

```
alias git='gitplus'
```

* `git-path`: optional, set you origin git command via absoulte path, default is `/usr/bin/git`.
* `pre-subcommand`: hooks for execute commands before `git subcommand`.
* `post-subcommand`: hooks for execute commands after `git subcommand`.
* `gitlab.example.com`, `gitlab.company.com` and `*` is a sample condition for filter git repository.
* `git config user.name lizzie` is a sample command, this will execute after `git subcommand` success and condition matched.


## Usage

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
