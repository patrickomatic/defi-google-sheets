OUTPUT_DIR := dist
OUTPUT := $(OUTPUT_DIR)/defi.js
GS_OUTPUT := $(OUTPUT_DIR)/defi.gs
SRC_DIR := src

CONFIG_FILES := tsconfig.json .eslintrc

TS_FILES := $(shell find src -type f -name '*.ts')
GENERATED_TS_FILES := $(shell find src -type f -name '*.ts.j2' | sed -e 's/\.ts\.j2$$/.generated.ts/')

EXTERNAL_DOCS_DIR := .external_docs_cache
BEACONCHAIN_API_DOCS_JSON := $(EXTERNAL_DOCS_DIR)/beaconchaindocs.json
API_DOCS_JSON := $(EXTERNAL_DOCS_DIR)/docvars.json

MD_DOCS := docs/BEACONCHAIN.md docs/ETHERSCAN.md docs/BLOCKSTREAM.md docs/BLOCKFROST.md

all: $(OUTPUT) $(MD_DOCS)

.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR) \
		$(EXTERNAL_DOCS_DIR) \
		$(GENERATED_TS_FILES) \
		scripts/*.js

%.generated.ts: %.ts.j2 $(API_DOCS_JSON) 
	./scripts/processj2 $< $(API_DOCS_JSON)

$(OUTPUT): $(API_DOCS_JSON) $(TS_FILES) $(GENERATED_TS_FILES) $(CONFIG_FILES)
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

$(GS_OUTPUT): $(OUTPUT)
	cp $(OUTPUT) $(GS_OUTPUT)

$(BEACONCHAIN_API_DOCS_JSON): 
	@mkdir -p $(EXTERNAL_DOCS_DIR)
	curl -H "Accept: application/json" -o $@ https://beaconcha.in/api/v1/docs/doc.json 

$(API_DOCS_JSON): ./scripts/builddocvars $(BEACONCHAIN_API_DOCS_JSON) templates/common.json
	@mkdir -p $(EXTERNAL_DOCS_DIR)
	./scripts/builddocvars > $(API_DOCS_JSON)

scripts/generatedocs.js: scripts/generatedocs.ts
	yarn tsc $^
 
docs/BEACONCHAIN.md: scripts/generatedocs.js $(OUTPUT) $(API_DOCS_JSON)
	node ./scripts/generatedocs.js $(OUTPUT) BC > $@

docs/ETHERSCAN.md: scripts/generatedocs.js $(OUTPUT) $(API_DOCS_JSON)
	node ./scripts/generatedocs.js $(OUTPUT) ES > $@

docs/BLOCKSTREAM.md: scripts/generatedocs.js $(OUTPUT) $(API_DOCS_JSON)
	node ./scripts/generatedocs.js $(OUTPUT) BS > $@

docs/BLOCKFROST.md: scripts/generatedocs.js $(OUTPUT) $(API_DOCS_JSON)
	node ./scripts/generatedocs.js $(OUTPUT) BF > $@
