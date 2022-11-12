OUTPUT_DIR := dist
OUTPUT := $(OUTPUT_DIR)/defi.gs
SRC_DIR := src

CONFIG_FILES := tsconfig.json .eslintrc

# order is important - they'll be catted together into a single README.md
DOC_FILES := INTRO.md INSTALL.md API.md CONTRIBUTING.md
GENERATED_DOC_FILES := API.md README.md

JINJA_FILES := $(shell find src/ -type f -name '*.ts.j2')
GENERATED_TS_FILES := $(shell find src/ -type f -name '*.generated.ts')

# XXX do the api check better
API_FILES := $(shell find src/ -type f -name '*.ts' | grep api)

all: $(OUTPUT) README.md

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) \
		$(OUTPUT_DIR) \
		$(GENERATED_TS_FILES) \
		$(GENERATED_DOC_FILES)

# preprocess jinja files before typescript compiles them
# (we want the docs to end up with the processed strings)
%.generated.ts: $(JINJA_FILES)
	./scripts/processj2 $^

$(OUTPUT): $(SRC_DIR)/**.ts $(SRC_DIR)/**.generated.ts $(CONFIG_FILES) 
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

API.md: $(API_FILES)
	./scripts/generatedocs $(API_FILES) > $@

README.md: API.md $(DOC_FILES)
	cat $^ > $@

.PHONY: t
t: $(OUTPUT)
	@cat $(OUTPUT) | pbcopy
