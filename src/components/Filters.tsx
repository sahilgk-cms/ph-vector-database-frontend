import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { TimespanDropdownOptions, CategoriesDropdownOptions, SeverityDropdownOptions } from "../config";
import { useSearchParams } from "react-router-dom";

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "All") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  return (
    <div className="filters-container">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-3 my-3">
        <DropdownButton title={`Timespan: ${searchParams.get("Timespan") || "All"}`} className="filter-dropdown w-100">
          {TimespanDropdownOptions.map((option, index) => (
            <Dropdown.Item key={index} onClick={() => updateQueryParam("Timespan", option)}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <DropdownButton title={`Category: ${searchParams.get("Categories") || "All"}`} className="filter-dropdown w-100">
          {CategoriesDropdownOptions.map((option, index) => (
            <Dropdown.Item key={index} onClick={() => updateQueryParam("Categories", option)}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <DropdownButton title={`Severity: ${searchParams.get("Severity") || "All"}`} className="filter-dropdown w-100">
          {SeverityDropdownOptions.map((option, index) => (
            <Dropdown.Item key={index} onClick={() => updateQueryParam("Severity", option)}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
}

export default Filters;

