OUTPUT_DIR := dist
OUTPUT := $(OUTPUT_DIR)/defi.js
GS_OUTPUT := $(OUTPUT_DIR)/defi.gs
DOC_OUTPUT := $(OUTPUT_DIR)/defi-doc.js

TS_FILES := $(shell find src -type f -name '*.ts')
GENERATED_TS_FILES := $(shell find src -type f -name '*.ts.j2' | sed -e 's/\.ts\.j2$$/.generated.ts/')

EXTERNAL_DOCS_DIR := .externaldocscache
BEACONCHAIN_API_DOCS_JSON := $(EXTERNAL_DOCS_DIR)/beaconchaindocs.json
API_DOCS_JSON := $(EXTERNAL_DOCS_DIR)/docvars.json

MD_DOCS := docs/BEACONCHAIN.md docs/ETHERSCAN.md docs/BLOCKSTREAM.md docs/BLOCKFROST.md
TEST_CSVS := test/etherscan.csv test/beaconchain.csv test/blockstream.csv test/blockfrost.csv

all: $(GS_OUTPUT) $(MD_DOCS) $(TEST_CSVS)

.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR) \
		$(EXTERNAL_DOCS_DIR) \
		$(TEST_CSVS) \
		$(GENERATED_TS_FILES) \
		scripts/*.js

%.generated.ts: %.ts.j2 $(API_DOCS_JSON) 
	./scripts/processj2 $< $(API_DOCS_JSON)

$(OUTPUT): $(API_DOCS_JSON) $(TS_FILES) $(GENERATED_TS_FILES) 
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

$(GS_OUTPUT): $(OUTPUT)
	cp $(OUTPUT) $(GS_OUTPUT)

$(DOC_OUTPUT): $(OUTPUT)
	fgrep -v '@customfunction' $(OUTPUT) > $(DOC_OUTPUT)

$(BEACONCHAIN_API_DOCS_JSON): 
	@mkdir -p $(EXTERNAL_DOCS_DIR)
	curl -H "Accept: application/json" -o $@ https://beaconcha.in/api/v1/docs/doc.json 

$(API_DOCS_JSON): ./scripts/builddocvars $(BEACONCHAIN_API_DOCS_JSON) templates/common.json
	@mkdir -p $(EXTERNAL_DOCS_DIR)
	./scripts/builddocvars > $(API_DOCS_JSON)

scripts/generatedocs.js: scripts/generatedocs.ts
	yarn tsc $^
 
docs/BEACONCHAIN.md: scripts/generatedocs.js $(DOC_OUTPUT) 
	node ./scripts/generatedocs.js $(DOC_OUTPUT) BC > $@

docs/ETHERSCAN.md: scripts/generatedocs.js $(DOC_OUTPUT) 
	node ./scripts/generatedocs.js $(DOC_OUTPUT) ES > $@

docs/BLOCKSTREAM.md: scripts/generatedocs.js $(DOC_OUTPUT) 
	node ./scripts/generatedocs.js $(DOC_OUTPUT) BS > $@

docs/BLOCKFROST.md: scripts/generatedocs.js $(DOC_OUTPUT) 
	node ./scripts/generatedocs.js $(DOC_OUTPUT) BF > $@

scripts/generatetestcsv.js: scripts/generatetestcsv.ts
	yarn tsc $^

test/beaconchain.csv: scripts/generatetestcsv.js $(DOC_OUTPUT)
	node ./scripts/generatetestcsv.js $(DOC_OUTPUT) BC > $@

test/etherscan.csv: scripts/generatetestcsv.js $(DOC_OUTPUT)
	node ./scripts/generatetestcsv.js $(DOC_OUTPUT) ES > $@

test/blockstream.csv: scripts/generatetestcsv.js $(DOC_OUTPUT)
	node ./scripts/generatetestcsv.js $(DOC_OUTPUT) BS > $@

test/blockfrost.csv: scripts/generatetestcsv.js $(DOC_OUTPUT)
	node ./scripts/generatetestcsv.js $(DOC_OUTPUT) BF > $@

.PHONY: dev
dev: $(GS_OUTPUT)
	cat $(GS_OUTPUT) | pbcopy
