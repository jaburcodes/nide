import React, { Component } from "react";

import { withStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const styles = (theme: Theme) => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5
    }
});

interface PaginationProps {
    onChangePage: any;
    page: any;
    count: any;
    rowsPerPage: any;
    classes: any;
    theme: Theme;
}

class Pagination extends Component<PaginationProps, {}> {
    handleFirstPageButtonClick = (event: any) => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = (event: any) => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = (event: any) => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = (event: any) => {
        this.props.onChangePage(
            event,
            Math.max(
                0,
                Math.ceil(this.props.count / this.props.rowsPerPage) - 1
            )
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === "rtl" ? (
                        <LastPageIcon />
                    ) : (
                        <FirstPageIcon />
                    )}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === "rtl" ? (
                        <FirstPageIcon />
                    ) : (
                        <LastPageIcon />
                    )}
                </IconButton>
            </div>
        );
    }
}

const PaginationWrapped = withStyles(styles, { withTheme: true })(Pagination);

export default PaginationWrapped;
