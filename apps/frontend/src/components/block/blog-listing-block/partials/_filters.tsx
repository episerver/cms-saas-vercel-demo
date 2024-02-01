"use client";
import clsx from "clsx";
import Select, { Props as SelectProps, components } from "react-select";

type CustomControlProps = {
  children?: React.ReactNode;
  label: string;
  selectProps?: {
    label?: string;
  };
};

type CombinedControlProps = CustomControlProps & SelectProps;

const Control: React.FC<CombinedControlProps> = ({ children, selectProps, ...props }) => {
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

const SelectComponent = (props: CombinedControlProps) => {
  const optionStyles = {
    base: "hover:cursor-pointer text-vulcan font-semibold hover:text-azure",
    hover: "bg-ghost-white",
    focus: "bg-ghost-white active:bg-ghost-white",
    selected: "!text-verdansk after:content-['✔'] after:ml-2",
  };

  return (
    <Select
      unstyled
      /** @ts-ignore */
      components={{ Control }}
      classNames={{
        control: () => "border-2 border-azure rounded-[10px] pl-8 py-[4px] pr-24 relative min-w-[160px]",
        indicatorsContainer: () => "bg-azure text-white rounded-[0_7px_7px_0] absolute right-0 top-0 h-full px-[8px]",
        clearIndicator: () => "!hidden",
        menu: () => "px-[20px] py-[8px] rounded-[10px] border-2 border-azure mt-[8px] bg-white",
        option: ({ isFocused, isSelected }) => clsx(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
      }}
      {...props}
    />
  );
};

const ListingFilters = ({}) => {
  // Generate these options from graph.
  const topicOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const authorOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const dateOptions = [
    { value: "", label: "Any time" },
    { value: 1, label: "1 month ago" },
    { value: 3, label: "3 months ago" },
    { value: 6, label: "6 months ago" },
    { value: 12, label: "A year ago" },
  ];
  const resultsOptions = [
    { value: 12, label: "12" },
    { value: 24, label: "24" },
    { value: 36, label: "36" },
    { value: 48, label: "48" },
  ];
  return (
    <div className="grid gap-16 md:grid-flow-col md:auto-cols-fr grid-cols-1 max-w-[900px] mx-auto">
      <SelectComponent options={topicOptions} isMulti label="Topic" />
      <SelectComponent options={authorOptions} label="Author" />
      <SelectComponent options={dateOptions} isMulti label="Date" />
      <SelectComponent options={resultsOptions} label="Results" />
    </div>
  );
};
export default ListingFilters;
