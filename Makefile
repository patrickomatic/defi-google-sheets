OUTPUT_DIR := dist
SRC_DIR := src
OUTPUT := $(OUTPUT_DIR)/defi.gs

CONFIG_FILES := tsconfig.json .eslintrc

# order is important - they'll be catted together into a single README.md
DOC_FILES := INTRO.md INSTALL.md API.md CONTRIBUTING.md

API_FILES := $(wildcard src/*/api/)

all: $(OUTPUT) README.md

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR) README.md

$(OUTPUT): $(SRC_DIR)/**.ts $(CONFIG_FILES)
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

API.md: ./scripts/generatedocs $(API_FILES)
	./scripts/generatedocs $(API_FILES) > $@

README.md: $(DOC_FILES)
	cat $^ > $@

.PHONY: t
t: $(OUTPUT)
	@cat $(OUTPUT) | pbcopy
