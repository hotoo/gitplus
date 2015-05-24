VERSION = $(shell cat package.json | grep version | awk -F'"' '{print $$4}')

publish:
	@git tag $(VERSION)
	git push origin $(VERSION)
	@npm publish
