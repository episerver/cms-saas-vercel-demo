"use client";
import clsx from "clsx";
import { useContext } from "react";
import { Props as SelectProps, components } from "react-select";
import { BlogListingContext } from "../blog-listing-block";
import LocalTime from "@/components/shared/local-time";
import Select from "react-select";
import { ALL_DATES, ALL_AUTHORS } from "../blog-listing-block";

type CustomControlProps = {
  children?: React.ReactNode;
  label: string;
  selectProps?: {
    label?: string;
  };
};

type CombinedControlProps = CustomControlProps & SelectProps;

const Control = ({ children, selectProps, ...props }) => {
  const labelString = selectProps?.label || "";

  return (
    /** @ts-ignore */
    <components.Control {...props}>
      <div>
        <div className="text-[14px] text-azure font-medium">{labelString}</div>
        <div className="font-semibold">{children}</div>
      </div>
    </components.Control>
  );
};

const SelectComponent = (props) => {
  const optionStyles = {
    base: "hover:cursor-pointer text-vulcan font-semibold hover:text-azure",
    hover: "bg-ghost-white",
    focus: "bg-ghost-white active:bg-ghost-white",
    selected: "!text-verdansk after:content-['✔'] after:ml-2",
  };

  return (
    <Select
      unstyled
      components={{
        Control: Control,
        Input: (props) => (
          <components.Input {...props} aria-activedescendant={undefined} />
        ),
      }}
      classNames={{
        control: () =>
          "border-2 border-azure rounded-[10px] pl-8 py-[4px] pr-24 relative min-w-[160px]",
        indicatorsContainer: () =>
          "bg-azure text-white rounded-[0_7px_7px_0] absolute right-0 top-0 h-full px-[8px]",
        clearIndicator: () => "!hidden",
        menu: () =>
          "px-[20px] py-[8px] rounded-[10px] border-2 border-azure mt-[8px] bg-white",
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
      }}
      {...props}
    />
  );
};

const ListingFilters = ({}) => {
  const {
    setPageSize,
    pageSize,
    authorOptions,
    setSelectedAuthor,
    selectedAuthor,
    setPublishedDate,
    selectedPublishedDate,
    datesOptions,
  } = useContext(BlogListingContext);

  const resultsOptions = [
    { value: 6, label: "6" },
    { value: 12, label: "12" },
    { value: 24, label: "24" },
    { value: 36, label: "36" },
  ];
  return (
    <div className="grid gap-16 md:grid-flow-col md:auto-cols-fr grid-cols-1 max-w-[900px] mx-auto">
      <SelectComponent
        options={authorOptions}
        defaultValue={
          selectedAuthor !== ALL_AUTHORS
            ? { value: selectedAuthor, label: selectedAuthor }
            : null
        }
        label="Author"
        onChange={(v) => {
          setSelectedAuthor(v.value);
        }}
      />
      <SelectComponent
        options={datesOptions}
        defaultValue={
          selectedPublishedDate !== ALL_DATES
            ? {
                value: selectedPublishedDate,
                label: <LocalTime date={selectedPublishedDate} mode="Date" />,
              }
            : null
        }
        label="Date"
        onChange={(v) => {
          setPublishedDate(v.value);
        }}
      />
      <SelectComponent
        options={resultsOptions}
        defaultValue={{ value: pageSize, label: pageSize.toString() }}
        label="Results"
        onChange={(v) => {
          setPageSize(v.value);
        }}
      />
    </div>
  );
};
export default ListingFilters;
