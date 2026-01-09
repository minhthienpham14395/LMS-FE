import React, { useState, useRef, useEffect, useMemo } from "react";
import { Search, X, ChevronDown } from "lucide-react";

export interface AutocompleteItem {
  id: string | number;
  label: string;
  value?: string;
  [key: string]: unknown;
}

export interface AutocompleteProps {
  items: AutocompleteItem[];
  value?: string | number | (string | number)[];
  onChange?: (item: AutocompleteItem | AutocompleteItem[] | null) => void;
  onInputChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  className?: string;
  itemsClassName?: string;
  accentColor?: string;
  noResultsText?: string;
  maxHeight?: string;
  minChars?: number;
  debounceMs?: number;
  renderItem?: (item: AutocompleteItem, highlight: string) => React.ReactNode;
  renderValue?: (item: AutocompleteItem) => React.ReactNode;
  maxSelect?: number;
  tagsClassName?: string;
  removeIcon?: React.ReactNode;
}

export default function Autocomplete({
  items,
  value,
  onChange,
  onInputChange,
  placeholder = "Tìm kiếm...",
  label,
  disabled = false,
  error,
  required = false,
  clearable = true,
  searchable = true,
  multiple = false,
  className = "",
  itemsClassName = "",
  accentColor = "#0891b2",
  noResultsText = "Không tìm thấy kết quả",
  maxHeight = "max-h-60",
  minChars = 0,
  debounceMs = 300,
  renderItem,
  maxSelect,
  tagsClassName = "",
  removeIcon,
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Get selected items (handle both single and multiple)
  const selectedItems = useMemo(() => {
    if (!value) return [];
    if (multiple) {
      const ids = Array.isArray(value) ? value : [value];
      return items.filter((item) => ids.includes(item.id));
    } else {
      const item = items.find((item) => item.id === value);
      return item ? [item] : [];
    }
  }, [items, value, multiple]);

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!searchable || inputValue.length < minChars) {
      return items;
    }

    const query = inputValue.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(query) &&
        (!multiple ||
          !selectedItems.find((selected) => selected.id === item.id))
    );
  }, [items, inputValue, searchable, minChars, multiple, selectedItems]);

  // Handle input change with debounce
  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    setHighlightedIndex(-1);
    setIsOpen(true);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      onInputChange?.(newValue);
    }, debounceMs);
  };

  // Handle item selection
  const handleSelectItem = (item: AutocompleteItem) => {
    if (multiple) {
      // Check max select limit
      if (maxSelect && selectedItems.length >= maxSelect) {
        return;
      }

      const newSelectedItems = [...selectedItems, item];
      onChange?.(newSelectedItems);
      setInputValue("");
      setHighlightedIndex(-1);
      // Keep dropdown open for multiple select
    } else {
      onChange?.(item);
      setInputValue("");
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  // Handle remove item (multiple select)
  const handleRemoveItem = (itemId: string | number) => {
    if (!multiple) return;

    const newSelectedItems = selectedItems.filter((item) => item.id !== itemId);
    onChange?.(newSelectedItems.length > 0 ? newSelectedItems : null);
  };

  // Handle clear all
  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(null);
    setInputValue("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && e.key !== "ArrowDown" && e.key !== "Enter") return;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) =>
            prev < filteredItems.length - 1 ? prev + 1 : prev
          );
        }
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      }
      case "Enter": {
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          handleSelectItem(filteredItems[highlightedIndex]);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      }
      case "Escape": {
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      }
      case "Backspace": {
        // Remove last item when backspace is pressed on empty input
        if (multiple && inputValue === "" && selectedItems.length > 0) {
          handleRemoveItem(selectedItems[selectedItems.length - 1].id);
        }
        break;
      }
      default:
        break;
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const highlightedElement = listRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [highlightedIndex]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight search text in item label
  const highlightSearchText = (label: string, query: string) => {
    if (!query || query.length < minChars) return label;

    const parts = label.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          style={{ backgroundColor: `${accentColor}20`, color: "inherit" }}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const isMaxSelectReached = maxSelect && selectedItems.length >= maxSelect;

  return (
    <><style>{`
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .autocomplete-dropdown {
        animation: slideDown 0.2s ease-out;
      }

      .autocomplete-item {
        transition: all 0.2s ease;
      }

      .autocomplete-item:hover,
      .autocomplete-item.highlighted {
        background-color: rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(
          accentColor.slice(3, 5),
          16
      )}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.1);
        color: ${accentColor};
      }

      .autocomplete-item.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .autocomplete-input:focus {
        outline: none;
        border-color: ${accentColor};
        box-shadow: 0 0 0 3px rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(
          accentColor.slice(3, 5),
          16
      )}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.1);
      }

      .autocomplete-input.error {
        border-color: #ef4444;
        background-color: rgba(239, 68, 68, 0.05);
      }

      .autocomplete-input.error:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        border-color: #ef4444;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.375rem 0.75rem;
        background-color: ${accentColor};
        color: white;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
        animation: slideDown 0.2s ease-out;
      }

      .tag-remove {
        cursor: pointer;
        transition: opacity 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tag-remove:hover {
        opacity: 0.7;
      }

      .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style><div ref={containerRef} className={`w-full ${className}`}>
              {/* Label */}
              {label && (
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                      {label}
                      {required && <span className="text-red-500 ml-1">*</span>}
                      {multiple && maxSelect && (
                          <span className="text-gray-500 font-normal ml-2">
                              ({selectedItems.length}/{maxSelect})
                          </span>
                      )}
                  </label>
              )}

              {/* Input Container */}
              <div className="relative">
                  {/* Tags (Multiple Select) */}
                  {multiple && selectedItems.length > 0 && (
                      <div className={`tags-container ${tagsClassName}`}>
                          {selectedItems.map((item) => (
                              <div key={item.id} className="tag">
                                  <span>{item.label}</span>
                                  <button
                                      type="button"
                                      onClick={(e) => {
                                          e.preventDefault();
                                          handleRemoveItem(item.id);
                                      } }
                                      className="tag-remove"
                                      title="Remove"
                                  >
                                      {removeIcon || <X size={14} />}
                                  </button>
                              </div>
                          ))}
                      </div>
                  )}

                  <div className="relative">
                      {/* Search Icon */}
                      <Search
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

                      {/* Input Field */}
                      <input
                          ref={inputRef}
                          type="text"
                          value={inputValue}
                          onChange={(e) => handleInputChange(e.target.value)}
                          onKeyDown={handleKeyDown}
                          onFocus={() => {
                              setIsOpen(true);
                              setHasInteracted(true);
                          } }
                          onBlur={() => {
                              // Reset input if no item selected in single mode
                              if (!multiple && selectedItems.length === 0) {
                                  setInputValue("");
                              }
                          } }
                          placeholder={multiple ? "Thêm mục..." : placeholder}
                          disabled={disabled || !!(multiple && isMaxSelectReached)}
                          className={`autocomplete-input w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 bg-white transition-all text-gray-900 placeholder-gray-400 text-sm md:text-base ${error ? "error" : ""} ${disabled || isMaxSelectReached ? "opacity-60 cursor-not-allowed" : ""}`} />

                      {/* Clear / Dropdown Icon */}
                      {(selectedItems.length > 0 && clearable && !disabled) ? (
                          <button
                              onClick={handleClearAll}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                              type="button"
                              title="Clear all"
                          >
                              <X size={18} />
                          </button>
                      ) : (
                          <ChevronDown
                              size={18}
                              className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""} pointer-events-none`} />
                      )}
                  </div>

                  {/* Dropdown List */}
                  {isOpen && filteredItems.length > 0 && (
                      <div
                          className={`autocomplete-dropdown absolute top-full left-0 right-0 mt-2 ${maxHeight} overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50 ${itemsClassName}`}
                          ref={listRef}
                      >
                          {filteredItems.map((item, index) => {
                              const isSelected = multiple &&
                                  selectedItems.find((selected) => selected.id === item.id);
                              const isDisabled = isMaxSelectReached && !isSelected;

                              return (
                                  <div
                                      key={item.id}
                                      onClick={() => {
                                          if (!isDisabled) {
                                              handleSelectItem(item);
                                          }
                                      } }
                                      className={`autocomplete-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 ${highlightedIndex === index ? "highlighted" : ""} ${isDisabled ? "disabled" : ""}`}
                                  >
                                      {renderItem ? (
                                          renderItem(item, inputValue)
                                      ) : (
                                          <div className="flex items-center justify-between">
                                              <div className="flex-1">
                                                  <p className="font-medium text-gray-900 text-sm md:text-base">
                                                      {highlightSearchText(item.label, inputValue)}
                                                  </p>
                                                  {item.value && (
                                                      <p className="text-xs text-gray-500">{item.value}</p>
                                                  )}
                                              </div>
                                              {isSelected && (
                                                  <span
                                                      className="ml-2 text-lg font-bold"
                                                      style={{ color: accentColor }}
                                                  >
                                                      ✓
                                                  </span>
                                              )}
                                          </div>
                                      )}
                                  </div>
                              );
                          })}
                      </div>
                  )}

                  {/* No Results */}
                  {isOpen &&
                      searchable &&
                      inputValue.length >= minChars &&
                      filteredItems.length === 0 && (
                          <div className="autocomplete-dropdown absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                  {noResultsText}
                              </div>
                          </div>
                      )}
              </div>

              {/* Error Message */}
              {error && hasInteracted && (
                  <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>
              )}

              {/* Helper Text */}
              {!error && minChars > 0 && selectedItems.length === 0 && (
                  <p className="mt-1 text-xs text-gray-500">
                      Nhập ít nhất {minChars} ký tự để tìm kiếm
                  </p>
              )}

              {/* Max Select Reached Message */}
              {multiple && isMaxSelectReached && (
                  <p className="mt-1 text-xs text-gray-500">
                      Bạn đã chọn tối đa {maxSelect} mục
                  </p>
              )}
          </div></>
  );
}