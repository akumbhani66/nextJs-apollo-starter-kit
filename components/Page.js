import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  maxWidth: 1140,
  ruutHeight: 600,
  desktopHeader: 161,
  mobileHeader: 300,
  tabletHeader: 400,
  contentHeight: 200,
  tabletBreakpoint: 992,
  mobileBreakpoint: 768,
  smallBreakpoint: 500,
};

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          {children}
        </Fragment>
      </ThemeProvider>
    );
  }
}
