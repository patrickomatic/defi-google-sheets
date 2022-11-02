OUTPUT_DIR := dist
SRC_DIR := src
OUTPUT := $(OUTPUT_DIR)/defi.gs

CONFIG_FILES := tsconfig.json .eslintrc

# XXX all: test $(OUTPUT_DIR)/eth.gs
all: $(OUTPUT)

.PHONY: test
test: 
	yarn ava

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR)

$(OUTPUT): $(SRC_DIR)/*.ts $(CONFIG_FILES)
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

.PHONY: t
t: $(OUTPUT)
	@cat $(OUTPUT) | pbcopy
