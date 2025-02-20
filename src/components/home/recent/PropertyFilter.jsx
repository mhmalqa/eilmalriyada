import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const PropertyFilter = ({
  propertyTypes,
  onFilterChange,
  filterStatus,
  setFilterStatus,
  style,
}) => {
  const dir = document.querySelector("html").getAttribute("dir");

  const [selectedType, setSelectedType] = useState("all");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTypeFilterChange = (type) => {
    setSelectedType(type);
    onFilterChange(type, filterStatus);
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setFilterStatus(status);
    onFilterChange(selectedType, status);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        my={2}
        style={style}
        overflowX={isMobile ? "auto" : "visible"} // Enable horizontal scrolling on mobile
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          style={{
            overflowX: isMobile ? "auto" : "visible",
            whiteSpace: isMobile ? "nowrap" : "normal", // Prevent wrapping on mobile
          }}
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            style={{
              display: "flex",
              gap: "0px", // Space between buttons
              flexWrap: isMobile ? "nowrap" : "wrap", // Prevent wrapping on mobile
            }}
          >
            <Button
              key="all"
              onClick={() => handleTypeFilterChange("all")}
              variant={selectedType === "all" ? "contained" : "outlined"}
              style={{
                fontFamily: "Alexandria, sans-serif",
                fontWeight: "600",
                minWidth: "100px", // Minimum width for buttons
              }}
            >
              {dir === "ltr" ? "All" : "جميع العقارات"}
            </Button>
            {propertyTypes.map((type) => (
              <Button
                key={type}
                onClick={() => handleTypeFilterChange(type)}
                variant={selectedType === type ? "contained" : "outlined"}
                style={{
                  fontFamily: "Alexandria, sans-serif",
                  fontWeight: "600",
                  minWidth: "100px", // Minimum width for buttons
                }}
              >
                {type}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        style={style}
        overflowX={isMobile ? "auto" : "visible"} // Enable horizontal scrolling on mobile
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          style={{
            overflowX: isMobile ? "auto" : "visible",
            whiteSpace: isMobile ? "nowrap" : "normal", // Prevent wrapping on mobile
          }}
        >
          <RadioGroup
            aria-label="property-status"
            name="property-status"
            value={filterStatus}
            onChange={handleStatusChange}
            row
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label={dir === "rtl" ? "كافة الحالات" : "All cases"}
            />
            <FormControlLabel
              value="For sale"
              control={<Radio />}
              label={dir === "rtl" ? "للبيع" : "For sale"}
            />
            <FormControlLabel
              value="For Rent"
              control={<Radio />}
              label={dir === "rtl" ? "للإيجار" : "For rent"}
            />
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};

export default PropertyFilter;
