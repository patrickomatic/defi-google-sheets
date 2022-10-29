OUTPUT_DIR := dist
SRC_DIR := src

CONFIG_FILES := tsconfig.json .eslintrc

# XXX all: test $(OUTPUT_DIR)/eth.gs
all: $(OUTPUT_DIR)/defi.gs

.PHONY: test
test: 
	yarn ava

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR)

$(OUTPUT_DIR)/defi.gs: $(SRC_DIR)/*.ts $(CONFIG_FILES)
	@mkdir -p $(OUTPUT_DIR)
	yarn tsc --out $@

