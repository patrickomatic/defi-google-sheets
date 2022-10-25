BUILD_DIR := lib
OUTPUT_DIR := dist
SRC_DIR := src

CONFIG_FILES := tsconfig.json .eslintrc

# XXX all: test $(OUTPUT_DIR)/eth.gs
all: $(OUTPUT_DIR)/eth.gs

.PHONY: test
test: 
	yarn ava

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR)

$(OUTPUT_DIR)/%.gs: $(BUILD_DIR)/%.js
	@mkdir -p $(BUILD_DIR)
# strip out the empty export or Google Spreadsheets will barf
	@fgrep -v 'export {};' $< > $@

.PRECIOUS: $(BUILD_DIR)/%.js
$(BUILD_DIR)/%.js: $(SRC_DIR)/%.ts $(CONFIG_FILES)
	yarn tsc
