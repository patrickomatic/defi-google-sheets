BUILD_DIR := lib/
OUTPUT_DIR := dist/

# XXX all: test dist/eth.gs
all: dist/eth.gs

.PHONY: test
test: 
	yarn ava

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR)

dist/%.gs: lib/%.js
	@mkdir -p dist
	fgrep -v 'export {};' $< > $@

.PRECIOUS: lib/%.js
lib/%.js: src/%.ts tsconfig.json
	yarn tsc
