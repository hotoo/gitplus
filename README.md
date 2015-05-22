
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
git-path: /usr/bin/git
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

## Configure

* `git-path`: optional, set you origin git command via absoulte path, default is `/usr/bin/git`.
* `post-clone`: hooks for execute commands after git clone.
* `gitlab.example.com` or `gitlab.company.com` is a sample condition for filter git repository.
* `git config user.name lizzie` is a sample command, this will execute after git clone success and condition matched.


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
