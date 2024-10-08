import React from "react"
import Spacing from "@components/spacing"
import { Image } from "@components/image"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button, Typography, Box } from "@material-ui/core"
import InfoSharpIcon from "@material-ui/icons/InfoSharp"

import { UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  rule: {
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
  },
  number: {
    margin: "0px 20px",
    padding: "0px 10px",
    borderRadius: "50%",
    border: `5px solid ${theme.palette.secondary.dark}`,
    width: "70px",
    height: "70px",
    lineHeight: "60px",
    textAlign: "center",
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: "34px",
    fontWeight: 700,
  },
  projectTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "20px",
    padding: "0 16px",
  },
  projectFont: {
    fontSize: "41.15px",
    lineHeight: "57.61px",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: "3rem",
      lineHeight: "56px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "3.5rem",
      lineHeight: "64px",
    },
    marginLeft: "30px",
  },
  rulesContainer: {
    flexWrap: "nowrap",
    backgroundColor: "#250849",
  },
  boxRulesContainer: {
    padding: "0px 60px",
  },
  rulesItemsContainer: {
    flexWrap: "nowrap",
    backgroundColor: "#230B42",
    alignItems: "center",
    margin: "30px 0px",
  },
  rulesInsideContainer: {
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      margin: "30px 0px",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      margin: "30px 1px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      margin: "30px 1px",
    },
    flexWrap: "nowrap",
    alignItems: "center",
    backgroundColor: "#7F00FA33",
    height: "244px",
  },
  rulesSeparator: {
    margin: "25px 0px",
    display: "flex",
    alignItems: "center",
  },
  rulesSeparatorSvg: {
    width: "38px",
    height: "244px",
  },
  importantRule: {
    lineHeight: "28px",
    color: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 700,
  },
  buttonSmart: {
    padding: "16px 4px",
  },
  buttonText: {
    padding: 16,
    color: "#FFF",
    lineHeight: "28px",
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 400,
  },
  buttonContainer: {
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      width: "100%",
      marginTop: "5px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      width: "35%",
      marginTop: "-4px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      width: "35%",
      marginTop: "-4px",
    },
  },
  button: {
    width: "100%",
    backgroundColor: "#07B1EF4D",
    fontFamily: "inherit",
    borderRadius: "2px",
    border: "3px solid #02BBFF",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      padding: "24px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      padding: "0",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      padding: "0",
    },
  },
  clipSeparator: {
    marginTop: "5px",
    marginLeft: "-100px",
  },
  participateContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "-50px",
  },
  participateHint: {
    color: "#2E3192",
    lineHeight: "28px",
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 700,
  },
}))

const RulesDesktop = (props: RulesProps) => {
  const classes = useStyles()
  return (
    <Spacing smart={{ margin: "24px auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item key={"como-participar"} className={classes.projectTitle}>
          <Image src={`2024/white-raio.svg`} />
          <Typography
            className={classes.projectFont}
            variant="body1"
            component="p"
          >
            Como participar
          </Typography>
        </Grid>
        <Grid
          item
          key={"inner_container"}
          className={classes.boxRulesContainer}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            className={classes.rulesContainer}
          >
            {/* <Grid item key={"test1"} className={classes.rulesSeparator}>
              <Image
                className={classes.rulesSeparatorSvg}
                src={`2023/separator-rules.svg`}
              />
            </Grid> */}
            {props.rules?.map((rule, index) => (
              <Grid
                container
                direction="row"
                className={classes.rulesInsideContainer}
              >
                <Grid item key={index}>
                  <div className={classes.number} style={{background: "linear-gradient(180deg, #21083B 18.5%, #510D5B 87%, #710568 96%)"}}>{index + 1}</div>
                </Grid>
                <Grid item key={`rule${index}`}>
                  {rule}
                </Grid>
              </Grid>
            ))}
            {/* <Grid item key={"img"} className={classes.rulesSeparator}>
              <Image
                className={classes.rulesSeparatorSvg}
                src={`2023/separator-rules.svg`}
              />
            </Grid> */}
          </Grid>
          {!props.user && (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              className={classes.participateContainer}
            >
              <Grid item className={classes.clipSeparator}>
                <Image src={`2024/clip-separator.svg`} />
              </Grid>
              <Grid item className={classes.buttonContainer}>
                <Button
                  href="/login"
                  style={{ display: "block" }}
                  className={classes.button}
                  size="large"
                  fullWidth
                >
                  <Typography
                    className={classes.buttonText}
                    component="p"
                    variant="body2"
                    align="center"
                  >
                    PARTICIPAR COM SUA CONTA DO GITHUB
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Spacing>
  )
}

const RulesSmart = (props: RulesProps) => {
  const classes = useStyles()
  return (
    <Spacing smart={{ margin: "0 auto 100px auto" }}>
      <div>
        <Grid container direction="column">
          <Grid item key={"como-participar"} className={classes.projectTitle}>
            <Image src={`2024/white-raio.svg`} />
            <Typography
              className={classes.projectFont}
              variant="body1"
              component="p"
            >
              Como participar
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-between"
          className={classes.rulesContainer}
        >
          {props.rules.map((rule, index) => (
            <Grid
              container
              direction="row"
              className={classes.rulesInsideContainer}
            >
              <Grid xs={3} item key={`number${index}`}>
                <div className={classes.number}>{index + 1}</div>
              </Grid>
              <Grid xs={8} item key={`rule${index}`}>
                {rule}
              </Grid>
            </Grid>
          ))}
        </Grid>

        {!props.user && (
          <div className={classes.buttonSmart}>
            <Button
              href="/login"
              style={{ display: "block" }}
              className={classes.button}
              size="large"
              fullWidth
            >
              <Typography
                className={classes.buttonText}
                component="p"
                variant="body2"
                align="center"
              >
                PARTICIPAR COM SUA CONTA DO GITHUB
              </Typography>
            </Button>
          </div>
        )}
      </div>
    </Spacing>
  )
}

interface RulesProps {
  rules?: any[]
  user?: UserProps
}

const Rules = (props: RulesProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  })

  const rules = [
    <Typography className={classes.rule}>
      Contribua com{" "}
      <span className={classes.importantRule}>um Pull Request</span> em qualquer
      projeto Open Source da Globo{" "}
      <span className={classes.importantRule}>durante o mês de outubro</span>.
    </Typography>,
    <Typography className={classes.rule}>
      Garanta que pelo menos{" "}
      <span className={classes.importantRule}>um pull request</span> seja{" "}
      <span className={classes.importantRule}>ACEITO</span>.
    </Typography>,
    <Typography className={classes.rule}>
      Os primeiros inscritos que completarem os requisitos mínimos{" "}
      <span className={classes.importantRule}>ganharão uma camiseta</span>
      . <br />
      <Box display="flex" alignItems="center">
        <InfoSharpIcon
          style={{ color: "#FFD700", marginRight: "2px", fontSize: "24px" }}
        />
        <Typography variant="body2" style={{ fontStyle: "italic" }}>
          Envio de camisetas somente para o Brasil!
        </Typography>
      </Box>
    </Typography>,
  ]

  return (
    <div>
      {isDesktop ? (
        <RulesDesktop user={props.user} rules={rules} />
      ) : (
        <RulesSmart rules={rules} />
      )}
    </div>
  )
}

export default Rules
