import { h } from "preact";
import { useState } from "preact/hooks";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { Button, Stack, TextField } from "@mui/material";

const App = () => {
  const [principalTime, setPrincipalTime] = useState(new Date());

  const setCurrentTime = () => {
    setPrincipalTime(new Date());
  };

  return (
    <div
      id="app"
      style={{
        width: "full",
        paddingTop: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "310px" }}>
        <Stack spacing={2} direction="row">
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              value={principalTime}
              onChange={(val) => setPrincipalTime(val)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            style={{
              width: "min-content",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              fontSize: "0.75rem",
              whiteSpace: "nowrap",
            }}
            onClick={setCurrentTime}
          >
            set current time
          </Button>
        </Stack>
        <Stack>
          <h4>hola</h4>
        </Stack>
      </div>
    </div>
  );
};

export default App;
