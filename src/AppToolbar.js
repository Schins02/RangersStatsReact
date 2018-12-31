import React, { Component } from 'react';
import { Toolbar, ToolbarTitle, Tabs } from "polythene-react";
import { ToolbarCSS, TabsCSS } from "polythene-css";
import './App.css';

ToolbarCSS.addStyle(".app-toolbar", {
  color_light_background: "#0b215c"
})

TabsCSS.addStyle(".tabs", {
  color_light_text: "red",
  color_light_selected: "white",
  color_light_tab_indicator: "white",
})

class AppToolbar extends Component {

  state = { selectedTabIndex: 0 };

  render() {
    return  (
      <Toolbar className="app-toolbar">
        <ToolbarTitle className="toolbar-title">Rangers Stats</ToolbarTitle>
        <Tabs
          onChange={index => this.onTabNav(index)}
          tabs={[
            { label: "Home" },
            { label: "Roster" },
            { label: "Season Stats" }
          ]}
          autofit
          menu
          selectedTabIndex={0}
          className="tabs"
        />
      </Toolbar>
      );     
  }

  onTabNav(tab) {
    if(tab.index !== this.state.selectedTabIndex) {
      this.props.onTabChange(tab);
    }
    this.setState({ selectedTabIndex: tab.index })
  }

}

export default AppToolbar;