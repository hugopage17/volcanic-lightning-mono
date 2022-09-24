import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { Typography, Divider } from "@mui/material";
import { Feature } from "@global-volcanic-lightning/types";
import { palette } from "../../../colorPalette";

interface Props {
  strike: Feature;
  active: boolean;
  theme: string | undefined;
  index: number;
}

const StrikeMarker: React.FC<Props> = ({ strike, active, theme, index }) => {
  if (!active) {
    return null;
  }

  return (
    <CircleMarker
      center={strike.geometry.coordinates}
      key={`${strike.geometry.coordinates[0]}-${strike.geometry.coordinates[1]}`}
      radius={8}
      color={theme === "dark" ? palette.secondary : palette.accent}
      fillColor={theme === "dark" ? palette.secondary : palette.accent}
    >
      <Popup>
        <Typography variant="body1" aria-label={`map-popup-dialog-${index}`}>
          <b>{strike.properties.name}</b> - {strike.properties.area}
        </Typography>
        <Divider />
        <div>
          <Typography variant="body2">
            20km Strikes: {strike.properties.twentyKmStrikes}
          </Typography>
          <Typography variant="body2">
            100km Strikes: {strike.properties.hundredKmStrikes}
          </Typography>
        </div>
      </Popup>
    </CircleMarker>
  );
};

export default StrikeMarker;
