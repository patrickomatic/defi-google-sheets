OUTPUT_DIR := dist
OUTPUT := $(OUTPUT_DIR)/defi.js
GS_OUTPUT := $(OUTPUT_DIR)/defi.gs
SRC_DIR := src

CONFIG_FILES := tsconfig.json .eslintrc

JINJA_FILES := $(shell find src -type f -name '*.ts.j2')
TS_FILES := $(shell find src -type f -name '*.ts')
GENERATED_TS_FILES := $(shell find src -type f -name '*.ts.j2' | sed -e 's/\.ts\.j2$$/.generated.ts/')

EXTERNAL_DOCS_DIR := .external_docs_cache
BEACONCHAIN_API_DOCS_JSON := $(EXTERNAL_DOCS_DIR)/beaconchaindocs.json

all: $(OUTPUT) API.md scripts/generatedocs.js

.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR) \
		$(GENERATED_TS_FILES) \
		API.md \
		$(BEACONCHAIN_API_DOCS_JSON) \
		scripts/generatedocs.js

%.generated.ts: %.ts.j2
	./scripts/processj2 $<

$(OUTPUT): $(BEACONCHAIN_API_DOCS_JSON) $(TS_FILES) $(GENERATED_TS_FILES) $(CONFIG_FILES)
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

$(BEACONCHAIN_API_DOCS_JSON): 
	@mkdir -p $(EXTERNAL_DOCS_DIR)
	curl -H "Accept: application/json" -o $@ https://beaconcha.in/api/v1/docs/doc.json 

# TODO figure out the URL to download the etherscan docs too

scripts/generatedocs.js: scripts/generatedocs.ts
	yarn tsc $^

$(GS_OUTPUT): $(OUTPUT)
	cp $(OUTPUT) $(GS_OUTPUT)

API.md: $(OUTPUT)
	# TODO strip out @customfunction
	# TODO split into a file for each API
# skip the first 3 lines because it's all yarn output
	yarn jsdoc2md -f $(OUTPUT) | tail -n +3 > $@

.PHONY: t
t: $(GS_OUTPUT)
	@cat $(GS_OUTPUT) | pbcopy
