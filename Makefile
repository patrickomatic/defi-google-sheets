OUTPUT_DIR := dist
OUTPUT := $(OUTPUT_DIR)/defi.js
GS_OUTPUT := $(OUTPUT_DIR)/defi.gs
SRC_DIR := src

CONFIG_FILES := tsconfig.json .eslintrc

JINJA_FILES := $(shell find src -type f -name '*.ts.j2')
TS_FILES := $(shell find src -type f -name '*.ts')
GENERATED_TS_FILES := $(shell find src -type f -name '*.generated.ts')

all: $(OUTPUT) API.md

.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR) \
		$(GENERATED_TS_FILES) \
		API.md

%.generated.ts: $(JINJA_FILES)
	./scripts/processj2 $^

$(OUTPUT): $(TS_FILES) %.generated.ts $(CONFIG_FILES) 
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

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
