import React, { useState, useRef, useEffect, useMemo } from 'react';

export interface AutocompleteItem {
  id: string;
  label: string;
  value: string;
}

interface AutocompleteProps {
  items: AutocompleteItem[];
  placeholder?: string;
  onChange?: (items: AutocompleteItem[] | AutocompleteItem | null) => void;
  className?: string;
  multiple?: boolean;
  maxSelect?: number;
  value?: string | string[];
  label?: string;
  error?: string;
  required?: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  items,
  placeholder = 'Search...',
  onChange,
  className = '',
  multiple = false,
  maxSelect,
  value,
  label,
  error,
  required,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedItems = useMemo(() => {
    if (multiple) {
      if (Array.isArray(value)) {
        return items.filter(item => value.includes(item.id));
      }
    } else {
      if (typeof value === 'string') {
        const selected = items.find(item => item.value === value);
        return selected ? [selected] : [];
      }
    }
    return [];
  }, [value, items, multiple]);

  const filteredItems = useMemo(() => {
    if (query.length > 0) {
      return items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) &&
        !selectedItems.some(selected => selected.id === item.id)
      );
    }
    return [];
  }, [query, items, selectedItems]);

  useEffect(() => {
    setIsOpen(filteredItems.length > 0);
  }, [filteredItems]);

  const handleSelect = (item: AutocompleteItem) => {
    if (multiple) {
      if (selectedItems.some(selected => selected.id === item.id)) {
        const newSelected = selectedItems.filter(selected => selected.id !== item.id);
        onChange?.(newSelected);
      } else {
        if (maxSelect && selectedItems.length >= maxSelect) return;
        const newSelected = [...selectedItems, item];
        onChange?.(newSelected);
      }
    } else {
      onChange?.(item);
      setQuery(item.label);
      setIsOpen(false);
    }
  };

  const handleRemove = (item: AutocompleteItem) => {
    const newSelected = selectedItems.filter(selected => selected.id !== item.id);
    onChange?.(multiple ? newSelected : null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={multiple ? query : selectedItems[0]?.label || ''}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
        {multiple && selectedItems.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {selectedItems.map(item => (
              <span key={item.id} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                {item.label}
                <button onClick={() => handleRemove(item)} className="ml-1 text-blue-600 hover:text-blue-800">×</button>
              </span>
            ))}
          </div>
        )}
      </div>
      {isOpen && filteredItems.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};