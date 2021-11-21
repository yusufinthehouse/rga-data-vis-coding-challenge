import { useEffect, useState } from "react";
import Head from "next/head";
import { createStyles, makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IntertwinedLineChart from "../component/IntertwinedLineChart";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: { padding: theme.spacing(3) },
    formTitle: { marginBottom: theme.spacing(5) },
    formInput: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    formButton: {
      marginBottom: theme.spacing(10),
      marginTop: theme.spacing(5),
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState([
    { label: "Q1 - 2020", percentageInDecimal: 0.3 },
    { label: "Q2 - 2020", percentageInDecimal: 0.2 },
    { label: "Q3 - 2020", percentageInDecimal: 0.15 },
    { label: "Q1 - 2021", percentageInDecimal: 0.35 },
    { label: "Q2 - 2021", percentageInDecimal: 0.6 },
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (index, key, value) => {
    const tempData = data;
    tempData[index][key] = value;

    setData([...tempData]);
  };

  const handleAddItem = () => {
    const tempData = data;
    tempData.push({ label: "New Item", percentageInDecimal: 0 });

    setData([...tempData]);
  };

  const handleDeleteItem = (index) => {
    const tempData = data;
    tempData.splice(index, 1);

    setData([...tempData]);
  };

  return (
    <Grid container classes={{ root: classes.root }}>
      <Head>
        <title>Yusuf - RGA Data Vis Coding Challenge</title>
        <meta name="description" content="RGA Data Vis Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item xs={12}>
        <Typography variant="h5" classes={{ root: classes.formTitle }}>
          Testing Form
        </Typography>
      </Grid>

      <Grid item xs={12}>
        {data.map((item, key) => (
          <Grid item container key={`form-data-${key}`}>
            <Grid item xs={4} classes={{ root: classes.formInput }}>
              <TextField
                variant="standard"
                label="Label"
                fullWidth
                placeholder="Set Item Name Here"
                defaultValue={data[key].label}
                onChange={(event) =>
                  handleChange(key, "label", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={2} classes={{ root: classes.formInput }}>
              <TextField
                variant="standard"
                label="Percentage In Decimal"
                fullWidth
                type="number"
                value={data[key].percentageInDecimal}
                onChange={(event) =>
                  handleChange(key, "percentageInDecimal", event.target.value)
                }
              />
            </Grid>
            <Grid
              item
              container
              xs={2}
              justifyContent="flex-end"
              alignItems="flex-end"
              classes={{ root: classes.formInput }}
            >
              <IconButton
                color="error"
                aria-label="delete item"
                component="span"
                onClick={() => handleDeleteItem(key)}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={8} justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem}
          classes={{ root: classes.formButton }}
        >
          Add New Item
        </Button>
      </Grid>

      <Grid item xs={12}>
        <IntertwinedLineChart data={data} width={900} height={400} />
      </Grid>
    </Grid>
  );
}
