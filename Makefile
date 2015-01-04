BIN = ./node_modules/.bin

.PHONY: bootstrap start;

start: bootstrap
	@grunt

bootstrap: package.json
	@npm install
