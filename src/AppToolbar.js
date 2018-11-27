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
  constructor(props) {
    super(props);
    this.state = {selectedTabIndex: 0 };
}
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
          selectedTab={0}
          className="tabs"
        />
      </Toolbar>
      )     
  }

  onTabNav(tab) {
    if(tab.index !== this.state.selectedTabIndex) {
      switch(tab.options.label) {
        case "Home" :
         console.log('home');
         break;
        case "Roster" :
          console.log("roser");
          break;
        case "Season Stats":
          console.log("Season stats")
          break;

      }
    }
    this.setState({ selectedTabIndex: tab.index })

  }

  
}

export default AppToolbar;